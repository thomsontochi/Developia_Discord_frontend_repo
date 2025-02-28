import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { showToast } from "../../utility/toast";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    showToast.success("You have been logged out!");
    navigate("/");
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          Vendly<span>.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${isActive("/") ? "active" : ""}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${isActive("/shop") ? "active" : ""}`}>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className={`nav-item ${isActive("/about") ? "active" : ""}`}>
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className={`nav-item ${isActive("/services") ? "active" : ""}`}>
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className={`nav-item ${isActive("/blog") ? "active" : ""}`}>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>
              {isAuthenticated ? (
                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="p-3">
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                        style={{ width: "48px", height: "48px" }}
                      >
                        {user?.first_name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h6 className="mb-0">
                          {user?.first_name} {user?.last_name}
                        </h6>
                        <small className="text-muted">{user?.email}</small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={
                        user?.userType === "vendor"
                          ? "/vendor/dashboard"
                          : "/dashboard"
                      }
                    >
                      <i className="fas fa-tachometer-alt me-2"></i> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="fas fa-user-cog me-2"></i> Profile Settings
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item text-danger"
                    >
                      <i className="fas fa-sign-out-alt me-2"></i> Logout
                    </button>
                  </li>
                </ul>
              ) : (
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <h6 className="dropdown-header">Welcome to Vendly</h6>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/auth/login">
                      <i className="fas fa-sign-in-alt me-2"></i> Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/auth/register">
                      <i className="fas fa-user-plus me-2"></i> Register
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <h6 className="dropdown-header">Vendor Access</h6>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/auth/vendor/login">
                      <i className="fas fa-store me-2"></i> Vendor Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/auth/vendor/register">
                      <i className="fas fa-store-alt me-2"></i> Become a Vendor
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                <img src="/assets/images/cart.svg" alt="Cart icon" />
              </Link>
            </li>
          </ul> */}

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-item dropdown position-relative">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>

              {isAuthenticated ? (
                <div
                  className="dropdown-menu dropdown-menu-end shadow-lg p-0"
                  style={{
                    minWidth: "300px",
                    border: "none",
                    marginTop: "12px",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  {/* Enhanced User Info Section */}
                  <div className="bg-primary p-4 position-relative">
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle bg-white text-primary d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "48px",
                          height: "48px",
                          fontSize: "20px",
                        }}
                      >
                        {user?.first_name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h6 className="mb-1 text-white fw-bold">
                          {user?.first_name} {user?.last_name}
                        </h6>
                        <small className="text-white-50 d-block">
                          {user?.email}
                        </small>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Menu Items */}
                  <div className="py-2">
                    <Link
                      to={
                        user?.userType === "vendor"
                          ? "/vendor/dashboard"
                          : "/dashboard"
                      }
                      className="dropdown-item px-4 py-2 d-flex align-items-center"
                    >
                      <i className="fas fa-tachometer-alt me-3 text-primary"></i>
                      <div>
                        <strong className="d-block">Dashboard</strong>
                        <small className="text-muted">
                          View your dashboard
                        </small>
                      </div>
                    </Link>

                    <Link
                      to="/profile"
                      className="dropdown-item px-4 py-2 d-flex align-items-center"
                    >
                      <i className="fas fa-user-cog me-3 text-primary"></i>
                      <div>
                        <strong className="d-block">Profile Settings</strong>
                        <small className="text-muted">
                          Manage your account
                        </small>
                      </div>
                    </Link>

                    <Link
                      to="/orders"
                      className="dropdown-item px-4 py-2 d-flex align-items-center"
                    >
                      <i className="fas fa-shopping-bag me-3 text-primary"></i>
                      <div>
                        <strong className="d-block">My Orders</strong>
                        <small className="text-muted">Track your orders</small>
                      </div>
                    </Link>

                    <div className="dropdown-divider my-2"></div>

                    <button
                      onClick={handleLogout}
                      className="dropdown-item px-4 py-2 d-flex align-items-center text-danger"
                    >
                      <i className="fas fa-sign-out-alt me-3"></i>
                      <div>
                        <strong className="d-block">Logout</strong>
                        <small>Sign out of your account</small>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="dropdown-menu dropdown-menu-end shadow-lg p-0"
                  style={{
                    minWidth: "300px",
                    border: "none",
                    marginTop: "12px",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="bg-primary p-4 text-white"
                    style={{ backgroundColor: "#3b5d50" }}
                  >
                    <h5 className="mb-1 fw-bold">Welcome to Vendly</h5>
                    <p className="mb-0 text-white-50 small">
                      Sign in to access your account
                    </p>
                  </div>

                  <div className="p-3">
                    <div className="mb-3">
                      <h6 className="dropdown-header text-uppercase small fw-bold text-primary px-2 py-1">
                        Customer Access
                      </h6>
                      <Link
                        to="/auth/login"
                        className="dropdown-item rounded-3 px-3 py-2 d-flex align-items-center"
                      >
                        <i className="fas fa-sign-in-alt me-3 text-primary"></i>
                        <div>
                          <strong className="d-block">Login</strong>
                          <small className="text-muted">
                            Access your account
                          </small>
                        </div>
                      </Link>
                      <Link
                        to="/auth/register"
                        className="dropdown-item rounded-3 px-3 py-2 d-flex align-items-center"
                      >
                        <i className="fas fa-user-plus me-3 text-primary"></i>
                        <div>
                          <strong className="d-block">Register</strong>
                          <small className="text-muted">
                            Create a new account
                          </small>
                        </div>
                      </Link>
                    </div>

                    <div className="pt-2 border-top">
                      <h6 className="dropdown-header text-uppercase small fw-bold text-primary px-2 py-1">
                        Vendor Portal
                      </h6>
                      <Link
                        to="/auth/vendor/login"
                        className="dropdown-item rounded-3 px-3 py-2 d-flex align-items-center"
                      >
                        <i className="fas fa-store me-3 text-primary"></i>
                        <div>
                          <strong className="d-block">Vendor Login</strong>
                          <small className="text-muted">
                            Access your vendor account
                          </small>
                        </div>
                      </Link>
                      <Link
                        to="/auth/vendor/register"
                        className="dropdown-item rounded-3 px-3 py-2 d-flex align-items-center"
                      >
                        <i className="fas fa-store-alt me-3 text-primary"></i>
                        <div>
                          <strong className="d-block">Become a Vendor</strong>
                          <small className="text-muted">
                            Start selling on Vendly
                          </small>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                <img src="/assets/images/cart.svg" alt="Cart icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
