import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/login.jsx';
import Register from './pages/Register/register.jsx'
import Dashboard from './pages/Dashboard/dashboard.jsx';
import PrivateRoute from './components/Private-Routing/PrivateRoute.jsx';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login"/>} />
      </Routes>
    </>
  )
}

export default App