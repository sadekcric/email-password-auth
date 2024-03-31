// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpKSYWsy-PLvaKpEdm1RHuCjI2bO8CpiY",
  authDomain: "name-email-auth.firebaseapp.com",
  projectId: "name-email-auth",
  storageBucket: "name-email-auth.appspot.com",
  messagingSenderId: "497124404122",
  appId: "1:497124404122:web:c600c43fd6ca0c399c2823",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
