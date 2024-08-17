import { createContext } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {

    const serverLink = "http://localhost:3000/";

    const contextValue = {
        serverLink
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;