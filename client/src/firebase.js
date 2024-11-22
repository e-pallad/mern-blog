// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-63dbc.firebaseapp.com",
  projectId: "mern-blog-63dbc",
  storageBucket: "mern-blog-63dbc.firebasestorage.app",
  messagingSenderId: "122602553247",
  appId: "1:122602553247:web:8b86d007416280c0ef87aa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
