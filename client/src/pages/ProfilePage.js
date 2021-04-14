import React, { useContext, useState, useEffect } from "react";
import UserContext from '../utils/authContext'
import API from '../utils/api'
import ProfileCard from '../components/ProfileCard/ProfileCard'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import WorkIcon from '@material-ui/icons/Work';
import Nav from "../components/Nav/Nav"



// ***** Profile PAGE ******
// =============================================================


export default function ProfilePage
({location:{state:{matchId}}}) 
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
  
  console.log("PROFILE PROPS: ", matchId)
  //const { matchId } = props.location.state
  useEffect(() => {
    if (matchId) {
      API.getUserProfile(matchId).then(
        (response) => {
          console.log("RESPONSE: ", response);
          setProfile({
            name: response[0].name,
            age: response[0].age,
            career: response[0].career,
            education: response[0].education,
            currentLocation: response[0].currentLocation,
            hobbies: response[0].hobbies,
            destination: response[0].destination,
            photoURL: response[0].photoURL
          })
        })
    }
  }, [matchId]);


return(
  
  <div>
    <Nav></Nav>
    <ProfileCard 
      src={profile.photoURL }
      name={profile.name}
      education={profile.education}
      hobbies={profile.hobbies}
      currentLocation={profile.currentLocation}
      career={profile.career}
      age={profile.age}
      destination={profile.destination}
      />
      </div>

)
}
