import { auth } from "src/firebase/firebase";

export const loginUser = async (email: string, password: string) => {
  await auth.signInWithEmailAndPassword(email, password);
};

export const registerUser = async (email: string, password: string) => {
  await auth.createUserWithEmailAndPassword(email, password);
};

export const logOut = async () => {
  await auth.signOut();
};

export const sendEmailVerification = async () => {
  await auth.currentUser?.sendEmailVerification();
};
