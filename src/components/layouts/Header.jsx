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

          {/* <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <img src="/assets/images/user.svg" alt="User icon" />
              </a>
            </li>
            <li>
              <a className="nav-link" href="cart.html">
                <img src="/assets/images/cart.svg" alt="Cart icon" />
              </a>
            </li>
          </ul> */}

          {/* <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="/assets/images/user.svg" alt="User icon" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/auth/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/auth/register">
                    Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/auth/vendor/login">
                    Vendor Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/auth/vendor/register">
                    Vendor Register
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="cart.html">
                <img src="/assets/images/cart.svg" alt="Cart icon" />
              </a>
            </li>
          </ul> */}

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>
              <ul 
                className="dropdown-menu dropdown-menu-end shadow-sm" 
                aria-labelledby="navbarDropdown"
                style={{
                  minWidth: '250px',
                  border: 'none',
                  marginTop: '10px'
                }}
              >
                <div className="px-4 py-3 border-bottom">
                  <h6 className="m-0">Authentication</h6>
                  <small className="text-muted">Choose your access</small>
                </div>
                
                <div className="py-1">
                  <h6 className="dropdown-header">User</h6>
                  <Link className="dropdown-item" to="/auth/login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/auth/register">
                    Register
                  </Link>
                </div>
                
                <div className="dropdown-divider"></div>
                
                <div className="py-1">
                  <h6 className="dropdown-header">Vendor</h6>
                  <Link className="dropdown-item" to="/auth/vendor/login">
                    Vendor Login
                  </Link>
                  <Link className="dropdown-item" to="/auth/vendor/register">
                    Vendor Register
                  </Link>
                </div>
              </ul>
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
