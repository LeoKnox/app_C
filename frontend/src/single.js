import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import NavBar from './nav.js';

function Single() {
    const [room, setRoom] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");

    const roomChange=(e)=>{
        setName(e.target.value);
    }

    const descriptionChange=(e)=>{
        setDescription(e.target.value);
    }

    const widthChange=(e)=>{
        setWidth(e.target.value);
    }

    const lengthChange=(e)=>{
        setLength(e.target.value);
    }

    let params = useParams();
    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/room/${params.roomid}/`)
        .then(res => {
            const data = res.data;
            setName(data.name);
            setDescription(data.description);
            setWidth(data.width);
            setLength(data.length);
            setRoom(data);
        })
        .catch(err => {})
    }, [])
    console.log(room);

    function update_room(e) {
        room.name = name;
        room.description = description;
        room.length = length;
        room.width = width;
        axios({
            method: 'put',
            url: `http://127.0.0.1:8000/api/update/${params.roomid}`,
            data: room
        });
        e.preventDefault();
    }

    return (
        <>
            <NavBar />
            <h3>A single room</h3>
            <form onSubmit={update_room}>
                <label>Name: </label>
                <input type="text"
                    value={name}
                    onChange={(e) => {roomChange(e)}} /><br />
                <label>Description: </label>
                <input type="text"
                    value={description}
                    onChange={(e) => {descriptionChange(e)}} /><br />
                <label>Width: </label>
                <input type="number" 
                    value={width}
                    onChange={(e) => {widthChange(e)}} />
                <label> Length: </label>
                <input type="number"
                    value={length}
                    onChange={(e) => {lengthChange(e)}} /><br />
                <input type="submit" value="Submit" />
            </form>
            <svg width="400" height="400">
                <rect width={width*20} height={length*20} style={{fill:'rgb(0,0,255)',stroke-width:'3',stroke:'rgb(255,255,255)'}} />
            </svg>
        </>
    )
}

export default Single;