import {
    GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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
  console.log(user);
  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   SignIn User

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //   Google Login

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

//   Github Login

const githubLogIn=()=>{
    return signInWithPopup(auth, githubProvider)
}

  const authInfo = {
    createUser,
    signInUser,
    googleLogIn,
    githubLogIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
