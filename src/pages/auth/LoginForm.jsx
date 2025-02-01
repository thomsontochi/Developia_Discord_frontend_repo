import React, { useState } from "react";

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
    // Login logic
    console.log("Login submitted", credentials);
  };

  return (
    <div className=" container text-center mx-auto">
      <div className="form-header">
        <h2>Welcome Back</h2>
        <p>Sign in to continue to Vendly</p>
      </div>

      <form onSubmit={handleSubmit} className="row g-3">
        <div className="form-group col-md-6">
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

        <div className="form-group col-md-6">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />

          <div className="col-md-12 block">
            <a href="/forgot-password" className="forgot-password ">
              Forgot Password?
            </a>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>

      <div className="social-login">
        <p>Or login with</p>
        <div className="social-button d-flex justify-content-center gap-3">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google"></i>
        </div>
      </div>

      <div className="register-link">
        Don't have an account? <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default LoginForm;
