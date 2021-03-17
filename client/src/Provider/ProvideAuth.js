import React, { createContext, useContext, useState } from "react";
import firebase from "../config.js";
import useProvideAuth from "./UserProvider.js";
import authContext from '../utils/authContext.js';

export default function ProvideAuth({ children }) {
  
  const auth = useProvideAuth();
  

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

