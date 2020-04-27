import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import rotom from "../assets/rotom.png";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    form: {
        position: "relative",
        padding: "1.25rem 2rem",
        width: "100%",
        maxWidth: "530px",
        margin: "0 auto",
        textAlign: "center",
    },
    header: {
        fontSize: "1.1rem",
        fontWeight: "400",
        color: "#454545",
        marginBottom: ".75rem",
    },
    button: {
        marginTop: "1rem",
        display: "inline-block",
        fontSize: "1rem",
    },
    rotom: {
        position: "absolute",
        bottom: "-100px",
        right: "-100px",
        display: "none",
        [theme.breakpoints.up("750")]: {
            display: "block",
        },
    },
}));

const SearchForm = () => {
    const classes = useStyles();
    let history = useHistory();

    let [searchValue, setSearchValue] = useState("");
    return (
        <Box p={1} className={classes.root}>
            <Paper className={classes.form} elevation={2}>
                <Typography variant="h6" className={classes.header}>
                    Welcome! Enter a Pokemon to get started.
                </Typography>
                <TextField
                    id="Pokemon"
                    label="Pokemon"
                    variant="outlined"
                    className={classes.input}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                ></TextField>
                <Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                        className={classes.button}
                        onClick={() => history.push(`/pokemon/${searchValue}`)}
                    >
                        Search
                    </Button>
                </Box>
                <img
                    src={rotom}
                    alt="Rotom Pokedex"
                    className={classes.rotom}
                />
            </Paper>
        </Box>
    );
};

export default SearchForm;
