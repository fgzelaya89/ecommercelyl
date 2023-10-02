import { useEffect, useState } from "react";
import { getPokemonByName } from "../service/pokemons";

export const usePokemonByName=(pokemonName)=>{

    const [pokemon, setPokemon] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getPokemonByName(pokemonName).then((data) => data.json())
            .then((data) => setPokemon(data)).finally(()=>setloading(false));
    }, [pokemonName]);

    return{pokemon,loading};
}