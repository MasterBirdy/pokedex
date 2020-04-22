import React, { useEffect, useState } from "react";
import PokemonInfo from "../components/PokemonInfo";
import axios from "axios";
import { isEmpty } from "../utils/functions";

const Pokemon = (props) => {
    let [loading, setLoading] = useState(true);
    let [pokemonData, setPokemonData] = useState({});
    let [pokemonSpeciesData, setPokemonSpeciesData] = useState({});

    useEffect(() => {
        Promise.all([
            axios.get(
                `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`
            ),
            axios.get(
                `https://pokeapi.co/api/v2/pokemon-species/${props.match.params.id}`
            ),
        ])
            .then((res) => {
                console.log(res);
                setPokemonData(res[0].data);
                setPokemonSpeciesData(res[1].data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [props.match.params.id]);

    let pokemon = (
        <div>
            <span>loading!</span>
        </div>
    );
    if (!loading) {
        pokemon = (
            <PokemonInfo
                data={pokemonData}
                speciesData={pokemonSpeciesData}
            ></PokemonInfo>
        );
    }
    return <div>{pokemon}</div>;
};

export default Pokemon;
