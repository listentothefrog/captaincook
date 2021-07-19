import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/auth";
import "firebase/analytics";
import "firebase/performance";

// init firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// analytics
firebase.analytics();

// performance
firebase.performance();

// auth
export const auth = firebase.auth();
