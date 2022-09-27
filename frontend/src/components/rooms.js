import { useState, useEffect } from 'react';
import GetData from './getData.js';

function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [refresh, setRefresh] = useState(true);

    function clicked(e) {
        e.preventdefault();
        setRefresh(!refresh);
    }

    useEffect(() => {
        GetData.getRooms()
            .then(
                res => {
                    const data = res.data;
                    setRooms(data);
                    console.log(rooms);
                })
            .catch(err => {})
    }, [refresh])

    return (
        <>
            <h1>some rooms coming</h1>
            <button onClick={clicked()}>Click</button>
        </>
    )
}

export default Rooms;