import { useState, useEffect } from 'react';
import GetData from './getData.js';

function Rooms() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        GetData.getRooms()
            .then(
                res => {
                    const data = res.data;
                    setRooms(data);
                    console.log(rooms);
                })
            .catch(err => {})
    }, [])

    return (
        <>
            <h1>some rooms coming</h1>
        </>
    )
}

export default Rooms;