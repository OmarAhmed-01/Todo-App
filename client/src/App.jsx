import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login.jsx';
import Register from './pages/Register/register.jsx'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App