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
  function handlePasswordState() {
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
                <input type={ showLoginPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} placeholder='password'/>
                <img onClick={handlePasswordState} src={ showLoginPassword ? visibility : visibility_off} alt="" />
              </div>
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