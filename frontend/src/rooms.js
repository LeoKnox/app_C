import { useState, useEffect } from 'react';
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
    }, [])

    return (
        <>
        <p>List Rooms</p>
        <table>
            <th>
                <td>Name</td>
                <td>Description</td>
                <td>Length</td>
                <td>Width</td>
            </th>
            {rooms.map((room) => (
                <tr>
                    <td>{room.name}</td>
                    <td>{room.description}</td>
                    <td>{room.length}</td>
                    <td>{room.width}</td>
                </tr>
            )) }
        </table>
        </>
    )
}

export default Rooms;