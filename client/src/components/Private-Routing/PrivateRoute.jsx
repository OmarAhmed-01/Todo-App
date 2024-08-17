import React, { useContext, useState } from 'react'
import { Context } from '../../context/context.jsx'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const token = localStorage.getItem('token');

    if(token){
        return children;
    }
    else{
        return Navigate('/login');
    }

}

export default PrivateRoute