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
        <form onSubmit={create_room}>
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default Create;