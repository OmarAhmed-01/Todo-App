import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Context } from '../../context/context';
import './register.css';

const Register = () => {

  const { serverLink, navigate } = useContext(Context); 

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(event) {
    setFullname(event.target.value);
  };
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  };
  function handleEmailChange(event) {
    setEmail(event.target.value);
  };
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  };


  async function submitRegister(event) {
    try {
      event.preventDefault();
      const data = {
        fullname, username, email, password
      };

      const response = await axios.post(serverLink+"api/register", data);
      if(response.status == "200"){
        setFullname("");
        setUsername("");
        setEmail("");
        setPassword("");
        navigate('/login');
      }
    } catch (error) {
      console.log("Error sending data to server");
    }
  }


  return (
    <div className='register-wrapper'>
      <div className="register-window">
        <div className="register-info">
          <form action="" onSubmit={submitRegister}>
            <div className="form-headers">
              <h1>Register</h1>
              <h2>Create your account to start your journey!</h2>
            </div>
            <div className="form-inputs">
              <input type="text" value={fullname} onChange={handleNameChange} placeholder='fullname'/>
              <input type="text" value={username} onChange={handleUsernameChange} placeholder='username'/>
              <input type="email" value={email} onChange={handleEmailChange} placeholder='email'/>
              <input type="password" value={password} onChange={handlePasswordChange} placeholder='password'/>
            </div>
            <div className="form-submit">
              <a href='/login'>Already have an account?</a>
              <button type='submit'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register