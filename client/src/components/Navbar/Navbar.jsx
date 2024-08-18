import React, { useContext, useEffect } from 'react';
import './navbar.css';
import { Context } from '../../context/context.jsx';

const Navbar = () => {

    const { navigate, loggedInUser, fetchUser, removeToken } = useContext(Context);

    function handleLogoClick() {
        navigate('/');
    };

    useEffect(() => {
        fetchUser();
    }, []);

  return (
    <div className='navbar-wrapper'>
        <div className="navbar-logo">
            <h1 onClick={handleLogoClick}>Harmonize.</h1>
        </div>
        <div className="navbar-details">
            <h1>@{loggedInUser.username}</h1>
            <button onClick={removeToken}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar