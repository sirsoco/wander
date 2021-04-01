import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import useAuth from '../../utils/useAuth';
import Nav from '../Nav/Nav';
import Auth from '../../components/Auth/Auth';


export default function AuthButton() {
    //let history = useHistory();
    let auth = useAuth();
    
    console.log('AuthButton', auth.user);
    return auth.user ? (
        <Nav></Nav>
    ) : (
        <Redirect to="/public" />

    )
    
}

