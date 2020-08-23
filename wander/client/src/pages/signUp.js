import React, {useContext, useState, useEffect} from "react";
import firebase from '../config.js';
import { Button } from "react-bootstrap";
import axios from "axios";
import UserContext from "../utils/userContext";
import Header from "../components/sign-up/index";
import './styles/signUp.css';

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
        axios.post("/api/user", {uid: user.uid})
          .then(() => {
            console.log(user);
            // SET THE ID IN THE GLOBAL USER STATE
            userState.setID(user.uid)
            // Save refresh-token to local storage
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
          <div>
          <Header />
          </div>
          <div className="center">
            <Button onClick={signUp} variant="primary" size="lg" >
            Sign-Up With Google
            </Button>
          </div>
        </div>  
      )
    }

}
export default Signup

