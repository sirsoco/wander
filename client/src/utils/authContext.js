import React from "react";

//creating global context 
const authContext = React.createContext({
    user: "",
    setUser: () => null,
    id: "",
    setID: () => null,
    name: "",
    setName: () => null,
    age: '',
    setAge: () => null,
    career: "",
    setCareer: () => null,
    education: "",
    setEducation: () => null,
    currentLocation: "",
    setCurrentLocation: () => null,
    hobbies: "",
    setHobbies: () => null,
    destination: "",
    image: "",
    setImage: () => null,
});

export default authContext;