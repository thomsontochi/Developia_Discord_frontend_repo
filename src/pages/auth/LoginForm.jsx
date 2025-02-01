// src/pages/auth/LoginForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", credentials);
  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                {/* Welcome Message */}
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-2">Welcome Back!</h3>
                  <p className="text-muted">
                    Enter your credentials to access your account
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="form-label small fw-medium text-dark"
                    >
                      Email Address
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className="fas fa-envelope text-primary opacity-50"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control border-start-0"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label
                        htmlFor="password"
                        className="form-label small fw-medium text-dark"
                      >
                        Password
                      </label>
                      <Link
                        to="/forgot-password"
                        className="text-decoration-none small text-primary fw-bold"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className="fas fa-lock text-primary opacity-50"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control border-start-0"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  {/* Remember Me Checkbox */}
                  <div className="mb-4">
                    <div className="form-check d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                      />
                      <label
                        className="form-check-label small text-muted mt-1 fw-bold"
                        htmlFor="remember"
                      >
                        Keep me signed in
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg mb-4"
                  >
                    Sign In
                  </button>

                  {/* Divider */}
                  <div className="position-relative mb-4">
                    <hr className="text-muted" />
                    <span className="position-absolute top-50 start-50 translate-middle px-3 bg-white text-muted small">
                      or continue with
                    </span>
                  </div>

                  {/* Social Login */}
                  <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                    <button
                      type="button"
                      className="btn btn-outline-light flex-grow-1 social-btn"
                    >
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <i className="fab fa-google text-danger"></i>
                        <span>Continue with Google</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light flex-grow-1 social-btn"
                    >
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <i className="fab fa-facebook text-primary"></i>
                        <span>Continue with Facebook</span>
                      </div>
                    </button>
                  </div>

                  {/* Register Links */}
                  <div className="text-center">
                    <p className="mb-2 text-muted small">
                      New to our platform?{" "}
                      <Link
                        to="/auth/register"
                        className="text-decoration-none fw-medium text-primary fw-bold"
                      >
                        Create an account
                      </Link>
                    </p>

                    <p className="small text-muted">
                      For business accounts{" "}
                      <Link
                        to="/auth/vendor/login"
                        className="text-decoration-none fw-medium text-primary fw-bold"
                      >
                        login here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
