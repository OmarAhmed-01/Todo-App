import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context.jsx';
import axios from 'axios';

const Dashboard = () => {

  const [user, setUser] = useState({});
  const { navigate, serverLink } = useContext(Context);

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem('token');
      if(!token){
        alert('Please login');
        navigate('/login');
        return;
      }
      try {
        const response = await axios.get(serverLink+'api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('response: ', response);
        setUser(response.data.user);
      } catch (error) {
        alert('Failed to fetch user data. Please log in again.');
        console.log(error);
        navigate('/login');
      }
    }

    fetchUser();
  }, []);


  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>{user.username}</p>
      <p></p>
      <p></p>
    </div>
  )
}

export default Dashboard