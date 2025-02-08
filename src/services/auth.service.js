import api from '../config/axios';

class AuthService {
    // Regular user authentication

    // async login(email, password) {
    //     try {
    //         // First, get CSRF cookie
    //         await api.get('/sanctum/csrf-cookie');
            
    //         // Then, attempt login
    //         const response = await api.post('/api/v1/login', {
    //             email,
    //             password
    //         });
            
    //         return response.data;
    //     } catch (error) {
    //         throw this.handleError(error);
    //     }
    // }

    async login(credentials, userType) {
        try {
            await api.get('/sanctum/csrf-cookie');
            
            const endpoint = userType === 'vendor' 
                ? '/api/v1/vendor/login'
                : '/api/v1/login';
                
            const response = await api.post(endpoint, credentials);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }


    async register(userData, userType) {
        try {
            await api.get('/sanctum/csrf-cookie');
            
            const endpoint = userType === 'vendor'
                ? '/api/v1/vendor/register'
                : '/api/v1/register';
                
            const response = await api.post(endpoint, userData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Vendor authentication
    async vendorLogin(email, password) {
        try {
            await api.get('/sanctum/csrf-cookie');
            const response = await api.post('/api/v1/vendor/login', {
                email,
                password
            });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // Error handling
    handleError(error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return {
                message: error.response.data.message,
                status: error.response.status
            };
        } else if (error.request) {
            // The request was made but no response was received
            return {
                message: 'No response from server',
                status: 500
            };
        } else {
            // Something happened in setting up the request that triggered an Error
            return {
                message: error.message,
                status: 500
            };
        }
    }
}

export default new AuthService();