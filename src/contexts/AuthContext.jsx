import { createContext, useState, useContext, useEffect } from "react";
import { logError } from "../utils/logger";
import api from "../config/axios";
import AuthService from "../services/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState(null);

  // Function to check authentication status with the server
  const checkAuthStatus = async () => {
    try {
      //console.log("Checking auth status with server");
      const userData = await AuthService.getUser();

      //console.log("Auth check result:", userData);

      if (userData?.user) {
        // Update state with fresh user data
        setUser(userData.user);
        setIsAuthenticated(true);
        setRole(userData.user.role || userData.user.userType);

        // Update localStorage with the fresh data
        localStorage.setItem("user", JSON.stringify(userData.user));
        
        // Only update token if a new one was provided
        if (userData.token && userData.token !== localStorage.getItem("token")) {
          localStorage.setItem("token", userData.token);
          api.defaults.headers.common["Authorization"] = `Bearer ${userData.token}`;
          //console.log("Updated token in storage and headers");
        }

        return true;
      } else {
        // Clear auth state if check fails
        //console.log("Auth check failed - no valid user data returned");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsAuthenticated(false);
        setRole(null);
        return false;
      }
    } catch (error) {
      console.error("Auth Check Failed:", error);

      // Clear auth state if check fails with an error
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      setIsAuthenticated(false);
      setRole(null);

      return false;
    }
  };

  // Initialize authentication state on app load
  useEffect(() => {
    const initializeAuth = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        //console.log("Auth initialization - Token exists:", !!token);
        //console.log("Auth initialization - Stored user exists:", !!storedUser);

        if (token && storedUser) {
          try {
            // Set token in API headers
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            // Set initial state from localStorage
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setRole(parsedUser.role || parsedUser.userType);
            setIsAuthenticated(true);

            // Then verify with server
            //console.log("Verifying authentication with server...");
            await checkAuthStatus();
          } catch (parseError) {
            console.error("Error parsing stored user data:", parseError);
            // Handle corrupt localStorage data
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUser(null);
            setIsAuthenticated(false);
            setRole(null);
          }
        } else {
          //console.log("No stored auth credentials found");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        // Clear any potentially corrupt state
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsAuthenticated(false);
        setRole(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (userData) => {
    try {
      //console.log("Setting up authentication state with:", userData);

      // Ensure we have a user object
      const user = userData.user || userData;
      
      // Ensure we extract the token correctly
      const token = userData.token || null;

      if (token) {
        // Store token in localStorage
        localStorage.setItem("token", token);

        // Set default authorization header for future requests
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        //console.log("Token stored and set in axios defaults");
      } else {
        console.warn("No token received during login");
      }

      // Ensure the user object has role information
      const userWithRole = {
        ...user,
        role: user.role || user.userType || (userData.role || userData.userType)
      };

      // Store complete user data
      localStorage.setItem("user", JSON.stringify(userWithRole));

      // Update state
      setUser(userWithRole);
      setIsAuthenticated(true);
      setRole(userWithRole.role);

      //console.log("Login complete - Auth state updated with role:", userWithRole.role);
      
      // Verify authentication immediately after login
      setTimeout(() => {
        checkAuthStatus().then(result => {
          //console.log("Post-login auth verification:", result ? "successful" : "failed");
        });
      }, 500);
      
      return true;
    } catch (error) {
      console.error("Login state setup error:", error);
      throw new Error("Failed to set authentication state");
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Get current role before clearing state
      const currentRole = user?.role || user?.userType;
      //console.log("Logging out user with role:", currentRole);

      // Attempt server logout first - if it fails, we'll still log out locally
      try {
        await AuthService.logout(currentRole);
        //console.log("Server logout completed");
      } catch (serverLogoutError) {
        console.error("Server logout failed:", serverLogoutError);
        // Continue with local logout even if server logout fails
      }

      // Clear local state
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      setUser(null);
      setIsAuthenticated(false);
      setRole(null);
      
      //console.log("Local logout completed");
      return true;
    } catch (error) {
      logError(error, "Logout Error");
      // Still clear local state to ensure user is logged out locally
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
      setUser(null);
      setIsAuthenticated(false);
      setRole(null);
      return false;
    }
  };

  const isAdmin = () =>
    role === "super_admin" || role === "admin" || role === "moderator";
  const isCustomer = () => role === "customer" || role === "user";
  const isVendor = () => role === "vendor";

  // Expose loading state
  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading authentication state...</span>
      </div>
    </div>;
  }

  const contextValue = {
    user,
    isAuthenticated,
    role,
    isAdmin,
    isCustomer,
    isVendor,
    login,
    logout,
    isLoading,
    checkAuthStatus,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};