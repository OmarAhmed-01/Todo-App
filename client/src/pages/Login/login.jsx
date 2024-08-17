import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import { Context } from '../../context/context.jsx';
import axios from 'axios';

const Login = () => {

  const { serverLink, navigate } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  function handleEmailChange(event) {
    setEmail(event.target.value);
  };
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  };

  async function submitLogin(event) {
    try {
      event.preventDefault();
      const data = {
        email, password
      };

      const response = await axios.post(serverLink+'api/login', data);
      if(response.status == "200"){
        setUser(response.data);
      }
      if(response.data.token){
        localStorage.setItem('token', response.data.token);
        alert('Login Successful!');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login-wrapper'>
      <div className="login-window">
        <div className="login-info">
          <form action="" onSubmit={submitLogin}>
            <div className="form-headers">
              <h1>login</h1>
              <h2>Log in to continue your journey!</h2>
            </div>
            <div className="form-inputs">
              <input type="email" value={email} onChange={handleEmailChange} placeholder='email'/>
              <input type="password" value={password} onChange={handlePasswordChange} placeholder='password'/>
            </div>
            <div className="form-submit">
              <a href='/register'>Create a new account</a>
              <button type='submit'>login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login