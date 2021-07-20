import React, { useEffect } from "react";
import router from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import { initFirebase } from "./firebase";
import { AppProps } from "next/dist/next-server/lib/router/router";

initFirebase();
const auth = firebase.auth();

const withAuth =
  ({ Component }: AppProps) =>
  (props: any) => {
    useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (!authUser) {
          router.push("/signin");
        }
      });
    }, []);

    return (
      <div>
        <Component {...props} />
      </div>
    );
  };

export default withAuth;
