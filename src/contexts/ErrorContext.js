import React, { createContext, useState } from "react";

export const ErrorContext = createContext();

const ErrorContextProvider = (props) => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const resetError = () => {
        setHasError(false);
        setErrorMessage(null);
    };

    const errorHandler = (message) => {
        setHasError(true);
        setErrorMessage(message);
    };

    return (
        <ErrorContext.Provider
            value={{
                hasError,
                errorMessage,
                resetError,
                makeError: errorHandler,
            }}
        >
            {props.children}
        </ErrorContext.Provider>
    );
};

export default ErrorContextProvider;
