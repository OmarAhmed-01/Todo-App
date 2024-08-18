import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context.jsx';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar.jsx';

const Dashboard = () => {

  const { loggedInUser, fetchUser } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <>
      <Navbar/>
    </>
  )
}

export default Dashboard