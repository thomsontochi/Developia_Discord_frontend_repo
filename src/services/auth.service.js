import api from "../config/axios";
// import axios from 'axios';

class AuthService {
  // Regular user authentication

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

  async vendorRegisterStep1(data) {
    try {
      await api.get("/sanctum/csrf-cookie");

      const response = await api.post("/api/v1/vendor/register", {
        full_name: data.full_name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      });

      // Store token from response
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        console.log("Token stored:", response.data.token);
      }

      // Store email for verification check
      localStorage.setItem("pending_verification_email", data.email);

      return response.data;
    } catch (error) {
      console.error("Registration error:", error.response?.data);
      throw this.handleError(error);
    }
  }

  // Add verification check method
  async checkVerificationStatus() {
    const email = localStorage.getItem("pending_verification_email");
    if (!email) return null;

    try {
      const response = await api.get(`/api/v1/check-verification/${email}`);
      return response.data;
    } catch (error) {
      console.error("Verification check error:", error);
      throw this.handleError(error);
    }
  }

  async vendorRegisterStep2(data) {
    try {
      const token = localStorage.getItem("token");
      console.log("Token before store setup:", token);

      if (!token) {
        throw new Error("Authentication required");
      }

      // Create FormData
      const formData = new FormData();
      formData.append("store_name", data.store_name);
      formData.append("store_description", data.store_description);
      formData.append("business_category", data.business_category);
      formData.append("address", data.address);
      if (data.store_logo) {
        formData.append("store_logo", data.store_logo);
      }

      // Use your api instance instead of axios directly
      const response = await api.post("/api/v1/vendor/setup-store", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Complete error:", error);
      throw this.handleError(error);
    }
  }

  async vendorRegisterStep3(data) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Authentication required");
        }

        // First get CSRF cookie
        await api.get('/sanctum/csrf-cookie');

        const response = await api.post("/api/v1/vendor/setup-payment", 
            {
              payment_details: {
                bank_name: data.payment_details.bank_name,
                account_number: data.payment_details.account_number,
                account_name: data.payment_details.account_holder 
            }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error("Payment setup error:", error);
        throw this.handleError(error);
    }
}

  async getOnboardingStatus() {
    try {
      const token = localStorage.getItem("token");
      if (!token) return null;

      const response = await api.get("/api/v1/vendor/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        currentStep: response.data.vendor.onboarding_step.current_step,
        completedSteps: response.data.vendor.onboarding_step.completed_steps,
      };
    } catch (error) {
      console.error("Onboarding status error:", error);
      throw this.handleError(error);
    }
  }

  async checkEmailVerification(email) {
    try {
      const response = await api.get(`/api/v1/check-verification/${email}`);
      console.log("Verification response:", response.data); // Debug log
      return response.data.verified;
    } catch (error) {
      console.error("Verification check failed:", error.response?.data);
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
