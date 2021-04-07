import React, { useState, useEffect, useContext } from "react";
import firebase from '../config.js';
import axios from 'axios';
import authContext from '../utils/authContext';
import API from "../utils/api";
import Nav from "../components/Nav/Nav";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

function Register(props) {

  //global state
  const auth = useContext(authContext);
  

  // local states
  const [name, setName] = useState();
  const [id, setID] = useState()
  const [age, setAge] = useState();
  const [career, setCareer] = useState();
  const [education, setEducation] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [hobbies, setHobbies] = useState();
  const [destination, setDestination] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  // defining config for db
  var config = {
    uid: auth.id,
    name: name,
    age: age,
    career: career,
    education: education,
    currentLocation: currentLocation,
    hobbies: hobbies,
    destination: destination,
    lat: lat,
    lng: lng,
  };

  //async func to transform coord.
  const MapCoordinates = async (city) => {
    API.getCoordinates(city).then((latlng) => {
      console.log("latlng:", latlng);
      console.log("config1:", config);

      config.lat = latlng.lat;
      config.lng = latlng.lng;
      //API.updateProfile(config);
      console.log("config2:", config);
      API.updateProfile(config).then(
        //then mapping to map page
        props.history.push("/map")
      );
    });
  };

  //async function to complete profile
  const submitProfile = async (city) => {
    // wait for coordinates to get set
    MapCoordinates(city);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    var city = config.destination;
    console.log("city:", city);
    submitProfile(city);
  };
  
   useEffect( () => {
    firebase.auth().onAuthStateChanged(function(user) {
    console.log('user', user);
      if (user) {
       // AXIOS CALL 
       axios.post("/api/user", {uid: user.uid, photoURL: user.photoURL})
       .then(() => {
         console.log(user);
         // SET THE ID IN THE GLOBAL USER STATE
         auth.setID(user.uid)
         // set user for Private Routes
         // Save refresh-token to local storage
         // userState.setImage(user.photoURL)
         localStorage.setItem("token", user.refreshToken)
         // save photo URL to local storage 
         localStorage.setItem("photo", user.photoURL)

       }).catch(err => console.log("ERROR: ", err))
      } else {
        // No user is signed in.
      }
    });
   }, [])

  return (
    <>
      <Nav />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={name}
                      placeholder="What's your name?"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <MDBInput
                      label="Age"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={age}
                      placeholder="How old are you?"
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                    <MDBInput
                      label="Career"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={career}
                      placeholder="What do you do for a living?"
                      onChange={(e) => setCareer(e.target.value)}
                      required
                    />
                    <MDBInput
                      label="Education"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={education}
                      placeholder="What is your highest level of education?"
                      onChange={(e) => setEducation(e.target.value)}
                      required
                    />
                    <MDBInput
                      label="Hobbies"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={hobbies}
                      placeholder="What do you do for fun?"
                      onChange={(e) => setHobbies(e.target.value)}
                      required
                    />
                    <MDBInput
                      label="currentLocation"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={currentLocation}
                      placeholder="What city are you from?"
                      onChange={(e) => setCurrentLocation(e.target.value)}
                      required
                    />
                    <MDBInput
                      label="Destination"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={destination}
                      placeholder="Where would you like to travel to?"
                      onChange={(e) => setDestination(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      onClick={handleFormSubmit}
                      color="cyan"
                      type="submit"
                    >
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default Register;
