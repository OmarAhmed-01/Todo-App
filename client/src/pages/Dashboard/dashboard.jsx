import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context.jsx';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar.jsx';
import AddTasks from '../../components/addTasks/AddTasks.jsx';
import FetchTasks from '../../components/fetchAllTasks/FetchTasks.jsx';

const Dashboard = () => {

  const { fetchUser } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <>
      <Navbar/>
      <AddTasks/>
      <FetchTasks/>
    </>
  )
}

export default Dashboard