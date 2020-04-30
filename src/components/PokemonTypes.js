import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import PokemonType from "./PokemonType";

const PokemonTypes = ({ types }) => {
    return (
        <Box display="inline-block">
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {types.map((type, index) => {
                    return (
                        <PokemonType
                            key={type}
                            type={type}
                            notLast={types.length - 1 > index}
                        ></PokemonType>
                    );
                })}
            </Box>
        </Box>
    );
};

export default PokemonTypes;
