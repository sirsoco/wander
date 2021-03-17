import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import useAuth from '../../utils/useAuth';

export default function AuthButton() {
    //let history = useHistory();
    let auth = useAuth();
    
    return auth.user ? (
        <p>
            Welcome!
        </p>
    ) : (
        <p> You are not logged in. </p>
    )
    
}

