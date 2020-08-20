import React from 'react'
import firebase from '../../config';
import { Button } from 'react-bootstrap'
import axios from "axios";
import API from '../../utils/api'
import { Redirect } from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

var provider = new firebase.auth.GoogleAuthProvider();

export default function login() {

    const login = () => {
        firebase.auth().signInWithPopup(provider)
          .then(({user}) => {
            axios.post("/api/user", {uid: user.uid}).then(result => result.data)
            console.log("UID: ", user.uid)
          }) /*.then() */
            // I want to store the uid of the user signing up into variable. 
                //then I want to call the /api/user/:uid with the above uid 
            // if the uid exists send the user to their profile page. 
                // path = "userPage"
          .catch(console.error)
        };

    return (
        <div>
            <Button onClick={login} variant="primary" size="lg" block>
                Sign up with Google
            </Button>
        </div>
    )
}
