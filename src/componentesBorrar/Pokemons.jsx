import { useEffect, useState } from "react";
import { getPokemonslist } from "../service/pokemons";
import { Link } from 'react-router-dom';

const Pokemons = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemonslist()
        .then((data) => data.json())
        .then((data) => setPokemons(data.results))
    }, []);

    return (<div>
        <h1>Lista de POkemons</h1>
        <ul>
            {pokemons.map((pokemon) =>(
                <li key={pokemon.name}>
                    <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                </li>
            ))}
        </ul>
        </div>);
}
export default Pokemons;