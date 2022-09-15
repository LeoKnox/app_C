import { useState, useEffect } from 'react';
import axios from 'axios';

function Rooms() {

    const [rooms, setRooms] = "";

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all/')
            .then(res => {
                const data = res.data;
                setRooms(data);
                console.log(rooms + "222");
            })
            .catch(err => {})
    }, [])

    return (
        <>
        <p>List Rooms</p>
        {rooms.map((room) => (
            <p>{room}</p>
        ))}
        </>
    )
}

export default Rooms;