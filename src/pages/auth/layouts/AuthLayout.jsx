import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-left">
          {/* Your brand/logo/image side */}
          <div className="brand-section">
            <img src="/your-logo.png" alt="Vendly" />
            {/* Add any marketing content or images */}
          </div>
        </div>
        
        <div className="auth-right">
          {/* Form container */}
          <div className="auth-form-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;