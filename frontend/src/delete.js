import axios from 'axios';

function Delete(id) {
    function delete_room(e) {
        axios({
            method:'delete',
            url: 'http://127.0.0.1:8000/api/room/'+id.id+'/delete/'
        });
    }
    return(
        <>
        <button onClick={delete_room}>Delete</button>
        </>
    )
}

export default Delete;