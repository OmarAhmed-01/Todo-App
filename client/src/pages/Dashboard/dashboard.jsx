import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context.jsx';
import axios from 'axios';

const Dashboard = () => {

  const { loggedInUser, fetchUser } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div>
      
    </div>
  )
}

export default Dashboard