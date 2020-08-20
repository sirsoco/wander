import React, { Component } from "react";
import Form from '../components/userForm/index.js'
import API from "../utils/api";

class Register extends Component {
  state = {
    name: "",
    age: "",
    career: "",
    education: "",
    currentLocation: "",
    hobbies: "",
    destination: ""
  };

  // componentDidMount function // Loads specific user
  componentDidMount() {
   

    this.getUserProfile();
  }
  
  // function to capture input changes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // getUser function, make get axios call here 
   getUserProfile = () => {
     
     API.getUserProfile()
    .then(res => 
      this.setState({
        name: res.name,
        age: res.age,
        career: res.career,
        education: res.education,
        location: res.location,
        type: res.type,
        destination: res.destination
      }))
      .catch(err => console.log(err))
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // PUT axios call here
    API.updateProfile(this.state)
    .then(res => {
      alert("Profile successfuly updated!");
     }).catch(err => console.log(err));
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

