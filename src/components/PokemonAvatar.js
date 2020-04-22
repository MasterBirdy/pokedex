import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "150px",
        height: "150px",
        border: "1px dashed grey",
        borderRadius: "5px",
    },
});

const PokemonAvatar = ({ image }) => {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <img src={`${image}`} alt="Pokemon"></img>
        </Box>
    );
};

export default PokemonAvatar;
