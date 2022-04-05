// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoWE--EaBEVP8hJ4vAFGgHHKd3xn252jk",
  authDomain: "housemine-3ea76.firebaseapp.com",
  projectId: "housemine-3ea76",
  storageBucket: "housemine-3ea76.appspot.com",
  messagingSenderId: "668369894881",
  appId: "1:668369894881:web:04deb9ef10ce2ce904a6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
