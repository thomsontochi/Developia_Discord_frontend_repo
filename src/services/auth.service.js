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

  // async vendorRegisterStep1(data) {
  //   try {
  //     await api.get("/sanctum/csrf-cookie");
  //     const response = await api.post("api/v1/vendor/register", {
  //       full_name: data.full_name,
  //       email: data.email,
  //       password: data.password,
  //       password_confirmation: data.password_confirmation
  //     });
  //     return response.data;
  //   } catch (error) {
  //     throw this.handleError(error);
  //   }
  // }

  async vendorRegisterStep1(data) {
    try {
      await api.get("/sanctum/csrf-cookie");
      
      // console.log('Sending registration data:', {
      //   full_name: data.full_name,
      //   email: data.email,
      //   password: data.password,
      //   password_confirmation: data.password_confirmation
      // });
  
      const response = await api.post("/api/v1/vendor/register", {
        full_name: data.full_name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      });
      
      return response.data;
    } catch (error) {
      console.error('Registration error response:', error.response?.data);
      throw this.handleError(error);
    }
  }

  async vendorRegisterStep2(data) {
    try {
      const formData = new FormData();
      formData.append('store_name', data.store_name);
      formData.append('store_description', data.store_description);
      formData.append('business_category', data.business_category);
      formData.append('address', data.address);
      if (data.store_logo) {
        formData.append('store_logo', data.store_logo);
      }
  
      const response = await api.post("/api/vendor/setup-store", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async vendorRegisterStep3(data) {
    try {
      const response = await api.post("/api/vendor/setup-payment", {
        payment_details: {
          bank_name: data.bank_name,
          account_number: data.account_number,
          account_name: data.account_holder
        }
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // async checkEmailVerification(email) {
  //   try {
  //     const response = await api.get("/api/v1/vendor/email/check-verification", { email });
  //     return response.data.verified;
  //   } catch (error) {
  //     throw this.handleError(error);
  //   }
  // }

  // async checkEmailVerification(email) {
  //   try {
  //     const token = localStorage.getItem('vendor_token'); 
      
  //     const response = await api.get("api/v1/check-verification", {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     return response.data.verified;
  //   } catch (error) {
  //     console.error('Verification check failed:', error.response?.data);
  //     throw this.handleError(error);
  //   }
  // }

 
  async checkEmailVerification(email) {
    try {
      const response = await api.get(`/api/v1/check-verification/${email}`);
      console.log('Verification response:', response.data); // Debug log
      return response.data.verified;
    } catch (error) {
      console.error('Verification check failed:', error.response?.data);
      throw this.handleError(error);
    }
  }

  

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
          errors: formattedErrors,
        };
      }
      return {
        message: error.response.data.message || "An error occurred",
        status: error.response.status,
      };
    } else if (error.request) {
      return {
        message: "No response from server. Please check your connection.",
        status: 500,
      };
    } else {
      return {
        message: error.message || "An unexpected error occurred",
        status: 500,
      };
    }
  }
}

export default new AuthService();
