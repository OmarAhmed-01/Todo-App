import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const Context = createContext(null);

const ContextProvider = (props) => {

    const [loggedInUser, setLoggedInUser] = useState({});

    const serverLink = "http://localhost:3000/";
    const navigate = useNavigate();

    async function fetchUser() {
        const token = localStorage.getItem('token');
        if(!token){
            alert('Please login');
            navigate('/login');
            return;
        }
        try {
            const response = await axios.get(serverLink+'api/user', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            setLoggedInUser(response.data.user);
        } catch (error) {
            alert('Failed to fetch user data. Please log in again.');
            console.log(error);
            navigate('/login');
        }
    };

    async function submitTask(event, taskTitle, taskDesc) {
        try {
            event.preventDefault();
            const token = localStorage.getItem('token');
            const data = {
                title: taskTitle,
                desc: taskDesc
            };

            const response = await axios.post(serverLink+"api/addTask", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if(response.status === 200 || response.status === 201){
                console.log('Task added successfully');
            }
        } catch (error) {
            console.log(error);
        }
    };

    async function submitLogin(event, email, password, setUser) {
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

    function removeToken() {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const contextValue = {
        serverLink,
        navigate,
        loggedInUser,
        fetchUser,
        removeToken,
        submitTask,
        submitLogin,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;