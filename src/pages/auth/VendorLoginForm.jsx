import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import AuthService from "../../services/auth.service";
import { loginSchema, validateForm } from '../../validation/schemas';

const VendorLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    email: '', // Changed from identifier to email
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log('Attempting validation with:', {
        email: credentials.email,
        password: credentials.password,
        userType: 'vendor'
      });

      const validationResult = await validateForm(loginSchema, {
        email: credentials.email,
        password: credentials.password,
        userType: 'vendor'
      });

      if (!validationResult.success) {
        console.log('Validation failed:', validationResult.errors);
        setError(validationResult.errors);
        return;
      }

      console.log('Validation passed, attempting login');
      const response = await AuthService.login(credentials, 'vendor');
      
      if (response.user && response.token) {
        login(response.user);
        navigate("/vendor/dashboard");
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-2">Vendor Login</h3>
                  <p className="text-muted">Access your vendor dashboard</p>
                </div>

                {error && (
                  <div className="alert alert-danger mb-4" role="alert">
                    {typeof error === 'string' ? error : Object.values(error)[0]}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="mb-4">
                    <label className="form-label small fw-medium text-dark">
                      Email Address
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className="fas fa-envelope text-primary opacity-50"></i>
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
                    {error.email && <div className="invalid-feedback d-block">{error.email}</div>}
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <label className="form-label small fw-medium text-dark">Password</label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className="fas fa-lock text-primary opacity-50"></i>
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
                    {error.password && <div className="invalid-feedback d-block">{error.password}</div>}
                  </div>

                  <button type="submit" className="btn btn-primary w-100 btn-lg mb-4">
                    Sign In as Vendor
                  </button>

                  <div className="text-center">
                    <p className="mb-0 text-muted small">
                      Don't have a vendor account?{' '}
                      <Link to="/auth/vendor/register" className="text-decoration-none fw-medium text-primary">
                        Register as Vendor
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

export default VendorLoginForm;