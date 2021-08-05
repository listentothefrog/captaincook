import { Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "src/firebase/firebase";
import IPageProps from "src/interfaces/page";
const RegisterComponent = React.lazy(() => import("src/components/Register"));

const register: React.FC<IPageProps> = (props) => {
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
        <RegisterComponent />
      </Suspense>
    );
  } else {
    return <Redirect to="/dashboard" />;
  }
};
export default register;
