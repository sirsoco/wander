import React, { useContext, useState, useEffect } from "react";
import UserContext from '../utils/authContext'
import API from '../utils/api'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import Nav from "../components/Nav/Nav"



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
     <MDBCard className="my-5 px-5 pb-5 text-center">
      <MDBCardBody>
          <h1 className="h1-responsive font-weight-bold my-5">
            {profile.name}
          </h1>
          <img
                tag="img"
                src={profile.photoURL}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
          <p className="grey-text w-responsive mx-auto mb-5 justify-center">
            <h3>Welcome to my profile! Let's go an adventure ☺︎ </h3>
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <p className="text-  blue-text"><h2>Education: {profile.education}</h2></p>
              <p className="text-  blue-text"><h2>Career: {profile.career}</h2></p>
              <p className="text-blue-text"><h2>Location: {profile.currentLocation}</h2></p>
              <p className=" blue-text"><h2>Destination: {profile.destination}</h2></p>
              <p className="text-blue-text"><h2>Hobbies: {profile.hobbies}</h2></p>
            </MDBCol>
            </MDBRow>
      </MDBCardBody>
  </MDBCard> </div>

)

}
export default Profile

