import {useNavigate} from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    function goHome() {navigate('/')};

    return (
        <button onClick={goHome}>Home</button>
    )
}

export default NavBar;