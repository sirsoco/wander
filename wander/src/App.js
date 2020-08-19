import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import firebase from './config.js'
import Header from './components/Header/Header'
import Form from './components/userForm/Form'


var provider = new firebase.auth.GoogleAuthProvider();

function App() {
  return (
    <div className="App">
    <div>
      <Header />
    </div>
    <div>
      <Form />
    </div>
  <Button onClick={firebase.auth().signInWithRedirect(provider).then((result) => {console.log(result)})} variant="primary" size="lg" block>
    Block level button
  </Button>

    </div>
  );

}

export default App;
