import React, {useContext} from "react";
import firebase from '../config.js';
import { Button } from "react-bootstrap";
import axios from "axios";
import UserContext from "../utils/userContext";

// ***** LOGIN PAGE ******
// =============================================================
var provider = new firebase.auth.GoogleAuthProvider();

function Login(props) { 
  // CONNECT TO THE GLOBAL USER OBJECT
  const userState = useContext(UserContext);

  const login = () => {
    firebase.auth().signInWithPopup(provider)
      .then(({user}) => {
        // 1) AXIOS CALL 
        axios.post("/api/user", {uid: user.uid})
          .then(() => {
            console.log(user);
            // SET THE ID IN THE GLOBAL USER STATE
            userState.setID(user.uid)
            // 2) STORE USER INFO (refreshToken) in local storage
            
            // 3) Redirect to main pg (register.js)
            props.history.push("/register")

          }).catch(err => console.log("ERROR: ", err))        
      })
      .catch(console.error)
    };

return (
// render html for what the "login pg" will look like
<Button onClick={login} variant="primary" size="lg" block>
Sign-Up With Google
</Button>
)

}
export default Login

