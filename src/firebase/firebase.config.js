import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmvFCPLbcopTGMCETtedcdNeuWDtURfiE",
  authDomain: "assignment-9-49c3b.firebaseapp.com",
  projectId: "assignment-9-49c3b",
  storageBucket: "assignment-9-49c3b.appspot.com",
  messagingSenderId: "441142975740",
  appId: "1:441142975740:web:286056174a751196354b79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;