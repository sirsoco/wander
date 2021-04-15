import React, { useContext } from 'react';
import authContext from '../utils/authContext';
import {Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const auth = useContext(authContext) 
    console.log(auth.id);
    // usercontext to check state of user
   

    return(
        <Route
            {...rest}
            render={({ location }) => 
                auth.id? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname:'/login',
                            state: { from: location }
                        }}
                        />
                )
            }
        />
    );
}