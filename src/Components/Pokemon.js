import React, {useState} from 'react'
import axios from 'axios'

export default ()=>{
    const [ name, setName ] = useState('');
    const [ type, setType ] = useState('');
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pokemon/new')

    }
}