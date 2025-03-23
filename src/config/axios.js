import axios from 'axios';
import { config } from './env';
import { logError } from '../utils/logger';
import AuthService from '../services/auth.service';

// const api = axios.create({
//     baseURL: config.API_URL,
//     timeout: config.API_TIMEOUT,
//     withCredentials: true,
//     headers: {
//         'Accept': 'application/json',
//         'X-Requested-With': 'XMLHttpRequest'
//     }
// });

const api = axios.create({
    baseURL: config.API_URL,
    timeout: config.API_TIMEOUT,
    withCredentials: true, 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest' 
    }
  });

// Request interceptor
api.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        logError(error, 'API Request Error');
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh
// api.interceptors.response.use(
//     response => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;

//             try {
//                 // Try to get fresh user data
//                 const userData = await AuthService.getUser();

//                 if (userData) {
//                     // If successful, retry the original request
//                     return api(originalRequest);
//                 } else {
//                     // If auth check fails, reject with original error
//                     throw error;
//                 }
//             } catch (refreshError) {
//                 logError(refreshError, 'Authentication Check Failed');
//                 return Promise.reject(refreshError);
//             }
//         }

//         return Promise.reject(error);
//     }
// );

// Response interceptor to handle authentication issues
api.interceptors.response.use(
    response => response,
    async (error) => {
      const originalRequest = error.config;
      
      // Handle 401 errors (unauthenticated)
      if (error.response?.status === 401 && !originalRequest._retry) {
        // console.log("Received 401 error, attempting to refresh authentication");
        originalRequest._retry = true;
        
        try {
          // Get the current token
          const currentToken = localStorage.getItem('token');
          
          if (!currentToken) {
            // console.log("No token available, cannot retry request");
            throw error;
          }
          
          // Try to get fresh user data
          const userData = await AuthService.getUser();
          
          if (userData && userData.user) {
            // console.log("Successfully refreshed authentication");
            // Update auth state with fresh data
            if (userData.token && userData.token !== currentToken) {
              localStorage.setItem('token', userData.token);
              api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
            }
            
            // Retry the original request
            return api(originalRequest);
          } else {
            // console.log("Authentication refresh failed");
            // If auth check fails, clear auth state
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            throw error;
          }
        } catch (refreshError) {
          console.error("Authentication refresh error:", refreshError);
          // Clear auth state
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          return Promise.reject(refreshError);
        }
      }
      
      return Promise.reject(error);
    }
  );

export default api;
