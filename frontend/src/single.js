import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Single() {
    const [room, setRoom] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");

    const nameChange = (e) => {
        room.name = e.target.value;
        //setName(e.target.value);
    }

    let params = useParams();
    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/room/${params.roomid}/`)
        .then(res => {
            const data = res.data;
            setName(data.name);
            setRoom(data);
        })
        .catch(err => {})
    }, [])
    console.log(room);

    function update_room(e) {
        let updateRoom = {name, description, length, width}
        e.preventDefault();
    }

    return (
        <>
            <h3>A single room</h3>
            <form onSubmit={update_room}>
                <label>Name: </label>
                <input type="text" placeholder={room.name}
                    onchange={(e) => {nameChange(e)}} /><br />
            </form>
            <p>Name: {room.name}</p>
            <p>Description: {room.description}</p>
            <p>Width: {room.width} x Length: {room.length}</p>
        </>
    )
}

export default Single;