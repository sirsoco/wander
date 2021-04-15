import React, { useContext } from 'react';
import authContext from './authContext'

export default function useAuth() {
    return useContext(authContext)
}