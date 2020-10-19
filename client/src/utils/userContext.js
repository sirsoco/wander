import React from "react";

const UserContext = React.createContext({
    id: "",
    setID: () => null,
    name: "",
    setName: () => null,
    age: 32,
    setAge: () => null,
    career: "CEO",
    setCareer: () => null,
    education: "MBA",
    setEducation: () => null,
    currentLocation: "London",
    setCurrentLocation: () => null,
    hobbies: "hiking",
    setHobbies: () => null,
    destination: "Dubai",
    image: "",
    setImage: () => null,

    // setDestination: () => null,
    // onChange: () => undefined
});

export default UserContext;