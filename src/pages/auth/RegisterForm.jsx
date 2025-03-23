import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AuthService from "../../services/auth.service";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "user",
  });

  const [errors, setErrors] = useState({
    general: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear validation errors when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleUserTypeChange = (type) => {
    if (type === "vendor") {
      navigate("/auth/vendor/register");
    } else {
      setFormData((prev) => ({ ...prev, userType: "user" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ general: "", firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        password: "Passwords don't match",
        confirmPassword: "Passwords don't match",
      }));
      setLoading(false);
      return;
    }

    try {
      const apiData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        userType: formData.userType,
      };

      const response = await AuthService.register(apiData, formData.userType);

      if (response.user && response.token) {
        localStorage.setItem("token", response.token);
        login(response.user);

        if (formData.userType === "vendor") {
          navigate("/vendor/onboarding");
        } else {
          navigate("/");
        }
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "Registration successful but received unexpected response",
        }));
      }
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response?.data?.errors) {
        const mappedErrors = {
          firstName: err.response.data.errors.first_name?.[0],
          lastName: err.response.data.errors.last_name?.[0],
          email: err.response.data.errors.email?.[0],
          password: err.response.data.errors.password?.[0],
          confirmPassword: err.response.data.errors.password_confirmation?.[0],
        };
        setErrors((prev) => ({
          ...prev,
          ...mappedErrors,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          general: err.message || "Registration failed",
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-lg">
      <div className="card-body p-4 p-md-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Create Account</h2>
          <p className="text-muted">Join Vendly as a {formData.userType}</p>
        </div>

        <div className="d-flex mb-4">
          <button
            type="button"
            className={`btn flex-grow-1 rounded-pill ${
              formData.userType === "user" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => handleUserTypeChange("user")}
          >
            <i className="fas fa-user me-2"></i>
            Regular User
          </button>
          <button
            type="button"
            className={`btn flex-grow-1 rounded-pill ms-2 ${
              formData.userType === "vendor" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => handleUserTypeChange("vendor")}
          >
            <i className="fas fa-store me-2"></i>
            Vendor
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {errors.general && (
            <div className="alert alert-danger mb-4" role="alert">
              {errors.general}
            </div>
          )}
          
          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="form-label small fw-medium text-dark mb-1">
                First Name
              </label>
              <div className="input-group">
                <span className="input-group-text border-end-0 bg-transparent">
                  <i className="fas fa-user text-success opacity-50"></i>
                </span>
                <input
                  type="text"
                  className={`form-control border-start-0 ${errors.firstName ? "is-invalid" : ""}`}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                 
                  required
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
            </div>
            
            <div className="col-md-6">
              <label className="form-label small fw-medium text-dark mb-1">
                Last Name
              </label>
              <div className="input-group">
                <span className="input-group-text border-end-0 bg-transparent">
                  <i className="fas fa-user text-success opacity-50"></i>
                </span>
                <input
                  type="text"
                  className={`form-control border-start-0 ${errors.lastName ? "is-invalid" : ""}`}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                
                  required
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label small fw-medium text-dark mb-1">
              Email Address
            </label>
            <div className="input-group">
              <span className="input-group-text border-end-0 bg-transparent">
                <i className="fas fa-envelope text-success opacity-50"></i>
              </span>
              <input
                type="email"
                className={`form-control border-start-0 ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
              
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="form-label small fw-medium text-dark mb-1">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text border-end-0 bg-transparent">
                  <i className="fas fa-lock text-success opacity-50"></i>
                </span>
                <input
                  type="password"
                  className={`form-control border-start-0 ${errors.password ? "is-invalid" : ""}`}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                
                  required
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
            </div>
            
            <div className="col-md-6">
              <label className="form-label small fw-medium text-dark mb-1">
                Confirm Password
              </label>
              <div className="input-group">
                <span className="input-group-text border-end-0 bg-transparent">
                  <i className="fas fa-lock text-success opacity-50"></i>
                </span>
                <input
                  type="password"
                  className={`form-control border-start-0 ${errors.confirmPassword ? "is-invalid" : ""}`}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                
                  required
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">{errors.confirmPassword}</div>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 py-3 mb-4 rounded-pill"
            disabled={loading}
          >
            {loading ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="position-relative mb-4">
            <hr className="text-muted" />
            <span className="position-absolute top-50 start-50 translate-middle px-3 bg-white text-muted small">
              or register with
            </span>
          </div>

          <div className="d-flex flex-column flex-md-row gap-3 mb-4">
            <button
              type="button"
              className="btn btn-outline-secondary flex-grow-1 social-btn rounded-pill"
            >
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fab fa-google text-danger"></i>
                <span>Continue with Google</span>
              </div>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary flex-grow-1 social-btn rounded-pill"
            >
              <div className="d-flex align-items-center justify-content-center gap-2">
                <i className="fab fa-facebook text-primary"></i>
                <span>Continue with Facebook</span>
              </div>
            </button>
          </div>

          <div className="text-center">
            <p className="mb-0 text-muted">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-decoration-none fw-medium text-success"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;