import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Context } from '../../context/context';

const Register = () => {

  const { serverLink } = useContext(Context); 

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
            <h1>Register</h1>
            <input type="text" value={fullname} onChange={handleNameChange} placeholder='fullname'/>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder='username'/>
            <input type="email" value={email} onChange={handleEmailChange} placeholder='email'/>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='password'/>
            <p>Already have an account?</p>
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register