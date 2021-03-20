import React, { useState } from 'react';
import firebase from '../config.js';
import useAuth from '../utils/useAuth';

export default function useProvideAuth() {
        // user state
    const [user, setUser] = useState(null);

        // global user context
    const auth = useAuth();
    
    const signin = () => {
        
        //firebase authentication
        return firebase.auth().onAuthStateChanged(user => {
            console.log('user:', user);
            setUser(user);
            
        });
        };

    return {
        user,
        setUser,
        signin
    };
    };
