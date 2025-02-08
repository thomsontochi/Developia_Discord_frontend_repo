import axios from 'axios';
//axios.js acts as your API client:

const api = axios.create({
    baseURL: 'http://discordecommercebackend.test',
    withCredentials: true, // Important for cookies/session handling
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// Add response interceptor for better error handling
api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response?.data);
        return Promise.reject(error);
    }
);

export default api;