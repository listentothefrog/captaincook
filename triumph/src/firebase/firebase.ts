import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

firebase.analytics();

export default firebase;
