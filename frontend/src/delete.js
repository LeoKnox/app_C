import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Delete(id) {
    let history = useHistory();

    function delete_room(e) {
        axios({
            method:'delete',
            url: 'http://127.0.0.1:8000/api/room/'+id.id+'/delete/'
        });
        history.push("/home");
    }
    return(
        <>
        <button onClick={delete_room}>Delete</button>
        </>
    )
}

export default Delete;