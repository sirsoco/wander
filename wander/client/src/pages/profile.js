import React, { useContext, useState, useEffect } from "react";
// import API from "../utils/api";
// import axios from "axios";
import UserContext from '../utils/userContext'
import API from '../utils/api'
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
} from 'react-bootstrap-card';
import {
  Col,
  Row,
} from 'react-bootstrap';
// import "/src/components/userForm/style.css";
// import UserContext from "../utils/userContext";

// ***** Profile PAGE ******
// =============================================================

function Profile(props) {
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
          console.log("name: ",response[0].name)
        })
    }
  }, [matchId]);

  return (
    <Card>
      <CardBlock>
        <CardTitle>
        {profile.name}
            </CardTitle>
            <p> 
            {profile.age}
            </p>
            <p>
            {profile.career}
            </p>
            <p>
            {profile.education}
            </p>
            <p>
            {profile.currentLocation}
            </p>
            <p>
            {profile.hobbies}
            </p>
            <p>
            {profile.destination}
            </p>
            <img src={profile.photoURL} />   
        </CardBlock>
        <CardFooter className="text-xs-center">
            Some Footer
        </CardFooter>
    </Card>
  );
};

export default Profile

