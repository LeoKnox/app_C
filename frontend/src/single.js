import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Single() {
    const [room, setRoom] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");

    const makeChange = (e) => {
        name = e.target.value;
        setName(name);
    }

    const roomChange=(e)=>{
        setName(e.target.value);
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
        room.name = name;
        axios({
            method: 'put',
            url: `http://127.0.0.1:8000/api/update/${params.roomid}`,
            data: room
        });
        e.preventDefault();
    }

    return (
        <>
            <h3>A single room</h3>
            <form onSubmit={update_room}>
                <label>Name: </label>
                <input type="text"
                    value={name}
                    onChange={(e) => {roomChange(e)}} /><br />
                <label>Description: </label>
                <input type="text" placeholder={room.description}
                    onChange={(e) => {makeChange(e)}} /><br />
                <label>Width: </label>
                <input type="number" placeholder={room.width}
                    onChange={(e) => {makeChange(e)}} />
                <label> Length: </label>
                <input type="number" placeholder={room.length}
                    onChange={(e) => {makeChange(e)}} /><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Single;