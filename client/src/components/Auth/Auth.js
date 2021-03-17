//imports 
import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../config';
//import firebaseConfig from '../../config'
import useAuth from '../../utils/useAuth';
//import uiConfig from '../../config'


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

  export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],

      // redirect to Home Page 
      //signInSuccessUrl: '/register',
      
      // no re-direct
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
  };

firebase.initializeApp(firebaseConfig)

export default function Auth() {

    const [isSignedIn, setState] = useState({
        isSignedIn: false // local signed-in state 
    })

    const signoutCB = () => {
        console.log('hello')
    }
    useEffect(() => {
        //listening to the Firebase Auth state and setting local state
    const unregsiterAuthObserver = firebase.auth().onAuthStateChanged(
        
        (user) => setState({isSignedIn: !!user}));

        console.log('user:', isSignedIn); 

        // make sure we unregister Firebase observers when the component unmounts
        return () => { unregsiterAuthObserver()
        }
    }, [])


    if (!isSignedIn) {
        return (
          <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        );
      }

      return (
        <div>
          <h1>My App</h1>
          <p>Welcome ! You are now signed-in!</p>
          <a onClick={() => firebase.auth().signOut().then(signoutCB)}>Sign-out</a>
        </div>
      );
}