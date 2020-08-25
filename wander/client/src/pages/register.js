import React, {useContext, useState} from "react";
import UserContext from '../utils/userContext'
import API from '../utils/api'
import Nav from '../components/Nav'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,MDBCard, MDBCardBody } from 'mdbreact';
// ***** Register PAGE ******
// =============================================================

function Register(props) { 

 const [name, setName] = useState();
 const [age, setAge] = useState();
 const [career, setCareer] = useState();
 const [education, setEducation] = useState();
 const [currentLocation, setCurrentLocation] = useState()
 const [hobbies, setHobbies] = useState();
 const [destination, setDestination] = useState();
 
 
const userState = useContext(UserContext);

const handleFormSubmit = e => {
  e.preventDefault();
  console.log("USER STATE: ",userState)



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
    
return ( 
  <>
  <Nav></Nav>
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
        onChange = { e => setName(e.target.value)}
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
        onChange = { e => setAge(e.target.value)}
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
        onChange = { e => setCareer(e.target.value)}
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
        onChange = { e => setEducation(e.target.value)}
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
        onChange = { e => setHobbies(e.target.value)}
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
        onChange = { e => setCurrentLocation(e.target.value)}
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
        onChange = { e => setDestination(e.target.value)}
        required
      />
    </div>
    <div className="text-center py-4 mt-3">
      <MDBBtn onClick={handleFormSubmit} color="cyan" type="submit">
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


  
  
)
}
export default Register

