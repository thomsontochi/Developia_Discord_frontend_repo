import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'user'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('Registration submitted', formData);
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
                  <h3 className="fw-bold mb-2">Create Account</h3>
                  <p className="text-muted">Join Vendly as a {formData.userType}</p>
                </div>

                {/* User Type Selector */}
                <div className="d-flex gap-2 mb-4">
                  <button 
                    type="button"
                    className={`btn flex-grow-1 ${formData.userType === 'user' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setFormData(prev => ({...prev, userType: 'user'}))}
                  >
                    <i className="fas fa-user me-2"></i>
                    Regular User
                  </button>
                  <button 
                    type="button"
                    className={`btn flex-grow-1 ${formData.userType === 'vendor' ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setFormData(prev => ({...prev, userType: 'vendor'}))}
                  >
                    <i className="fas fa-store me-2"></i>
                    Vendor
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Name Inputs */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <label className="form-label small fw-medium text-dark">First Name</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text border-end-0">
                          <i className="fas fa-user text-primary opacity-50"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                         
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium text-dark">Last Name</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text border-end-0">
                          <i className="fas fa-user text-primary opacity-50"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                         
                          required
                        />
                      </div>
                    </div>
                  </div>

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
                        value={formData.email}
                        onChange={handleChange}
                       
                        required
                      />
                    </div>
                  </div>

                  {/* Password Inputs */}
                  <div className="row mb-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <label className="form-label small fw-medium text-dark">Password</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text border-end-0">
                          <i className="fas fa-lock text-primary opacity-50"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-start-0"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-medium text-dark">Confirm Password</label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text border-end-0">
                          <i className="fas fa-lock text-primary opacity-50"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-start-0"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100 btn-lg mb-4">
                    Create Account
                  </button>

                  {/* Divider */}
                  <div className="position-relative mb-4">
                    <hr className="text-muted" />
                    <span className="position-absolute top-50 start-50 translate-middle px-3 bg-white text-muted small">
                      or register with
                    </span>
                  </div>

                  {/* Social Login */}
                  <div className="d-flex flex-column flex-md-row gap-3 mb-4">
                    <button type="button" className="btn btn-outline-light flex-grow-1 social-btn">
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <i className="fab fa-google text-danger"></i>
                        <span>Continue with Google</span>
                      </div>
                    </button>
                    <button type="button" className="btn btn-outline-light flex-grow-1 social-btn">
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <i className="fab fa-facebook text-primary"></i>
                        <span>Continue with Facebook</span>
                      </div>
                    </button>
                  </div>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="mb-0 text-muted small">
                      Already have an account?{' '}
                      <Link to="/auth/login" className="text-decoration-none fw-medium text-primary">
                        Sign in
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

export default RegisterForm;