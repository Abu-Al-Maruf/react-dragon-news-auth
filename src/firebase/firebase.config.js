// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4NZAm-iVvyWD9z6NqeCZCr3UOGZwkjlQ",
  authDomain: "react-dragon-news-auth-394a4.firebaseapp.com",
  projectId: "react-dragon-news-auth-394a4",
  storageBucket: "react-dragon-news-auth-394a4.appspot.com",
  messagingSenderId: "703594508520",
  appId: "1:703594508520:web:868f878896cffe7fefd95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;