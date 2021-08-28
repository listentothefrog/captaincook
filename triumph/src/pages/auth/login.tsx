import React, { Suspense } from "react";
import IPageProps from "src/interfaces/page";
import { auth } from "src/firebase/firebase";
import { Redirect } from "react-router-dom";
import SpinnerComponent from "src/components/Spinner";
const LoginComponent = React.lazy(() => import("src/components/Login"));
const login: React.FC<IPageProps> = (props) => {
  if (!auth.currentUser) {
    return (
      <Suspense
        fallback={
          <SpinnerComponent
            message={"Crunching on this file, just for you. Hang tight..."}
          />
        }
      >
        <LoginComponent />
      </Suspense>
    );
  } else {
    return <Redirect to="/dashboard" />;
  }
};

export default login;
