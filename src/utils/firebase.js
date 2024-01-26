// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDawnOuSwDx8CVr5QdMIBpY_AFIjOk9Rpo",
  authDomain: "netflixgpt-7281c.firebaseapp.com",
  projectId: "netflixgpt-7281c",
  storageBucket: "netflixgpt-7281c.appspot.com",
  messagingSenderId: "659145004978",
  appId: "1:659145004978:web:7557c28e2c5962215e76ab",
  measurementId: "G-ENJVNC8T59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
