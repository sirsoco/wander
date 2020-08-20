import React, { Component } from "react";
import Form from '../components/userForm/index.js'
import API from "../utils/api";
import redirect from 'react-router-dom'
import Map from '../components/Map/index.js'


class Register extends Component {
  state = {
    // books: [],
    // q: "",
    // message: "Search For A Book To Begin!"
    name: "",
    age: "",
    career: "",
    education: "",
    currentLocation: "",
    hobbies: "",
    destination: ""
  };


  //component didmmount 
    // call getUser function here 

    // capture user info in state
  // organize user profile info into an obj
  // state obj to be "set up exactly the way we want req.body to be understood"

  // handleInputChange = event => {
  //   const { name, age, career, education, currentLocation, hobbies,destination, value } = event.target;
  //   this.setState({
  //     [name, age, career, education, currentLocation, hobbies, destination]: value,
  //   });
  // };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  // getUser function, make get axios call here 
   getUserProfile = () => {
     API.getUser()
    .then(res => 
      this.setState({
        name: res.data,
        age: res.data,
        career: res.data,
        education: res.data,
        location: res.data,
        type: res.data,
        destination: res.data
      }))
      .catch(err => console.log(err))
  };
  // write PUT route in this function

  handleFormSubmit = event => {
    event.preventDefault();
    // PUT axios call here
    API.updateProfile(this.state)
    .then(res => {
      this.setState({
      name: res.data,
      age: res.data,
      career: res.data,
      education: res.data,
      location: res.data,
      type: res.data,
      destination: res.data
    })
     }).then(() => this.getUserProfile())
    .catch(err => console.log(err));
  };


  render() {
    return (
       <div>
          <div>
            <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
           /> 
        </div> 
        
      </div>
    );
  }
}

export default Register;

