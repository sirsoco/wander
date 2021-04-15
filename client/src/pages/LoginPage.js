import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../utils/useAuth';


export default function LoginPage(props) {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: '/'} };
    let login = () => {
        // log-into firebase
        auth.signin(() => {
            history.replace(from);
        });
    };

    useEffect(() => {
        // checking to see if user is already authenticated
        const token = localStorage.getItem("token");
    
        if (token) {
          // set authentication to true
          auth.setID(true);
          props.history.push("/map");
        } 
        else {
          
        }
    })

    return(
        <div>
            <p>You must log in to view the page at
                {from.pathname}
            </p>
            <a>
            </a>
            <button onClick={login}>Log in</button>
        </div>
    );
}