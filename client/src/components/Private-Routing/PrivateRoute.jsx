import React, { useContext, useState } from 'react'
import { Context } from '../../context/context.jsx'

const PrivateRoute = ({ children }) => {

    const token = localStorage.getItem('token');
    const { navigate } = useContext(Context);

    if(token){
        return children;
    }
    else{
        navigate('/login');
    }

}

export default PrivateRoute