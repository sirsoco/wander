import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap'
import firebase from './config.js'


var provider = new firebase.auth.GoogleAuthProvider();

function App() {
  return (
    <div className="App">
  <Button onClick={firebase.auth().signInWithRedirect(provider)} variant="primary" size="lg" block>
    Block level button
  </Button>

    </div>
  );
}

export default App;
