import React, { useState, useMemo } from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PokemonAvatar from "./PokemonAvatar";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";
import PokemonVersionControl from "./PokemonVersionControl";
import { convertDeciToInches, convertHectoToPounds } from "../utils/functions";

const useStyles = makeStyles({
    root: {
        padding: "20px",
    },
    category: {
        fontWeight: "500",
        fontSize: ".85rem",
        textAlign: "center",
    },
    info: {
        fontWeight: "400",
    },
    description: {
        lineHeight: "1.5em",
        maxWidth: "400px",
        fontWeight: "500",
        fontSize: ".85rem",
    },
});

const PokemonInfo = ({ data, speciesData }) => {
    const classes = useStyles();

    const orderedStats = data.stats.sort((a, b) => {
        if (a.stat.name === "hp") {
            return -1;
        } else if (b.stat.name === "hp") {
            return 1;
        } else {
            if (a.stat.name > b.stat.name) {
                return 1;
            } else {
                if (a.stat.name < b.stat.name) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    });

    const englishFlavorTexts = useMemo(
        () =>
            speciesData.flavor_text_entries.filter((entry) => {
                return entry.language.name === "en";
            }),
        [speciesData.flavor_text_entries]
    );
    console.log(englishFlavorTexts);

    let [pokemonVersion, setPokemonVersion] = useState(
        englishFlavorTexts[0].version.name
    );
    let [pokemonDescription, setPokemonDescription] = useState(
        englishFlavorTexts[0].flavor_text
    );

    const pokemonVersionHandler = (e) => {
        setPokemonDescription(
            englishFlavorTexts.find((element) => {
                return element.version.name === e.target.value;
            }).flavor_text
        );
        setPokemonVersion(e.target.value);
    };

    return (
        <Paper className={classes.root}>
            <Box display="inline-block" style={{ marginRight: "1.5rem" }}>
                <Box
                    display="grid"
                    gridTemplateColumns="150px 1fr"
                    gridColumnGap="1.25rem"
                    gridRowGap=".25rem"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="h6">
                            {data.name.charAt(0).toUpperCase() +
                                data.name.slice(1)}
                        </Typography>
                        <PokemonAvatar
                            image={data.sprites.front_default}
                        ></PokemonAvatar>
                        <Box marginTop={0.66}>
                            <PokemonTypes
                                types={data.types.map((type) => {
                                    return type.type.name;
                                })}
                            ></PokemonTypes>
                        </Box>
                    </Box>
                    <PokemonStats
                        values={orderedStats}
                        type={data.types[0].type.name}
                    ></PokemonStats>

                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <Typography className={classes.category}>
                            ID: <span className={classes.info}>{data.id}</span>
                        </Typography>
                        <Typography className={classes.category}>
                            Height:{" "}
                            <span className={classes.info}>
                                {convertDeciToInches(data.height)} in.
                            </span>
                        </Typography>
                        <Typography className={classes.category}>
                            Weight:{" "}
                            <span className={classes.info}>
                                {convertHectoToPounds(data.weight)} lb.
                            </span>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.description}>
                            Description:{" "}
                            <span className={classes.info}>
                                {pokemonDescription}
                            </span>
                        </Typography>
                    </Box>
                    {/* <FormControl>
                        <InputLabel>Version</InputLabel>
                        <Select>
                            <MenuItem value={10}>test</MenuItem>
                        </Select>
                    </FormControl> */}
                    <PokemonVersionControl
                        descriptions={englishFlavorTexts}
                        version={pokemonVersion}
                        handler={pokemonVersionHandler}
                    ></PokemonVersionControl>
                </Box>
            </Box>
        </Paper>
    );
};

export default PokemonInfo;
