import React from "react";
import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const {id, successCallBack} = props

    const deletePokemon = () => {
        axios.delete(`http://localhost:8000/api/pokemon/delete/${id}`)
        .then(res=>{console.log(res.data)})
        successCallBack();
    }

    return (
        <div>
            <button onClick={deletePokemon} >Delete</button>
            </div>
        
    )
}