// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Uj3DAtPqFGNaog1NxdXz0wBAwq6tt5k",
  authDomain: "reactrafa-d73b7.firebaseapp.com",
  projectId: "reactrafa-d73b7",
  storageBucket: "reactrafa-d73b7.appspot.com",
  messagingSenderId: "817280330108",
  appId: "1:817280330108:web:35996654997b32f0c39cf9",
  measurementId: "G-GKM445DSR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;