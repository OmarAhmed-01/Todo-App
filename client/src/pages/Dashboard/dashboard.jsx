import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import AddTasks from '../../components/addTasks/AddTasks.jsx';
import FetchTasks from '../../components/fetchAllTasks/FetchTasks.jsx';
import Important from '../../components/Important/Important.jsx';
import './dashboard.css';

const Dashboard = () => {

  const { fetchUser } = useContext(Context);

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className='dashboard-wrapper'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="theRest">
        <div className="important-container">
            <Important/>
        </div>
        <div className="dashboard-container">
          <AddTasks/>
          <FetchTasks/>
        </div>    
      </div>
    </div>
  )
}

export default Dashboard