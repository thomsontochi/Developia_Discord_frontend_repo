import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
      <div className="container">
        <Link className="navbar-brand" to="/">Vendly<span>.</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li><Link className="nav-link" to="/shop">Shop</Link></li>
            <li><Link className="nav-link" to="/about">About us</Link></li>
            <li><Link className="nav-link" to="/services">Services</Link></li>
            <li><Link className="nav-link" to="/blog">Blog</Link></li>
            <li><Link className="nav-link" to="/contact">Contact us</Link></li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li><a className="nav-link" href="#"><img src="/assets/images/user.svg" alt="User icon" /></a></li>
            <li><a className="nav-link" href="cart.html"><img src="/assets/images/cart.svg" alt="Cart icon" /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;