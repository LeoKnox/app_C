import {useNavigate} from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();

    return (
        <button onClick={(() => {navigate("/")})}>Home</button>
    )
}

export default NavBar;