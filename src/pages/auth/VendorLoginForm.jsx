import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthService from "../../services/auth.service";
import { loginSchema, validateForm } from "../../validation/schemas";

const VendorLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const validationResult = await validateForm(loginSchema, {
        email: credentials.email,
        password: credentials.password,
        userType: "vendor",
      });

      if (!validationResult.success) {
        setError(validationResult.errors);
        return;
      }

      const response = await AuthService.login(credentials, "vendor");

      if (response.user && response.token) {
      
        const userData = {
          ...response.user,
          full_name: response.user.full_name || response.user.name, // Add fallback for name
          role: response.user.role || 'vendor', 
          userType: response.user.userType || 'vendor',
          token: response.token 
        };
        
       // console.log("Logging in vendor with data:", userData);
        
        await login(userData);
        
        navigate("/vendor/dashboard");
      } else {
        console.error("Invalid login response format:", response);
        setError("Login failed: Invalid response from server");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Login failed");
    }
  };


  return (
    <div className="card border-0 shadow-lg">
      <div className="card-body p-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Vendor Login</h2>
          <p className="text-muted">Access your vendor dashboard</p>
        </div>

        {error && (
          <div className="alert alert-danger mb-4" role="alert">
            {typeof error === "string" ? error : Object.values(error)[0]}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="form-label small fw-medium text-dark">
              Email Address
            </label>
            <div className="input-group">
              <span className="input-group-text border-end-0">
                <i className="far fa-envelope text-muted"></i>
              </span>
              <input
                type="email"
                className="form-control border-start-0"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            {error.email && (
              <div className="invalid-feedback d-block">{error.email}</div>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="form-label small fw-medium text-dark">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text border-end-0">
                <i className="fas fa-lock text-muted"></i>
              </span>
              <input
                type="password"
                className="form-control border-start-0"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            {error.password && (
              <div className="invalid-feedback d-block">{error.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn w-100 mb-4"
            style={{
              backgroundColor: "#3b5d50",
              color: "white",
              borderRadius: "30px",
              padding: "12px",
              fontWeight: "500",
            }}
          >
            Sign in as Vendor
          </button>

          <div className="text-center">
            <p className="mb-0 text-muted small">
              Don't have a vendor account?{" "}
              <Link
                to="/auth/vendor/register"
                className="text-decoration-none fw-medium"
                style={{ color: "#3b5d50" }}
              >
                Register as Vendor
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorLoginForm;
