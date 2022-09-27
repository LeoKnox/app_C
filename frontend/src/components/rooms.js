import { useState } from 'react';
import GetData from './getData.js';

function Rooms() {
    const [rooms, setRooms] = useState([]);
    console.log(GetData.getRooms());
    GetData.getRooms().then(
        res => {
            const data = res.data;
            setRooms(data);
            console.log(rooms);
        }, [])
        .catch(err => {})
    return (
        <>
            <h1>some rooms coming</h1>
        </>
    )
}

export default Rooms;