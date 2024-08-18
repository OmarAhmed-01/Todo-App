import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context.jsx';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar.jsx';
import AddTasks from '../../components/addTasks/AddTasks.jsx';

const Dashboard = () => {

  const { loggedInUser, fetchUser } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <>
      <Navbar/>
      <AddTasks/>
    </>
  )
}

export default Dashboard