import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import firebase from './config';
import axios from "axios";
// import ReactDOM from "react-dom";
import Nav from './components/Nav'
import Form from './components/userForm'

var provider = new firebase.auth.GoogleAuthProvider();

function App() {
  const login = () => {
    firebase.auth().signInWithPopup(provider)
      .then(({user}) => {
        axios.post("/api/user", {uid: user.uid}).then(result => result.data)
        console.log("UID: ", user.uid)
      })
      .catch(console.error)
    };

  return (
    <div className="App">
    <div>
      <Nav />
    </div>
    <div>
      <Form />
    </div>
    <Button onClick={login} variant="primary" size="lg" block>
        Block level button
      </Button>
    </div>
    
  );

}

export default App;