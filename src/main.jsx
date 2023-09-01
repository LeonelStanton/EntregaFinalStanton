import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZ2PvLeL_BP-EqjC4t4QkpbvyCqbNOn6E",
  authDomain: "proyectoreactcoder-c752e.firebaseapp.com",
  projectId: "proyectoreactcoder-c752e",
  storageBucket: "proyectoreactcoder-c752e.appspot.com",
  messagingSenderId: "956110932549",
  appId: "1:956110932549:web:536cff8d6a64c22e40712c"
};


const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
