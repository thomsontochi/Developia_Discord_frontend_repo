import axios from 'axios';
//axios.js acts as your API client:

const api = axios.create({
    baseURL: 'http://discordecommercebackend.test',
    withCredentials: true, // Important for cookies/session handling
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

export default api;