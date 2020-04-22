import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const typesColor = {
    bug: "#6D7815",
    dark: "#49392F",
    dragon: "#4924A1",
    electric: "#A1871F",
    fairy: "#9B6470",
    fighting: "#7D1F1A",
    fire: "#9C531F",
    flying: "#6D5E9C",
    ghost: "#493963",
    grass: "#4E8234",
    ground: "#927D44",
    ice: "#638D8D",
    normal: "#6D6D4E",
    poison: "#682A68",
    psychic: "#A13959",
    rock: "#786824",
    steel: "#787887",
    water: "#445E9C",
};

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
            backgroundColor: typesColor[type],
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
