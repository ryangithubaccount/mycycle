import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const email = "laura76321@gmail.com";
const password = "bob123";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  
    apiKey: "AIzaSyD16P4y1nJmz7K1gwDqnDwPcCEAXNr8KcE",
    authDomain: "mycycle-1665e.firebaseapp.com",
    projectId: "mycycle-1665e",
    storageBucket: "mycycle-1665e.appspot.com",
    messagingSenderId: "536953144557",
    appId: "1:536953144557:web:776ca5d6881409b01cb8e4",
    measurementId: "G-W72QPBJFBZ"
  
};

const app = initializeApp(firebaseConfig);
const our_app = new App();


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
