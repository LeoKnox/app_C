import Rooms from './rooms.js';
import Create from './create.js';
import NavBar from './nav.js';

function Home() {
    return (
        <>
        <NavBar />
        <h1>Create Rooms Here</h1>
        <Rooms />
        <Create />
        </>
    )
}

export default Home;