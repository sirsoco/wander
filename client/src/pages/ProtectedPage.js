import React, { useEffect} from 'react';
import useAuth from '../utils/useAuth';

export default function ProtectedPage() {

    let auth = useAuth();

    useEffect( () => {
        console.log('protectedUser:', auth.user)
    })
    return <h3>Protected Page</h3>;
}