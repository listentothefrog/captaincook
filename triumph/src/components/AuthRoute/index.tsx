import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "src/firebase/firebase";

export interface IAuthRouteProps {}

const AuthRoute: React.FC<IAuthRouteProps> = (props) => {
  const { children } = props;
  if (!auth.currentUser) {
    console.log("No user detected");
    return <Redirect to="/login" />;
  }
  return <div>{children}</div>;
};

export default AuthRoute;
