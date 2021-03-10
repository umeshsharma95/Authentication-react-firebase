import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCFdmBAA0HtGI35BznxhLdcgJ0EFiSnmPI",
  authDomain: "auth-development-d2da4.firebaseapp.com",
  projectId: "auth-development-d2da4",
  storageBucket: "auth-development-d2da4.appspot.com",
  messagingSenderId: "373395161779",
  appId: "1:373395161779:web:60220c771bbecfd90c66c6"
})

export const auth = app.auth();
export default app;