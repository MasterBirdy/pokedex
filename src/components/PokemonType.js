import React from "react";
import { Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const colors = {
    bug: "#A8B820",
    dark: "#705848",
    dragon: "#7038F8",
    electric: "#F8D030",
    fairy: "#EE99AC",
    fighting: "#C03028",
    fire: "#F08030",
    flying: "#A890F0",
    ghost: "#705898",
    grass: "#78C850",
    ground: "#E0C068",
    ice: "#98D8D8",
    normal: "#A8A878",
    poison: "#A040A0",
    psychic: "#F85888",
    rock: "#B8A038",
    steel: "#B8B8D0",
    water: "#6890F0",
};

const PokemonType = ({ type, first }) => {
    const useStyles = makeStyles({
        root: {
            backgroundColor: colors[type],
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            marginRight: first ? ".2rem" : "0",
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
