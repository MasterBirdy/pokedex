import React from "react";
import { Box, Container } from "@material-ui/core";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        height: "100vh",
        background:
            "radial-gradient(#efe5ff 2px, transparent 3px), radial-gradient(#ffece5 2px, transparent 3px), #fff",
        backgroundPosition: "0 0, 20px 20px",
        backgroundSize: "40px 40px",
    },
    container: {
        height: "90%",
        paddingBottom: "1rem",
    },
});

const App = () => {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <Box display="flex" flexDirection="column" className={classes.root}>
                <NavBar></NavBar>
                <Box flexGrow={1}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/pokemon/:id" component={Pokemon}></Route>
                    </Container>
                </Box>
            </Box>
        </BrowserRouter>
    );
};

export default App;
