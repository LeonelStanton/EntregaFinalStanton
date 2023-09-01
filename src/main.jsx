import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ2PvLeL_BP-EqjC4t4QkpbvyCqbNOn6E",
  authDomain: "proyectoreactcoder-c752e.firebaseapp.com",
  projectId: "proyectoreactcoder-c752e",
  storageBucket: "proyectoreactcoder-c752e.appspot.com",
  messagingSenderId: "956110932549",
  appId: "1:956110932549:web:536cff8d6a64c22e40712c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
