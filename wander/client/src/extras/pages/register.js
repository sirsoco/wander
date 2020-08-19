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

  handleInputChange = event => {
    const { name, age, career, education, location, type,destination, value } = event.target;
    this.setState({
      [name, age, career, education, location, type, destination]: value,
    });
  };



  handleFormSubmit = event => {
    event.preventDefault();
    this.postUser();
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

<Form
handleInputChange={this.handleInputChange}
handleFormSubmit={this.handleFormSubmit}
q={this.state.q}
/> 
