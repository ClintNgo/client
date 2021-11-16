import React, {useEffect, useState} from "react"
import axios from "axios"
import AddPokemon from "./AddPokemon"
import {useHistory, useParams} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [errors, setErrors] = useState({});

    const history = useHistory();
    
    const createPokemon = (pokemon) => {
        axios.post(`http://localhost:8000/api/pokemon/new`, pokemon)
        .then(res => {
            if (res.data.errors){
            setErrors(res.data.errors)}
        })
        .catch(err=>{console.log(err)})
        // history.push("/")
    }

    return(
        <div>
            <h1>Add New Favorite Pokémon</h1>
            <AddPokemon onSubmitProp={createPokemon} errors={errors} initialName={''} initialType={''} initialButton={'Create'}></AddPokemon>
        </div>
        
    )
}