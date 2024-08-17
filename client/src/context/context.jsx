import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

export const Context = createContext(null);

const ContextProvider = (props) => {

    const serverLink = "http://localhost:3000/";
    const navigate = useNavigate();

    const contextValue = {
        serverLink,
        navigate,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;