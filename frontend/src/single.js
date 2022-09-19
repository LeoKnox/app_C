import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Single() {
    const [room, setRoom] = useState("");
    let params = useParams();
    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/room/${params.roomid}/`)
        .then(res => {
            const data = res.data;
            setRoom(data);
        })
        .catch(err => {})
    }, [])
    console.log(room);

    return (
        <>
            <h3>A single room</h3>
            <p>Name: {room.name}</p>
            <p>Description: {room.description}</p>
            <p>Width: {room.width} x Length: {room.length}</p>
        </>
    )
}

export default Single;