//imports 
import React, { useState, useEffect, useContext } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config';
import authContext from '../../utils/authContext';
import Nav from '../Nav/Nav'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


// const auth = useAuth();
const firebaseConfig = {
    apiKey: "AIzaSyCum9PoI1cn9eYhELZGwcSQozh8B1cFzXw",
    authDomain: "wander-b02e1.firebaseapp.com",
    databaseURL: "https://wander-b02e1.firebaseio.com",
    projectId: "wander-b02e1",
    storageBucket: "wander-b02e1.appspot.com",
    messagingSenderId: "610485274414",
    appId: "1:610485274414:web:ebd67baf84c7a5ccd11cbf",
    measurementId: "G-QGJ58S4EZZ"
  };

  firebase.initializeApp(firebaseConfig)

  // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  
  signInSuccessUrl: '/register',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
 
  
};



export default function Auth(props) {
  
   let auth = useContext(authContext)


  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

      