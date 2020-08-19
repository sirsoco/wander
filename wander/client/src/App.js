import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import firebase from './config';
import axios from "axios";
import ReactDOM from "react-dom";

var provider = new firebase.auth.GoogleAuthProvider();

  // // Saves an book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

function App() {
  const login = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        axios.post("api/user").then(result => {
          console.log("POST:", result);
        }) 
        // TODO: Make an API call to create/login a user
            // use axios to make a call on /auth/login
        // TODO: If the user does not have a profile, then redirect the user to the profile page, else, redirect the user to their dashboard/map
        console.log(result)
      })
      .catch(console.error)
  }

  return (
    <div className="App">
      <Button onClick={login} variant="primary" size="lg" block>
        Block level button
      </Button>

    </div >
  );

}

export default App;