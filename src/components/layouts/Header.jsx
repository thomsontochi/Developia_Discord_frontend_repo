import React from "react";
import { Link } from "react-router-dom";
// import { ChevronDown, User, LogIn, UserPlus, Store } from 'lucide-react';
// import cartIcon from "/src/assets/images/cart.svg";
// import user from "/src/assets/images/user.svg";

const Header = () => {
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
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-item dropdown position-relative">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
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
              <div
                className="dropdown-menu dropdown-menu-end p-0 shadow-lg"
                aria-labelledby="navbarDropdown"
                style={{
                  minWidth: "280px",
                  border: "none",
                  marginTop: "10px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div className="bg-light p-3 border-bottom">
                  <h6 className="m-0 text-dark fw-bold">
                    Authentication Portal
                  </h6>
                  <small className="text-muted">Select your access type</small>
                </div>

                <div className="p-2">
                  <div className="mb-2">
                    <h6 className="dropdown-header text-muted px-2 py-1">
                      Customer Access
                    </h6>
                    <Link
                      to="/auth/login"
                      className="dropdown-item rounded px-3 py-2 d-flex align-items-center hover-bg-light"
                    >
                      Login to Account
                    </Link>
                    <Link
                      to="/auth/register"
                      className="dropdown-item rounded px-3 py-2 d-flex align-items-center hover-bg-light"
                    >
                      Create New Account
                    </Link>
                  </div>

                  <div className="border-top pt-2">
                    <h6 className="dropdown-header text-muted px-2 py-1">
                      Vendor Portal
                    </h6>
                    <Link
                      to="/auth/vendor/login"
                      className="dropdown-item rounded px-3 py-2 d-flex align-items-center hover-bg-light"
                    >
                      Vendor Login
                    </Link>
                    <Link
                      to="/auth/vendor/register"
                      className="dropdown-item rounded px-3 py-2 d-flex align-items-center hover-bg-light"
                    >
                      Become a Vendor
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a className="nav-link" href="cart.html">
                <img src="/assets/images/cart.svg" alt="Cart icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
