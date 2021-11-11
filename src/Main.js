import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pokemon from './Components/Pokemon.js'
import { useParams, Link } from 'react-router-dom'

const Main = (props) => {
    const { id } = useParams();
    const { removeFromDom } = props;
    const [message, setMessage] = useState('Favorite Pokémon');
    const [pokemon, setPokemon] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log('Error', err))
    }, [id]);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/pokemon/${id}`)
            .then(res => {
                removeFromDom(id)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h2>{message}</h2>
            <Link to={`/api/pokemon/newpokemon`}>
                Add Favorite Pokémon
            </Link>
            <h3>Favorite Pokemon</h3>
            <table>
                <tr>
                    <th>Pokémon</th>
                    <th>Actions Available</th>
                </tr>
                {pokemon.map((pokemon, index) => {
                    return (
                        <tr key ={index}>
                            <td>Name: {pokemon.name} Type:{pokemon.type}</td>
                            <td><Link to={`/api/pokemon/edit/${id}`}>Edit</Link>
                                <Link to={'/'}><button onClick={(e) => { deleteProduct(pokemon._id) }}>Delete</button>
                                </Link></td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

export default Main;