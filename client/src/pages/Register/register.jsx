import React, { useContext, useState } from 'react'
import axios from 'axios';
import { Context } from '../../context/context';
import './register.css';
import { visibility, visibility_off } from '../../assets/assets';
import PasswordStrengthBar from 'react-password-strength-bar';

const Register = () => {

  const { serverLink, navigate, showRegisterPassword, setShowRegisterPassword } = useContext(Context); 

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
  function handleRegisterPasswordState() {
    setShowRegisterPassword(!showRegisterPassword);
  }


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
              <h1>Harmonize.</h1>
              <h2>Register to start your journey!</h2>
            </div>
            <div className="form-inputs">       
              <div className="register-fullname">
                <input type="text" value={fullname} onChange={handleNameChange} placeholder='fullname'/>
              </div>
              <div className="register-username">
                <input type="text" value={username} onChange={handleUsernameChange} placeholder='username'/>
              </div>
              <div className="register-email">
                <input type="email" value={email} onChange={handleEmailChange} placeholder='email'/>
              </div>
              <div className="register-password">
                <input type={ !showRegisterPassword ? "password" : "text"} value={password} onChange={handlePasswordChange} placeholder='password'/>
                <img onClick={handleRegisterPasswordState} src={ !showRegisterPassword ? visibility_off : visibility } alt="" />
                <PasswordStrengthBar password={password}/>
              </div>
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