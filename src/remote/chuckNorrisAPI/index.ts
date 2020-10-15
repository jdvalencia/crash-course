import Axios from 'axios';

export const chuckNorrisDBClient = Axios.create({
    baseURL: 'http://api.icndb.com/jokes',
    headers: {
        'Content-Type': 'application/json'
    }
})