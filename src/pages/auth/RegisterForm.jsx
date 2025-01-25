// RegisterForm.jsx
import React, { useState } from 'react';

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
    // Registration logic
    console.log('Registration submitted', formData);
  };

  return (
    <div className="register-form">
      <h2>Create Account</h2>
      <p>Join Vendly as a {formData.userType}</p>
      
      <div className="user-type-selector">
        <button 
          type="button"
          className={formData.userType === 'user' ? 'active' : ''}
          onClick={() => setFormData(prev => ({...prev, userType: 'user'}))}
        >
          Regular User
        </button>
        <button 
          type="button"
          className={formData.userType === 'vendor' ? 'active' : ''}
          onClick={() => setFormData(prev => ({...prev, userType: 'vendor'}))}
        >
          Vendor
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label>First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required 
              placeholder="First Name" 
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required 
              placeholder="Last Name" 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="Enter your email" 
          />
        </div>
        
        <div className="form-group-row">
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required 
              placeholder="Create password" 
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
              placeholder="Confirm password" 
            />
          </div>
        </div>
        
        <button type="submit" className="btn-primary">Register</button>
      </form>
      
      <div className="login-link">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default RegisterForm;