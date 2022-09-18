import { useParams } from "react-router-dom";

function Single() {
    let params = useParams();
    console.log(params.roomid);
    return (
        <>
            <h3>A single room</h3>
            <p>Name:</p>
            <p>Description:</p>
            <p>Width: x Length:</p>
        </>
    )
}

export default Single;