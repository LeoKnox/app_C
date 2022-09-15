import { useState, useEffect } from 'react';
import axios from 'axios';

function Rooms() {

    const [state, setState] = "";

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all/')
            .then(res => {
                const data = res.data;
                console.log(data);
            })
            .catch(err => {})
    }, [])

    return (
        <p>List Rooms</p>
    )
}

export default Rooms;