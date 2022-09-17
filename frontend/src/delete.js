import axios from 'axios';

function Delete(id) {
    function delete_room(e) {
        console.log('***'+id.room.id);
        axios({
            method:'delete',
            url: 'http://127.0.0.1:8000/api/room/'+String(id.id)+'/delete/'
        });
    }
    return(
        <>
        <form onSubmit={delete_room}>
            <input type="submit" value="Delete" />
        </form>
        <button onClick={delete_room}>Delete</button>
        </>
    )
}

export default Delete;