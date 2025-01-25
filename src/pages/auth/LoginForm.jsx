import React, { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
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
    // Login logic
    console.log('Login submitted', credentials);
  };

  return (
    <div className="login-form">
      <h2>Welcome Back</h2>
      <p>Sign in to continue to Vendly</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required 
            placeholder="Enter your email" 
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required 
            placeholder="Enter your password" 
          />
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
        
        <button type="submit" className="btn-primary">Login</button>
      </form>
      
      <div className="social-login">
        <p>Or login with</p>
        <div className="social-buttons">
          <button className="btn-google">Google</button>
          <button className="btn-facebook">Facebook</button>
        </div>
      </div>
      
      <div className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default LoginForm;