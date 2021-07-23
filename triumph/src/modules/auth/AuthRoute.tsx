import React, { ReactNode } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../firebase/firebase";

interface IAuthRouteProps {
  children: ReactNode;
}

const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
  const { children } = props;

  if (!auth.currentUser) {
    return <Redirect to="/auth/signup" />;
  }
  return <div>{children}</div>;
};

export default AuthRoute;
