import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ErrorContext } from "../contexts/ErrorContext";

import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Typography,
    InputBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        marginLeft: "2rem",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "300px",
        },
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        color: "inherit",
        padding: theme.spacing(0.5, 0.5, 0.5, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    list: {
        width: "225px",
    },
}));

const links = [
    {
        name: "Home",
        link: "/",
    },
    { name: "Type Charts", link: "/types" },
];

const NavBar = () => {
    const styles = useStyles();
    const { resetError } = useContext(ErrorContext);
    let history = useHistory();
    const [search, setSearch] = useState("");
    const [drawer, setDrawer] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        goToLink(`/pokemon/${search.toLowerCase()}`);
    };

    const goToLink = (link) => {
        history.push(link);
        resetError();
        setSearch("");
    };

    const toggleDrawer = (open) => (e) => {
        setDrawer(open);
    };

    const list = (
        <div className={styles.list}>
            <List>
                {links.map((link) => (
                    <ListItem
                        style={{ cursor: "pointer" }}
                        key={link.name}
                        onClick={() => goToLink(link.link)}
                    >
                        <ListItemIcon>
                            <HomeIcon></HomeIcon>
                        </ListItemIcon>
                        <ListItemText primary={link.name}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box mb={1}>
            <AppBar position="static">
                <Toolbar style={{ position: "relative" }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={drawer}
                        onClose={toggleDrawer(false)}
                    >
                        {list}
                    </Drawer>
                    <Typography
                        variant="h6"
                        onClick={() => {
                            resetError();
                            history.push("/");
                        }}
                        style={{
                            cursor: "pointer",
                        }}
                    >
                        Pokedex
                    </Typography>

                    <Box className={styles.search}>
                        <Box className={styles.searchIcon}>
                            <SearchIcon></SearchIcon>
                        </Box>
                        <form onSubmit={handleSubmit}>
                            <InputBase
                                placeholder="Search..."
                                className={styles.input}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyPress={handleKeyPress}
                            ></InputBase>
                        </form>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
