import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// Social Auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

/* eslint-disable react/prop-types */
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Update user profile
  
    const updateUserProfile = (fullName, photoURL,email) => {
      return updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: photoURL,
        email: email
       
      });
    };
  
  //   SignIn User

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
       
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  //   Google Login

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Github Login

  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //   Logout
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    signInUser,
    googleLogIn,
    githubLogIn,
    logOut,
    user,
    loading,
    updateUserProfile,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
