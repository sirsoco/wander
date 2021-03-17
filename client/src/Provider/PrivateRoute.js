import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import useAuth from '../utils/useAuth';


export default function PrivateRoute({ children, ...rest }) {
    
    // usercontext to check state of user
    let auth = useAuth();

    return(
        <Route
            {...rest}
            render={({ location }) => 
                auth.user? (
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