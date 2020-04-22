import React from "react";
import { Box } from "@material-ui/core";
import PokemonStat from "./PokemonStat";

const PokemonStats = ({ values, type }) => {
    return (
        <Box display="flex" flexDirection="column">
            {values.map((value) => {
                return (
                    <PokemonStat
                        key={value.stat.name}
                        value={value.base_stat}
                        label={value.stat.name}
                        type={type}
                    ></PokemonStat>
                );
            })}
        </Box>
    );
};

export default React.memo(PokemonStats);
