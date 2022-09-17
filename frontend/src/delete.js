import axios from 'axios';

function Delete(id) {
    function delete_room(e) {
        axios({
            method:'delete',
            url: 'http://127.0.0.1:8000/api/room/'+{id}+'/delete/'
        });
    }
    return(
        <>
        <form onSubmit={delete_room}>
            <input type="submit" value="Delete" />
        </form>
        </>
    )
}

export default Delete;