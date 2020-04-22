import React from "react";
import { Box, Typography, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PokemonStatBar from "./PokemonStatBar";

const useStyles = makeStyles({
    label: {
        fontSize: ".875rem",
    },
});

const labelConverter = (label) => {
    switch (label) {
        case "speed":
            return "Speed";
        case "special-defense":
            return "Special Defense";
        case "special-attack":
            return "Special Attack";
        case "defense":
            return "Defense";
        case "attack":
            return "Attack";
        case "hp":
            return "HP";
        default:
            return "";
    }
};

const PokemonStat = ({ label, value, type }) => {
    const styles = useStyles();
    return (
        <Tooltip title={labelConverter(label) + ": " + value}>
            <Box>
                <Typography className={styles.label}>
                    {labelConverter(label)}
                </Typography>
                <PokemonStatBar value={value} type={type}></PokemonStatBar>
            </Box>
        </Tooltip>
    );
};

export default PokemonStat;
