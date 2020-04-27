import React, { useEffect, useState, useContext } from "react";
import { Box } from "@material-ui/core";
import PokemonInfo from "../components/PokemonInfo";
import axios from "axios";
import "../css/Pokemon.css";
import { useParams } from "react-router-dom";
import { ErrorContext } from "../contexts/ErrorContext";

const Pokemon = (props) => {
    let [loading, setLoading] = useState(true);
    let [pokemonData, setPokemonData] = useState({});
    let [pokemonSpeciesData, setPokemonSpeciesData] = useState({});

    const { hasError, makeError } = useContext(ErrorContext);
    const { id } = useParams();
    console.log("hiii");
    useEffect(() => {
        Promise.all([
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
        ])
            .then((res) => {
                console.log(res);
                setPokemonData(res[0].data);
                setPokemonSpeciesData(res[1].data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.message);
                makeError(err.message);
            });
    }, [id]);

    let pokemon = <div className="loader"></div>;
    if (!loading) {
        pokemon = (
            <PokemonInfo
                data={pokemonData}
                speciesData={pokemonSpeciesData}
            ></PokemonInfo>
        );
    }
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            {!hasError && pokemon}
        </Box>
    );
};

export default React.memo(Pokemon);
