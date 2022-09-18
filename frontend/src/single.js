import { useParams } from "react-router-dom";

function Single() {
    let params = useParams();
    console.log(params.roomid);
    return (
        <h3>A single room {params.roomid}</h3>
    )
}

export default Single;