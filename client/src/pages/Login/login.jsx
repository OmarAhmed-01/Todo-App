import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import { Context } from '../../context/context.jsx';
import { mail, visibility, visibility_off } from '../../assets/assets.js';

const Login = () => {

  const { submitLogin, showLoginPassword, setShowLoginPassword } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  function handleEmailChange(event) {
    setEmail(event.target.value);
  };
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  };
  function handleLoginPasswordState() {
    setShowLoginPassword(!showLoginPassword);
  }

  async function handleSubmit(event) {
    await submitLogin(event, email, password, setUser);
  };

  return (
    <div className='login-wrapper'>
      <div className="login-window">
        <div className="login-info">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-headers">
              <h1>Harmonize.</h1>
              <h2>Log in to continue your journey!</h2>
            </div>
            <div className="form-inputs">
              <div className="email-input">
                <input type="email" value={email} onChange={handleEmailChange} placeholder='email'/>
                <img src={mail} alt="" />
              </div>
              <div className="password-input">
                <input type={ !showLoginPassword ? "password" : "text"} value={password} onChange={handlePasswordChange} placeholder='password'/>
                <img onClick={handleLoginPasswordState} src={ !showLoginPassword ? visibility_off : visibility } alt="" />
              </div>
            </div>
            <div className="form-submit">
              <a href='/register'>Create a new account</a>
              <button type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login