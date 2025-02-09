import api from "../config/axios";

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

  // async login(credentials, userType) {
  //     try {
  //         await api.get('/sanctum/csrf-cookie');

  //         const endpoint = userType === 'vendor'
  //             ? '/api/v1/vendor/login'
  //             : '/api/v1/login';

  //         const response = await api.post(endpoint, credentials);
  //         return response.data;
  //     } catch (error) {
  //         throw this.handleError(error);
  //     }
  // }

  async login(credentials, userType) {
    try {
      // First ensure we have the CSRF cookie
      await api.get("/sanctum/csrf-cookie");

      // Add a small delay to ensure cookie is set
      await new Promise((resolve) => setTimeout(resolve, 100));

      const endpoint =
        userType === "vendor" ? "/api/v1/vendor/login" : "/api/v1/login";

      const response = await api.post(endpoint, credentials);

      // Store the token if returned
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // Set the token in axios defaults
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      }

      return response.data;
    } catch (error) {
      console.error("Login error details:", error.response?.data);
      throw this.handleError(error);
    }
  }

  async register(userData, userType) {
    try {
      await api.get("/sanctum/csrf-cookie");

      const endpoint =
        userType === "vendor" ? "/api/v1/vendor/register" : "/api/v1/register";

      const response = await api.post(endpoint, userData);
      return response.data;
    } catch (error) {
      console.error("Registration error details:", error.response?.data);
      throw this.handleError(error);
    }
  }

  // Vendor authentication
  async vendorLogin(email, password) {
    try {
      await api.get("/sanctum/csrf-cookie");
      const response = await api.post("/api/v1/vendor/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error handling
  // handleError(error) {
  //     if (error.response) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         return {
  //             message: error.response.data.message,
  //             status: error.response.status
  //         };
  //     } else if (error.request) {
  //         // The request was made but no response was received
  //         return {
  //             message: 'No response from server',
  //             status: 500
  //         };
  //     } else {
  //         // Something happened in setting up the request that triggered an Error
  //         return {
  //             message: error.message,
  //             status: 500
  //         };
  //     }
  // }

//   handleError(error) {
//     if (error.response) {
//       // Laravel validation errors
//       if (error.response.data.errors) {
//         return {
//           message: "Validation failed",
//           errors: error.response.data.errors,
//         };
//       }
//       // Regular error message
//       return {
//         message: error.response.data.message || "An error occurred",
//         status: error.response.status,
//       };
//     } else if (error.request) {
//       return {
//         message: "No response from server. Please check your connection.",
//         status: 500,
//       };
//     } else {
//       return {
//         message: error.message || "An unexpected error occurred",
//         status: 500,
//       };
//     }
//   }


handleError(error) {
    if (error.response) {
      // Handle Laravel validation errors
      if (error.response.status === 422) {
        const errors = error.response.data.errors;
        // Convert Laravel's validation errors to a more readable format
        const formattedErrors = Object.keys(errors).reduce((acc, key) => {
          acc[key] = errors[key][0]; // Take the first error message for each field
          return acc;
        }, {});
        return {
          message: error.response.data.message,
          errors: formattedErrors
        };
      }
      return {
        message: error.response.data.message || 'An error occurred',
        status: error.response.status
      };
    } else if (error.request) {
      return {
        message: 'No response from server. Please check your connection.',
        status: 500
      };
    } else {
      return {
        message: error.message || 'An unexpected error occurred',
        status: 500
      };
    }
  }


}

export default new AuthService();
