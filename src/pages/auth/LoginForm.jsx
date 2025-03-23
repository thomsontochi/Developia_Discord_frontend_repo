import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthService from "../../services/auth.service";
import { loginSchema, validateForm } from "../../validation/schemas";
import Logger from "../../utils/logger";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userType, setUserType] = useState("user");
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    storeId: "", // Only for vendor
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation errors when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(credentials, userType);
      await login({
        ...response.user,
        token: response.token,
      });
      showToast.success("Login successful!");
      navigate(userType === "vendor" ? "/vendor/dashboard" : "/");
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="card border-0 shadow-lg">
      <div className="card-body p-4 p-md-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome Back!</h2>
          <p className="text-muted">
            Sign in as {userType === "vendor" ? "Vendor" : "Customer"}
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="d-flex mb-4">
          <button
            type="button"
            className={`btn flex-grow-1 rounded-pill ${
              userType === "user" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => setUserType("user")}
          >
            <i className="fas fa-user me-2"></i>
            Customer
          </button>
          <button
            type="button"
            className={`btn flex-grow-1 rounded-pill ms-2 ${
              userType === "vendor" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => setUserType("vendor")}
          >
            <i className="fas fa-store me-2"></i>
            Vendor
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger mb-4" role="alert">
              {error}
            </div>
          )}

          {/* Email Input */}
          <div className="mb-4">
            <label className="form-label small fw-medium text-dark mb-1">
              Email Address
            </label>
            <div className="input-group">
              <span className="input-group-text border-end-0 bg-transparent">
                <i className="fas fa-envelope text-success opacity-50"></i>
              </span>
              <input
                type="email"
                className={`form-control border-start-0 ${
                  validationErrors.email ? "is-invalid" : ""
                }`}
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              {validationErrors.email && (
                <div className="invalid-feedback">{validationErrors.email}</div>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="form-label small fw-medium text-dark">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-decoration-none small text-success"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="input-group">
              <span className="input-group-text border-end-0 bg-transparent">
                <i className="fas fa-lock text-success opacity-50"></i>
              </span>
              <input
                type="password"
                className={`form-control border-start-0 ${
                  validationErrors.password ? "is-invalid" : ""
                }`}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {validationErrors.password && (
                <div className="invalid-feedback">
                  {validationErrors.password}
                </div>
              )}
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-4">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label
                className="form-check-label small text-muted"
                htmlFor="remember"
              >
                Keep me signed in
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-success w-100 py-3 mb-4 rounded-pill"
          >
            Sign In as {userType === "vendor" ? "Vendor" : "Customer"}
          </button>

          {/* Register Link */}
          <div className="text-center">
            <p className="mb-0 text-muted">
              Don't have an account?{" "}
              <Link
                to={
                  userType === "vendor"
                    ? "/auth/vendor/register"
                    : "/auth/register"
                }
                className="text-decoration-none fw-medium text-success"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
