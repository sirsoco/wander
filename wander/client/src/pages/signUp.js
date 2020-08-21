import React, {useContext} from "react";
import firebase from '../config.js';
import { Button } from "react-bootstrap";
import axios from "axios";
import UserContext from "../utils/userContext";

// ***** LOGIN PAGE ******
// =============================================================
var provider = new firebase.auth.GoogleAuthProvider();

function Signup(props) { 
  // CONNECT TO THE GLOBAL USER OBJECT to set the user's unique ID from firebase
  const userState = useContext(UserContext);

  const signUp = () => {
    firebase.auth().signInWithPopup(provider)
      .then(({user}) => {
        // AXIOS CALL 
        axios.post("/api/user", {uid: user.uid})
          .then(() => {
            console.log(user);
            // SET THE ID IN THE GLOBAL USER STATE
            userState.setID(user.uid)
     
            // Redirect to main pg (register.js)
            props.history.push("/register")

          }).catch(err => console.log("ERROR: ", err))        
      })
      .catch(console.error)
    };

return (
  // render html for what the "login pg" will look like
  <Button onClick={signUp} variant="primary" size="lg" block>
  Sign-Up With Google
  </Button>
)

}
export default Signup

