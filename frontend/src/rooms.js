import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Delete from './delete.js';
import axios from 'axios';

function Rooms() {

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    function lookRooms() {
        setLoading(true);
        axios.get('http://127.0.0.1:8000/api/all/')
            .then(res => {
                const data = res.data;
                setRooms(data);
                setLoading(false);
                console.log(rooms);
            })
            .catch(err => {})
    }

    useEffect(() => {
        lookRooms();
    }, [])

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
            {loading ? (
                <p>loading..</p>
                ) : (
                rooms.map((room, index) => (
                <>
                <tr key={index}>
                    <td>
                        <Link to={`/single/${room.id}`}>
                            {room.name}
                        </Link>
                    </td>
                    <td>{room.description}</td>
                    <td>{room.length}</td>
                    <td>{room.width}</td>
                    <Delete id={room.id} dataUpdated={lookRooms} />
                </tr>
                </>
            )))}
        </table>
        </>
    )
}

export default Rooms;