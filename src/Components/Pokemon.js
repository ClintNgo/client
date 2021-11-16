import React, {useState, useParams, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeletePokemon from "./DeletePokemon.js"


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [ pokemon, setPokemon ] = useState([]);
    const [ updated, setUpdated ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pokemon')
            .then(res => setPokemon(res.data))
            .catch(err=>console.log('Error',err))
    }, [updated])

    const removeFromDom = (PokemonId) => {
        setPokemon(pokemon.filter(pokemon=>pokemon._id !== PokemonId));
        setUpdated(!updated);
    }


    return (
        <>
            <table>
                <tr>
                    <th>Pokémon</th>
                    <th>Actions Available</th>
                </tr>
                {pokemon.map((pokemon, id) => {
                    return (
                            <tr key={id}>
                                <td>Name: {pokemon.name} Type: {pokemon.type}</td>
                                <td><Link to={`/api/pokemon/edit/${pokemon._id}`}>Edit</Link>
                                <DeletePokemon id={pokemon._id} successCallBack={removeFromDom}></DeletePokemon></td>
                            </tr>
                    )
                }
                )}
            </table>
        </>
    )
}

