import React, {useContext, useState, useEffect} from "react";
import firebase from '../config.js';
import { Button } from "react-bootstrap";
import axios from "axios";
import UserContext from "../utils/userContext";
import Login from "../components/Login/Login.js"
import './pageStyles/signUp.css';

// ***** LOGIN PAGE ******
// =============================================================
var provider = new firebase.auth.GoogleAuthProvider();

function Signup(props) { 
  // CONNECT TO THE GLOBAL USER OBJECT to set the user's unique ID from firebase
  const userState = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  
  const signUp = () => {
    firebase.auth().signInWithPopup(provider)
      .then(({user}) => {
        // AXIOS CALL 
        axios.post("/api/user", {uid: user.uid, photoURL: user.photoURL})
          .then(() => {
            console.log(user);
            // SET THE ID IN THE GLOBAL USER STATE
            userState.setID(user.uid)
            // Save refresh-token to local storage
            // userState.setImage(user.photoURL)
            localStorage.setItem("token", user.refreshToken)
            // save photo URL to local storage 
            localStorage.setItem("photo", user.photoURL)
            // Redirect to main pg (register.js)
            props.history.push("/register")

          }).catch(err => console.log("ERROR: ", err))        
      })
      .catch(console.error)
    };

    useEffect(() => {
      const token = localStorage.getItem("token");
      if(token){
        props.history.push("/map")
      } else {
        setIsLoading(false)
      }
    }, []);

    if(isLoading){
      return (
        <p>Loading ...</p>
      )
    } else {
      return (
        <div>
          
          <Login>

          </Login>
         
        <Button onClick={signUp} variant="primary" size="lg" block>
        Sign-Up With Google
          </Button>
        </div>
      )
    }

}
export default Signup
