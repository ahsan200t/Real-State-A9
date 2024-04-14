import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

/* eslint-disable react/prop-types */
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]=useState(true)
  // Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   SignIn User

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer

  useEffect(() => {
   const usSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false)
      }
    });
    return ()=> usSubscribe();
  }, []);

  

  //   Google Login

  const googleLogIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //   Github Login

  const githubLogIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  //   Logout
  const logOut = () => {
    setUser(null)
   return signOut(auth);
   };

  const authInfo = {
    createUser,
    signInUser,
    googleLogIn,
    githubLogIn,
    logOut,
    user,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
