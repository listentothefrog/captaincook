import React, { Suspense } from "react";
import IPageProps from "src/interfaces/page";
import { auth } from "src/firebase/firebase";
import { Redirect } from "react-router-dom";
import { Spinner } from "@chakra-ui/spinner";
const LoginComponent = React.lazy(() => import("src/components/Login"));
const login: React.FC<IPageProps> = (props) => {
  if (!auth.currentUser) {
    return (
      <Suspense
        fallback={
          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#6c9e4f"
            size="md"
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
