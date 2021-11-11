import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import firebaseInitializeApp from "../Pages/Login/Login/Firebase/firebase.init";

firebaseInitializeApp();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {setUser([])})
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    googleSignIn,
    user,
    error,
    logOut
  };
};

export default useFirebase;
