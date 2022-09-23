import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Delete(id) {
    const navigate = useNavigate();

    function delete_room(e) {
        axios({
            method:'delete',
            url: 'http://127.0.0.1:8000/api/room/'+id.id+'/delete/'
        });
        navigate('/');
    }
    return(
        <>
        <button onClick={delete_room}>Delete</button>
        </>
    )
}

export default Delete;