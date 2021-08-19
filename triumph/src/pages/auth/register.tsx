import React, { Suspense } from "react";
import { Redirect } from "react-router-dom";
import SpinnerComponent from "src/components/Spinner";
import { auth } from "src/firebase/firebase";
import IPageProps from "src/interfaces/page";
const RegisterComponent = React.lazy(() => import("src/components/Register"));

const register: React.FC<IPageProps> = (props) => {
  if (!auth.currentUser) {
    return (
      <Suspense fallback={<SpinnerComponent />}>
        <RegisterComponent />
      </Suspense>
    );
  } else {
    return <Redirect to="/dashboard" />;
  }
};
export default register;
