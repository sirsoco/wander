import React, { Component } from "react";
import Form from '../components/userForm/Form'
import api from "../utils/api";


class Register extends Component {
  state = {
    // books: [],
    // q: "",
    // message: "Search For A Book To Begin!"
    name: "",
    age: "",
    career: "",
    education: "",
    location: "",
    type: "",
    destination: ""
  };

  //component didmmount 
    // call getUser function here 
  
    // capture user info in state
  // organize user profile info into an obj
  // state obj to be "set up exactly the way we want req.body to be understood"

  handleInputChange = event => {
    const { name, age, career, education, location, type,destination, value } = event.target;
    this.setState({
      [name, age, career, education, location, type, destination]: value,
    });
  };


  // getUser function, make get axios call here 

  // write PUT route in this function
  handleFormSubmit = event => {
    event.preventDefault();
    // PUT axios call here
  };


  render() {
    return (
        <div>
            <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            /> 
        </div>
    );
  }
}

export default Register;

{/* <Form
handleInputChange={this.handleInputChange}
handleFormSubmit={this.handleFormSubmit}
q={this.state.q}
/>  */}
