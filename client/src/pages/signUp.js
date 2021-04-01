import React, { useState, useEffect } from "react";
import firebase from '../config.js';
import Login from "../components/Login/Login.js";
import FirebaseUiAuth from '../components/Auth/Auth.js';


// public login page app intializes at
var provider = new firebase.auth.GoogleAuthProvider();

function Signup(props) {
  //state for loader-indicator
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // checking to see if user is already authenticated
    const token = localStorage.getItem("token");

    if (token) {
      //props.history.push("/map")
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div> 
       <Login></Login>
      </div>
    );
  }
}
export default Signup;
