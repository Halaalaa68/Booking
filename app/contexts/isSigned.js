import React, { createContext, useState, useContext } from 'react';

const IsSignedContext = createContext();

// Create a provider component
export const IsSignedProvider = ({ children }) => {
    const [isSigned, setIsSigned] = useState(false);

    return (
        <IsSignedContext.Provider value={{ isSigned, setIsSigned }}>
            {children}
        </IsSignedContext.Provider>
    );
};

// Create a custom hook to use the context
export const useIsSignedContext = () => {
    return useContext(IsSignedContext);
};