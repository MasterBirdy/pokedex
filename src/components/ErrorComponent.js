import React, { useContext } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { ErrorContext } from "../contexts/ErrorContext";
import { makeStyles } from "@material-ui/core/styles";
import sadpikachu from "../assets/sadpikachu.png";

const useStyles = makeStyles((theme) => ({
    pikachu: {
        position: "absolute",
        bottom: "-.25rem",
        right: ".5rem",
        width: "90px",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
}));

const ErrorComponent = () => {
    const styles = useStyles();
    const { hasError, errorMessage } = useContext(ErrorContext);
    const anError = (
        <Alert
            severity="error"
            style={{ marginTop: "1rem", position: "relative" }}
        >
            <AlertTitle>Error!</AlertTitle>
            {errorMessage}
            <img
                src={sadpikachu}
                alt="Sad Pikachu"
                className={styles.pikachu}
            />
        </Alert>
    );
    return <div>{hasError && anError}</div>;
};

export default ErrorComponent;
