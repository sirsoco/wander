import React, { useState } from "react";
import authContext from '../utils/authContext.js';

export default function ProvideAuth({ children }) {
  
  const [user, setUserState] = useState({
    id: "",
    name: "",
    age: "",
    career: "",
    education: "",
    currentLocation: "",
    hobbies: "",
    destination: "",
    setID: (id) => {
      setUserState({...user, id})
    },
    setName: (name) => {
      setUserState({...user, name})
    },
    setAge: (age) => {
      setUserState({...user, age})
    },
    setCareer: (career) => {
      setUserState({...user, career})
    },
    setEducation: (education) => {
      setUserState({...user, education})
    },
    setCurrentLocation: (currentLocation) => {
      setUserState({...user, currentLocation})
    },
    setHobbies: (hobbies) => {
      setUserState({...user, hobbies})
    },
    setDestination: (destination) => {
      setUserState({...user, destination})
    }
  });

  return (
    <authContext.Provider value={user}>
      {children}
    </authContext.Provider>
  );
}

