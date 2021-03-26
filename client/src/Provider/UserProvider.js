import React, { useState } from "react";
import firebase from "../config.js";


export default function useProvideAuth() {
  // user state
  const [user, setUser] = useState(null);

  const signin = () => {
    firebase.auth().signOut( () => {
      setUser(null);
    });
  };



  return {
    user,
    setUser,
    signin 
  };
}
