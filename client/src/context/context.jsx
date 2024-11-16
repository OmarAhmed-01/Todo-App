import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const Context = createContext(null);

const ContextProvider = (props) => {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [tasks, setTasks] = useState([]);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);

    const serverLink = "http://localhost:3000/";
    const navigate = useNavigate();

    function formateDateTime(dateString) {
        const date = new Date(dateString);
        
        const dateStringFormat = date.toLocaleDateString('en-GB');
        const timeStringFormat = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
        });

        return `${dateStringFormat} ${timeStringFormat}`;
    }

    async function fetchTasks() {
        const token = localStorage.getItem('token');
        if(!token){
            alert('Please login');
            navigate('/login');
            return;
        }
        try {
            const response = await axios.get(serverLink+"api/fetchTask", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTasks(response.data.task.reverse() || []);
        } catch (error) {
            console.log(error);
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
                fetchTasks();
            }
        } catch (error) {
            console.log(error);
        }
    };

    async function deleteTask(id) {
        try {
            const response = await axios.delete(serverLink+'api/deleteTask', {
                data: {id: id}
            });
            if(response.status === 200 || response.status === 201){
                fetchTasks();
            }
        } catch (error) {
            alert("Error delete Task", error.message);
        }
    };

    async function updateTask(taskId, updatedTaskData) {
        try {
            const response = await axios.put(`${serverLink}api/updateTask/${taskId}`, updatedTaskData);
            if(response.status === 200 || response.status === 201){
                fetchTasks();
            }
        } catch (error) {
            alert("Error updating task", error.message);
        }
    };

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
        formateDateTime,
        fetchTasks,
        tasks,
        setTasks,
        deleteTask,
        updateTask,
        showLoginPassword,
        setShowLoginPassword,
        showRegisterPassword,
        setShowRegisterPassword,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;