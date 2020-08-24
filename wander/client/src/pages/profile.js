import React, { useContext, useState, useEffect } from "react";
// import API from "../utils/api";
// import axios from "axios";
import UserContext from '../utils/userContext'
import API from '../utils/api'
// import "/src/components/userForm/style.css";
// import UserContext from "../utils/userContext";

// ***** Profile PAGE ******
// =============================================================
const [profile, setProfile] = useState({
    name: "",
    age: "",
    career: "",
    education: "",
    currentLocation: "",
    hobbies: "",
    destination: "",
    photoURL: ""
  })

function Profile(props) {
  console.log("PROFILE PROPS: ", props)
  const { matchId } = props.location.state
  useEffect(() => {
    if (matchId) {
      API.getUserProfile(matchId).then(
        (response) => {
          console.log("RESPONSE: ", response);
          setProfile({
            name: response.name,
            age: response.age,
            career: response.career,
            education: response.education,
            currentLocation: response.currentLocation,
            hobbies: response.hobbies,
            destination: response.destination,
            photoURL: response.photoURL
          })
        })
    }
  }, [matchId]);

  return (
    <h1>Hello World</h1>
  );

}
export default Profile

