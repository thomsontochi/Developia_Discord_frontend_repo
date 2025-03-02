import { createContext, useState, useContext, useEffect } from "react";
import * as jose from "jose";
import { logError } from "../utils/logger";
import { config } from "../config/env";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const storedUser = sessionStorage.getItem("user");

        if (token && storedUser) {
          // Verify token validity
          await jose.jwtVerify(
            token,
            new TextEncoder().encode(config.JWT_SECRET)
          );
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        logError(error, "Auth Initialization Error");
        // Clear invalid auth data
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (userData) => {
    try {
      // Sanitize user data before storing
      const sanitizedUser = {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        role: userData.role,
      };

      sessionStorage.setItem("user", JSON.stringify(sanitizedUser));
      setUser(sanitizedUser);
      setIsAuthenticated(true);
    } catch (error) {
      logError(error, "Login Error");
      throw error;
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      logError(error, "Logout Error");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
