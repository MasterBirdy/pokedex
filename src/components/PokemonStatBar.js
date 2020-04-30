import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { backgroundColors } from "../utils/colors";

const PokemonStatBar = ({ value, type }) => {
    const useStyles = makeStyles({
        root: {
            width: "230px",
            height: "8px",
            backgroundColor: "#c7c5c4",
            borderRadius: "30px",
            marginBottom: ".125rem",
        },
        "@keyframes grow": {
            from: {
                width: "0",
            },
            to: {
                width: value + "px",
            },
        },
        innerBar: {
            width: value + "px",
            height: "8px",
            backgroundColor: backgroundColors[type],
            borderRadius: "30px",
            animation: `$grow 1.75s cubic-bezier(0.715, 0.115, 0.285, 0.905)`,
            animationFillMode: "forwards",
        },
    });
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <div className={styles.innerBar}></div>
        </div>
    );
};

export default PokemonStatBar;
