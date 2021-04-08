import React, { useState, useEffect, useContext } from 'react';
import firebase from '../config.js';
import authContext from '../utils/authContext';
import LoginUi from '../components/LoginUi/LoginUi.js';


// initializing firebase 
var provider = new firebase.auth.GoogleAuthProvider();

function Signup(props) {
  // state for loader-indicator
  const [isLoading, setIsLoading] = useState(true);

  // connecting to global context
  const auth = useContext(authContext);

  useEffect(() => {
    // checking to see if user is already authenticated
    const token = localStorage.getItem("token");
    
    if (token) {
// set authentication to true
      auth.setID(true);
      props.history.push("/map")

    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  } else {
    return (
      <div>
        <LoginUi></LoginUi>
      </div>
    );
  }
}
export default Signup;
