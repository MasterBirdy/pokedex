import React from "react";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { colors } from "../utils/colors";

const PokemonType = ({ type, notLast }) => {
    const useStyles = makeStyles({
        root: {
            backgroundColor: colors[type],
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            marginRight: notLast ? ".2rem" : "0",
            marginBottom: ".2rem",
        },
    });
    const styles = useStyles();
    return (
        <Chip
            size="small"
            label={type.toUpperCase()}
            className={styles.root}
        ></Chip>
    );
};

export default PokemonType;
