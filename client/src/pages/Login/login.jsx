import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import { Context } from '../../context/context.jsx';

const Login = () => {

  const { submitLogin } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  function handleEmailChange(event) {
    setEmail(event.target.value);
  };
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    await submitLogin(event, email, password, setUser);
  };

  return (
    <div className='login-wrapper'>
      <div className="login-window">
        <div className="login-info">
          <form action="" onSubmit={handleSubmit}>
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