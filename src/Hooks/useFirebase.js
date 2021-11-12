import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import firebaseInitializeApp from "../Pages/Login/Login/Firebase/firebase.init";

firebaseInitializeApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  /* Create Account */
  const register = (email, password) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsloading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  /* Log In */
  const logIn = (email, password) => {
    setIsloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* Google Sign In */
  const googleSignIn = () => {
    setIsloading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setIsloading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  /* State Change */
  useEffect(() => {
    setIsloading(true);
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscriber;
  }, []);

  return {
    googleSignIn,
    register,
    logOut,
    logIn,
    user,
    error,
    setIsloading,
  };
};

export default useFirebase;
