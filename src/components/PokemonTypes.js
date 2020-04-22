import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import PokemonType from "./PokemonType";

const PokemonTypes = ({ types }) => {
    return (
        <Box display="flex" justifyContent="center">
            {types.map((type, index) => {
                return (
                    <PokemonType
                        key={type}
                        type={type}
                        first={index === 0}
                    ></PokemonType>
                );
            })}
        </Box>
    );
};

export default PokemonTypes;
