import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import firebaseInitializeApp from "../Pages/Login/Login/Firebase/firebase.init";

firebaseInitializeApp();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  /* Create Account */
  const register = (email, password, name, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsloading(false));
  };

  /* Log In */
  const logIn = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  /* Google Sign In */
  const googleSignIn = (location, history) => {
    setIsloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
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

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    googleSignIn,
    register,
    logOut,
    logIn,
    user,
    error,
    setIsloading,
    isloading,
    admin,
  };
};

export default useFirebase;
