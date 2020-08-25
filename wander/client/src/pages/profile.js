import React, { useContext, useState, useEffect } from "react";
import UserContext from '../utils/userContext'
import API from '../utils/api'


// ***** Profile PAGE ******
// =============================================================


function Profile
(props) 
{
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

