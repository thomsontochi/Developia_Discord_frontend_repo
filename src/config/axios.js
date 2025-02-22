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
// api.interceptors.response.use(
//     response => response,
//     error => {
//         console.error('API Error:', error.response?.data);
//         return Promise.reject(error);
//     }
// );


api.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem('token');
        const token = localStorage.getItem('vendor_token');
        // console.log('Current token:', token); // Debug
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log('Request headers:', config.headers);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            // localStorage.removeItem('token');
            localStorage.removeItem('vendor_token');
        }
        return Promise.reject(error);
    }
);

export default api;