import React, {useContext} from "react";
import axios from "axios";
import UserContext from "../utils/userContext";

// ***** Register PAGE ******
// =============================================================

function Register(props) { 
  // CONNECT TO THE GLOBAL USER OBJECT
  const userState = useContext(UserContext);

  console.log('USER STATE: ', userState);
  return (
  // render html for what the "Register pg" will look like
    <h1>Register</h1>
  )

}
export default Register

