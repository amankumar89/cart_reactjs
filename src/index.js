import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXLKOH4l2TCuUWZU_Xi_oxp_mqF6XHl0k",
  authDomain: "cart-9a1e9.firebaseapp.com",
  projectId: "cart-9a1e9",
  storageBucket: "cart-9a1e9.appspot.com",
  messagingSenderId: "173523123053",
  appId: "1:173523123053:web:1aab91e68ff3a1e3bf3864",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
