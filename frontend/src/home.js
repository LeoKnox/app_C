//import Rooms from './components/rooms.js';
import { useState } from 'react';
import Rooms from './rooms.js';
import Create from './create.js';

function Home() {
    const [newRoom, setNewRoom] = useState(true);

    return (
        <>
        <h1>Create Rooms Here</h1>
        <Rooms />
        <Create newRoom={newRoom} />
        </>
    )
}

export default Home;