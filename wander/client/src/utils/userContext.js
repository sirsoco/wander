import React from "react";

const UserContext = React.createContext({
    id: "",
    setID: () => null,
    name: "Joe",
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
    setHocbbies: () => null,
    destination: "Dubai",
    // setDestination: () => null,
    // onChange: () => undefined
});

export default UserContext;