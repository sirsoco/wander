import React, { useState } from "react";
import firebase from "../config.js";


export default function useProvideAuth() {
  // user state
  const [user, setUser] = useState(null);

  const [id, setID] = useState(null);

  
  return {
    user,
    setUser,
    id,
    setID,

  };
}
