//importd
import React, {useState, useEffect, useContext} from 'react'
import axios from "axios";
import UserContext from "../../utils/userContext";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'

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

firebase.initializeApp(firebaseConfig);

function Auth(props) {

 // The component's Local state.
const [isSignedIn, setState] = useState({
  isSignedIn: false // Local signed-in state.
});

// CONNECT TO THE GLOBAL USER OBJECT to set the user's unique ID from firebase
const userState = useContext(UserContext);
const [isLoading, setIsLoading] = useState(true);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: '/register',
  
    // redirect to Home Page 
  callbacks: {
      signInSuccessWithAuthResult: function({user}, redirectUrl) {

        console.log("hello");
        console.log('authResult', user);
        console.log('redirect',redirectUrl);
      
        axios.post("/api/user", {uid: user.uid, photoURL: user.photoURL})
        .then(() => {
          console.log(user);

          // SET THE ID IN THE GLOBAL USER STATE
          userState.setID(user.uid);
          console.log('id', user.id)
          console.log('uid1', user.uid);
          // Save refresh-token to local storage
          // userState.setImage(user.photoURL)
          localStorage.setItem("token", user.refreshToken);
          // save photo URL to local storage 
          localStorage.setItem("photo", user.photoURL);
        // redirect to register pages
        window.location.assign('/register')
          }).catch(err => console.log("ERROR: ", err));     
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      },
}

}

useEffect(() => {
  // Listen to the Firebase Auth state and set the local state.
  const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    (user) => setState({isSignedIn: !!user}))
   // Make sure we un-register Firebase observers when the component unmounts 
  return () => { unregisterAuthObserver()
  }
}, [])

return (
  <div>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
  </div> 
)
}
export default Auth

