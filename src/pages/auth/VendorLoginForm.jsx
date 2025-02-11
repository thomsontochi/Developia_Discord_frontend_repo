// VendorLoginForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";
import AuthService from "../../services/auth.service";

const VendorLoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'storeId'
  
  const [credentials, setCredentials] = useState({
    identifier: '', // This will be either email or storeId
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
      const loginData = {
        password: credentials.password,
        [loginMethod]: credentials.identifier // This will be either email or storeId
      };

      console.log("Attempting vendor login with:", loginData);
      const response = await AuthService.login(loginData, 'vendor');
      console.log("Login response:", response);
      login(response.user);
      navigate("/vendor/dashboard");
    } catch (err) {
      console.error("Login error:", err);
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
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Login Method Toggle */}
                  <div className="btn-group w-100 mb-4">
                    <button
                      type="button"
                      className={`btn ${loginMethod === 'email' ? 'btn-primary' : 'btn-outline-secondary'}`}
                      onClick={() => setLoginMethod('email')}
                    >
                      Login with Email
                    </button>
                    <button
                      type="button"
                      className={`btn ${loginMethod === 'storeId' ? 'btn-primary' : 'btn-outline-secondary'}`}
                      onClick={() => setLoginMethod('storeId')}
                    >
                      Login with Store ID
                    </button>
                  </div>

                  {/* Identifier Input (Email or Store ID) */}
                  <div className="mb-4">
                    <label className="form-label small fw-medium text-dark">
                      {loginMethod === 'email' ? 'Email Address' : 'Store ID'}
                    </label>
                    <div className="input-group input-group-lg">
                      <span className="input-group-text border-end-0">
                        <i className={`fas fa-${loginMethod === 'email' ? 'envelope' : 'store'} text-primary opacity-50`}></i>
                      </span>
                      <input
                        type={loginMethod === 'email' ? 'email' : 'text'}
                        className="form-control border-start-0"
                        name="identifier"
                        value={credentials.identifier}
                        onChange={handleChange}
                        placeholder={loginMethod === 'email' ? 'Enter your email' : 'Enter your store ID'}
                        required
                      />
                    </div>
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
                  </div>

                  <button type="submit" className="btn btn-primary w-100 btn-lg mb-4">
                    Sign In as Vendor
                  </button>

                  {/* Links */}
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