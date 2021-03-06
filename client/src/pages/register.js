import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import firebase from "../config.js";
import axios from "axios";
import authContext from "../utils/authContext";
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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
    alignItems: 'center'
  
  },

  pos: {
    marginBottom: 12,
  },
});

function Register(props) {
  const classes = useStyles();

  //global state
  const auth = useContext(authContext);

  // local states
  const [name, setName] = useState();
  const [id, setID] = useState();
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

  // async func to transform coord.
  const MapCoordinates = async (city) => {
    API.getCoordinates(city).then((latlng) => {
      config.lat = latlng.lat;
      config.lng = latlng.lng;
      API.updateProfile(config).then(
        //then mapping to map page
        props.history.push("/map")
      );
    });
  };

  // async function to complete profile
  const submitProfile = async (city) => {
    // wait for coordinates to get set
    MapCoordinates(city);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    var city = config.destination;

    submitProfile(city);
  };

  useEffect(() => {
    // checking to see if user is already authenticated
    const token = localStorage.getItem("token");

    if (token) {
      // set authentication to true
      auth.setID(true);
      props.history.push("/map");
    } else {
      
    }

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // AXIOS CALL
        axios
          .post("/api/user", { uid: user.uid, photoURL: user.photoURL })
          .then(() => {
            console.log(user);
            // set user id in global context
            // set user image in global context
            auth.setID(user.uid);
            

            // save refresh-token to local storage
            // save user image to local storage
            localStorage.setItem("token", user.refreshToken);
            localStorage.setItem("photo", user.photoURL);
          })
          .catch((err) => console.log("ERROR: ", err));
      } else {
        // No user is signed in.
        props.history.push("/");
      }
    });
  }, []);

  const display = { display: 'none',}; 

  return (
    <>
      <Nav 
        display={display}/>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h2 text-center py-4">signup</p>
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
        </CardContent>
      </Card>
    </>
  );
}
export default Register;
