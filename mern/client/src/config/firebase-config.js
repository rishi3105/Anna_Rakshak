// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRIvemGoPvw67CfWy01ow5yleikfOQhrY",
  authDomain: "anna-rakshak.firebaseapp.com",
  databaseURL: "https://anna-rakshak-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anna-rakshak",
  storageBucket: "anna-rakshak.firebasestorage.app",
  messagingSenderId: "914656507623",
  appId: "1:914656507623:web:a9991733322321ee6d5442",
  measurementId: "G-LS98CY52DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);