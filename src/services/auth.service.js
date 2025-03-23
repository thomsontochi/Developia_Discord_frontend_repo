import api from "../config/axios";

class AuthService {
  // Regular user authentication
  async login(credentials, userType) {
    try {
      //console.log(`Attempting ${userType} login`);
      
      // Get CSRF cookie first
      await api.get("/sanctum/csrf-cookie");
      
      const endpoint = userType === "vendor" ? "/api/v1/vendor/login" : "/api/v1/login";
      //console.log(`Using login endpoint: ${endpoint}`);
      
      const response = await api.post(endpoint, credentials, { withCredentials: true });
      //console.log("Login successful:", response.data);
      
      // Normalize response data structure
      const userData = response.data.user || response.data;
      const token = response.data.token || response.data.access_token;
      
      return {
        user: {
          ...userData,
          role: userData.role || userType, // Ensure role is set
          userType: userType // Keep track of user type
        },
        token: token
      };
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      throw this.handleError(error);
    }
  }
  
  async register(userData, userType) {
    try {
      //console.log(`Attempting ${userType} registration`);
      
      // Get CSRF cookie first
      await api.get("/sanctum/csrf-cookie");
      
      const endpoint = userType === "vendor" ? "/api/v1/vendor/register" : "/api/v1/register";
      //console.log(`Using register endpoint: ${endpoint}`);
      
      const response = await api.post(endpoint, userData, { withCredentials: true });
      //console.log("Registration successful:", response.data);
      
      // Normalize response data structure
      const responseData = response.data.user || response.data;
      const token = response.data.token || response.data.access_token;
      
      return {
        user: {
          ...responseData,
          role: responseData.role || userType, // Ensure role is set
          userType: userType // Keep track of user type
        },
        token: token
      };
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      throw this.handleError(error);
    }
  }
  
  async logout(userRole) {
    try {
      //console.log(`Logging out ${userRole} user`);
      
      const endpoint = userRole === 'vendor'
        ? "/api/v1/vendor/logout"
        : "/api/v1/logout";
      
      //console.log(`Using logout endpoint: ${endpoint}`);
      
      const token = localStorage.getItem('token');
      
      await api.post(endpoint, {}, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      //console.log("Logout successful");
      return true;
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      throw this.handleError(error);
    }
  }


  
  // async getUser() {
  //   try {
  //     // Get token directly each time to ensure it's the latest
  //     const token = localStorage.getItem("token");
      
  //     if (!token) {
  //       //console.log("No token found, user is not authenticated");
  //       return null;
  //     }
      
  //     // Determine the appropriate endpoint based on stored user role
  //     const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  //     const userRole = storedUser.role || storedUser.userType;
      
  //     const endpoint = userRole === "vendor"
  //       ? "/api/v1/vendor/profile"
  //       : "/api/v1/auth/me";
      
  //     //console.log(`Checking auth status using endpoint: ${endpoint}`);
      
  //     const response = await api.get(endpoint, {
  //       withCredentials: true,
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
      
  //     //console.log("Auth check response:", response.data);
      
  //     // Handle different response structures between vendor and user endpoints
  //     if (response.data) {
  //       // Format response data consistently
  //       const userData = response.data.user || response.data;
  //       return { 
  //         user: {
  //           ...userData,
  //           role: userData.role || userRole, // Ensure role is preserved
  //           userType: userRole // Preserve user type
  //         },
  //         token: token // Return the current token for consistency
  //       };
  //     }
      
  //     return null;
  //   } catch (error) {
  //     console.error("Auth check failed:", error.response?.data || error.message);
      
  //     if (error.response?.status === 401) {
  //       // Clear invalid auth state
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("user");
  //     }
      
  //     return null;
  //   }
  // }

  

  async getUser() {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return null;
        }

        // Get stored user type
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        const userType = storedUser.userType;

        // Use different endpoints based on user type
        const endpoint = userType === "vendor" 
            ? "/api/v1/vendor/profile"
            : "/api/v1/auth/me";

        const response = await api.get(endpoint, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.data) {
            const userData = response.data.vendor || response.data.user || response.data;
            return {
                user: {
                    ...userData,
                    userType: userType
                },
                token: token
            };
        }

        return null;
    } catch (error) {
        console.error("Auth check failed:", error.response?.data || error.message);
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
        return null;
    }
  }







  // Vendor specific methods
  async vendorRegisterStep1(data) {
    try {
      const response = await api.post("/api/v1/vendor/register", data);
      
      // Store token for subsequent requests
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async vendorRegisterStep2(data) {
    try {
      const formData = new FormData();
      
      // Append text fields
      Object.keys(data).forEach(key => {
        if (key !== 'store_logo') {
          formData.append(key, data[key]);
        }
      });
      
      // Append file if exists
      if (data.store_logo) {
        formData.append('store_logo', data.store_logo);
      }

      const response = await api.post("/api/v1/vendor/setup-store", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async vendorRegisterStep3(data) {
    try {
      const response = await api.post("/api/v1/vendor/setup-payment", data, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async checkEmailVerification(email) {
    try {
      const response = await api.get(`/api/v1/check-verification/${email}`);
      return response.data.verified;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Update vendor profile 
  async updateVendorProfile(data) {
    try {
      const formData = new FormData();
      
      Object.keys(data).forEach(key => {
        if (key === 'store_logo' && data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await api.post("/api/v1/vendor/profile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }


      
  handleError(error) {
    if (error.response) {
      // Handle specific error status codes
      if (error.response.status === 401) {
        // Clear any invalid auth data on unauthorized
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      
      return {
        message: error.response.data.message || "An error occurred",
        status: error.response.status,
        errors: error.response.data.errors || {}
      };
    } else {
      return { 
        message: "Network error. Please try again.", 
        status: 500,
        errors: {}
      };
    }
  }
}

export default new AuthService();