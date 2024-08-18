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
    }

    const contextValue = {
        serverLink,
        navigate,
        loggedInUser,
        fetchUser,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;