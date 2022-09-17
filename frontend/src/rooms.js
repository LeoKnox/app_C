import { useState, useEffect } from 'react';
import Delete from './delete.js';
import axios from 'axios';

function Rooms() {

    const [rooms, setRooms] = useState("");

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/all/')
            .then(res => {
                const data = res.data;
                setRooms(data);
                console.log(rooms);
            })
            .catch(err => {})
    }, [rooms.length])

    return (
        <>
        <p>List Rooms</p>
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Length</th>
                <th>Width</th>
            </tr>
            {rooms.map((room, index) => (
                <tr key={index}>
                    <td>{room.name}</td>
                    <td>{room.description}</td>
                    <td>{room.length}</td>
                    <td>{room.width}</td>
                    <Delete id={room.id} />
                </tr>
            ))}
        </table>
        </>
    )
}

export default Rooms;