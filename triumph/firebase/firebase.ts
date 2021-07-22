import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuv9Xe_4hjYoVgPJ5tHi7RAeqV9avvg5A",
  authDomain: "captaincook-dev.firebaseapp.com",
  projectId: "captaincook-dev",
  storageBucket: "captaincook-dev.appspot.com",
  messagingSenderId: "853200581438",
  appId: "1:853200581438:web:52eb92d91237394eb8b26f",
  measurementId: "G-6P3GB3GPSL",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();

export { auth };
