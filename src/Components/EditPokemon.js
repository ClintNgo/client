import React, {useEffect, useState} from "react"
import axios from "axios"
import AddPokemon from "./AddPokemon"
import {useHistory, useParams} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pokemon/${id}`)
        .then(res=>{
            setPokemon(res.data)
            setLoaded(true);})
    }, [])
    
    const updatePokemon = (pokemon) => {
        axios.put(`http://localhost:8000/api/pokemon/${id}`, pokemon)
        .then(res => {
            if (res.data.errors){
            setErrors(res.data.errors)}
        })
        .catch(err=>{console.log(err)})
        setLoaded(true);
        // history.push("/")
    }

    return(
        <div>
            <h1>Update Favorite Pokémon</h1>
            {loaded && (<AddPokemon onSubmitProp={updatePokemon} errors={errors} initialName={pokemon.name} initialType={pokemon.type} initialButton={'Update'}></AddPokemon>)}
        </div>
        
    )
}