import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [userType, setUserType] = useState('user');
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    storeId: '' // Only for vendor
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userType} login submitted:`, credentials);
  };

  return (
    <div className="login-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <h3 className="fw-bold mb-2">Welcome Back!</h3>
                  <p className="text-muted">Sign in as {userType === 'vendor' ? 'Vendor' : 'Customer'}</p>
                </div>

                {/* User Type Toggle */}
                <div className="d-flex gap-2 mb-4">
                  <button 
                    type="button"
                    className={`btn flex-grow-1 ${userType === 'user' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setUserType('user')}
                  >
                    <i className="fas fa-user me-2"></i>
                    Customer
                  </button>
                  <button 
                    type="button"
                    className={`btn flex-grow-1 ${userType === 'vendor' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setUserType('vendor')}
                  >
                    <i className="fas fa-store me-2"></i>
                    Vendor
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Store ID (Only for vendors) */}
                  {userType === 'vendor' && (
                    <div className="mb-4">
                      <label className="form-label small fw-medium text-dark">Store ID</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text border-end-0">
                          <i className="fas fa-store text-primary opacity-50"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0"
                          name="storeId"
                          value={credentials.storeId}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Email Input */}
                  <div className="mb-4">
                    <label className="form-label small fw-medium text-dark">Email Address</label>
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
                        required
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label small fw-medium text-dark">Password</label>
                      <Link to="/forgot-password" className="text-decoration-none small text-primary">
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
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Remember Me Checkbox */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="remember" />
                      <label className="form-check-label small text-muted" htmlFor="remember">
                        Keep me signed in
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100 btn-lg mb-4">
                    Sign In as {userType === 'vendor' ? 'Vendor' : 'Customer'}
                  </button>

                  {/* Register Link */}
                  <div className="text-center">
                    <p className="mb-0 text-muted small">
                      Don't have an account?{' '}
                      <Link 
                        to={userType === 'vendor' ? "/auth/vendor/register" : "/auth/register"} 
                        className="text-decoration-none fw-medium text-primary"
                      >
                        Create Account
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