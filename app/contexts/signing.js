import React, { createContext, useState, useContext } from 'react';

const SignContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
    const [signID, setSignID] = useState(-1);

    return (
        <SignContext.Provider value={{ signID, setSignID }}>
            {children}
        </SignContext.Provider>
    );
};

// Create a custom hook to use the context
export const useSignContext = () => {
    return useContext(SignContext);
};