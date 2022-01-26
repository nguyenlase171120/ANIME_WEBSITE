// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0WJDj5LTMjMgKQkCi1ZMspu1nrdvPzYs",
  authDomain: "movie-project-92280.firebaseapp.com",
  projectId: "movie-project-92280",
  storageBucket: "movie-project-92280.appspot.com",
  messagingSenderId: "800280904644",
  appId: "1:800280904644:web:6d90dc64d650f8f06d1a91",
  measurementId: "G-91CSGB6TMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
