import { useState, useEffect } from 'react';
import axios from 'axios';

function Create() {
    function create_room(e) {
        e.preventDefault();
        console.log("SBUMITTED");
    }

    return (
        <>
        <p>Create Room</p>
        <input onSubmit={create_room} type="submit" value="Submit" />
        </>
    )
}

export default Create;