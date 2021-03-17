import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Provider/UserProvider';
import Auth from '../components/Auth/Auth'

export default function LoginPage() {
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
    
    return(
        <div>
            <p>You must log in to view the page at
                {from.pathname}
            </p>
            <a>
                <Auth/>
            </a>
            <button onClick={login}>Log in</button>
        </div>
    );
}