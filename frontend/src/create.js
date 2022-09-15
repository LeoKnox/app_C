import { useState, useEffect } from 'react';
import axios from 'axios';

function Create() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');

    const nameChange = (e) => {
        setName(e.target.value);
    }
    const descriptionChange=(e)=>{
        setDescription(e.target.value);
    }
    const lengthChange=(e)=>{
        setLength(e.target.value);
    }
    const widthChange=(e)=>{
        setWidth(e.target.value);
    }

    function create_room(e) {
        let newRoom = {name, description, length, width};
        let res = axios.post(`http://127.0.0.1:8000/api/create/`);
        e.preventDefault();
        console.log(newRoom);
    }

    return (
        <>
        <p>Create Room</p>
        <form onSubmit={create_room}>
            <input type="text" value={name} onChange={(e) =>
                {nameChange(e)}} /><br />
            <input type="text" value={description} onChange={(e) =>
                {descriptionChange(e)}} /><br />
            <input type="number" value={width} onChange={(e) =>
                {widthChange(e)}} /><br />
            <input type="number" value={length} onChange={(e) =>
                {lengthChange(e)}} /><br />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default Create;