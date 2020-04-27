import React, { useContext } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { ErrorContext } from "../contexts/ErrorContext";

const ErrorComponent = () => {
    const { hasError, errorMessage } = useContext(ErrorContext);
    const anError = (
        <Alert severity="error" style={{ marginTop: "1rem" }}>
            <AlertTitle>Error!</AlertTitle>
            {errorMessage}
        </Alert>
    );
    return <div>{hasError && anError}</div>;
};

export default ErrorComponent;
