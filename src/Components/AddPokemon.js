import React, { useState } from 'react';
import { useHistory} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { initialName, initialType, initialButton, errors, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [button, setButton] = useState(initialButton);
    const history = useHistory();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name,type});
    }

    const cancel = (e) => {
        e.preventDefault();
        history.push('/')
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <p style={{ color: 'red' }}>{errors.name?.message}</p>
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p style={{ color: 'red' }}>{errors.type?.message}</p>
                <p>
                    <label>Type</label><br/>
                    <input type="text" name="type" onChange={(e) => setType(e.target.value)} value={type} />
                </p>
                    <input type="submit" value={button} />
            </form>
            <br></br>
            <button onClick={cancel}>Cancel</button>
        </>
    )
}
