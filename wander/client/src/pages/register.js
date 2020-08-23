import React, {useContext, useState} from "react";
// import API from "../utils/api";
// import axios from "axios";
import UserContext from '../utils/userContext'
import API from '../utils/api'
import './styles/register.css'
// import "/src/components/userForm/style.css";
// import UserContext from "../utils/userContext";

// ***** Register PAGE ******
// =============================================================
// const [username, setUsername] = useState();
// const [password, setPassword] = useState();

function Register(props) { 



const [uid, setUid] = useState();
 const [name, setName] = useState();
 const [age, setAge] = useState();
 const [career, setCareer] = useState();
 const [education, setEducation] = useState();
 const [currentLocation, setCurrentLocation] = useState()
 const [hobbies, setHobbies] = useState();
 const [destination, setDestination] = useState();
 
 
   //setName, setAge, setCareer, setEducation, setCurrentLocation,setHobbies,setDestination]= useState({
//   id: "",
//   name: "",
//   age: "",
//   career: "",
//   education: "",
//   currentLocation: "",
//   hobbies: "",
//   destination: "",
// })
  
//console.log(user)


// UID:lTSccHESTFNHdTSxR4itDHMwpt03

  // CONNECT TO THE GLOBAL USER OBJECT
  const userState = useContext(UserContext);


  // userState.setName('andrew');
  // userState.setAge(45);
  // userState.setCareer('webDev');
  // userState.setEducation('andrew');
  // userState.setCurrentLocation('andrew');
  // userState.setHobbies('andrew');
  // console.log(userState)

  // const handleFormSubmit = e => {
  //   e.preventDeafault();
  //   API.updateProfile(userState)
  // }

const handleFormSubmit = e => {
  e.preventDefault();
  console.log("USER STATE: ",userState)


  // console.log('USER STATE: ', userState);
  
  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   console.log(name)
  //   console.log(userState.id)
  var config =
    { 
      name: name,
      age: age,
        career: career,
         eduction: education,
         currentLocation: currentLocation,
         hobbies: hobbies,
         destination
       }
       var uid= userState.id
  console.log("CONFIG: ",config)
   var uid = userState.id
  API.updateProfile(uid,config);
  props.history.push("/map")
   }
    

console.log("UID: ", userState.id)
  // const handleInputChange = event => {
  //   e.preventDefault();
    // setName(event.target.value);
    // setAge(event.target.value);
    // setCareer(event.target.value);
    // setEducation(event.target.value);
    // setCurrentLocation(event.target.value);
    // setHobbies(event.target.value);
  // };


  return ( 
    <div className="border">
    <form onSubmit={handleFormSubmit} className="form-group">
      <div className="Border">
      <div>
          <label for="name">Uid</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userState.id}
            placeholder="What's your name?"
            required
          />
        </div>
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="What's your name?"
            onChange = { e => setName(e.target.value)}
            
            required
          />
        </div>
        <div>
          <label for="age">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={age}
            placeholder="Age"
            onChange = { e => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="careerInput">Career</label>
          <input
            type="text"
            class="form-control"
            id="careerInput"
            name="career"
            value={career}
            placeholder="Career"
            onChange = { e => setCareer(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="educationInput">Education</label>
          <input
            type="text"
            class="form-control"
            id="educationInput"
            name="education"
            value={education}
            id="locationInput"
            name="currentLocation"
            value={currentLocation}
            placeholder="Current Location"
            onChange = { e => setEducation(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="adventureInput">Hobbies</label>
          <input
            type="text"
            class="form-control"
            id="adventureInput"
            name="hobbies"
            value={hobbies}
            placeholder="Adventure Type"
            onChange = { e => setHobbies(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="adventureInput">Current Location</label>
          <input
            type="text"
            class="form-control"
            id="currentLocation"
            name="currentLocation"
            value={hobbies}
            placeholder="Adventure Type"
            onChange = { e => setCurrentLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="destinationInput">Destination</label>
          <input
            type="text"
            class="form-control"
            id="destinationInput"
            name="destination"
            value={destination}
            placeholder="Destination"
            onChange = { e => setDestination(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
  
}
export default Register

