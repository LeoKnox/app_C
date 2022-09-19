import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Single() {
    let params = useParams();
    let room = axios.get(`http://127.0.0.1:8000/api/room/${params.roomid}/`);
    console.log(room);
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