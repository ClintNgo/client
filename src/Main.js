import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pokemon from './Components/Pokemon.js'
import AddPokemon from './Components/AddPokemon.js';
import { useParams, Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const message = ('Favorite Pokémon');
    const [loaded, setLoaded] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pokemon`)
            .then(res => {
                setPokemon(res.data);
                setLoaded(true);
            });
            }, []);

        return (
            <div>
                <h2>{message}</h2>
                <Link to={`/api/pokemon/newpokemon`}>
                    Add Favorite Pokémon
                </Link>
                <h3>Favorite Pokemon</h3>
                {loaded && <Pokemon pokemon={pokemon}></Pokemon>}
            </div>
        )
    }

