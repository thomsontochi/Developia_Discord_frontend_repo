import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/AuthLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-left-content">
          <Link to="/" className="text-decoration-none text-white">
            <h1 className="auth-brand">Vendly</h1>
          </Link>
          <div className="auth-features">
            <div className="feature-item">
              <i className="fas fa-store fa-2x mb-3"></i>
              <h3>Manage Your Store</h3>
              <p>Take control of your business with our powerful tools</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line fa-2x mb-3"></i>
              <h3>Track Growth</h3>
              <p>Monitor your sales and performance in real-time</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-shield-alt fa-2x mb-3"></i>
              <h3>Secure Platform</h3>
              <p>Your business is protected with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-form-container">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
