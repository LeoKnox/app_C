import axios from 'axios';

class GetData {
    getRooms() {
        return axios.get('http://127.0.0.1:8000/api/all/');
    }
}

export default GetData();