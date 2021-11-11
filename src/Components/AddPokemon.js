import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pokemon/new', {
            name,
            type,
        })
            .then(res=>console.log('response',res))
            .catch(err=>console.log('Error',err))
    }
    return (
        <>
        <h1>Add New Favorite Pokémon</h1>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Type</label><br/>
                <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/>
            </p>
            <Link to ={'/'}>
            <input type="submit" value='Create'/>
            </Link>
        </form>
        </>
    )
}
