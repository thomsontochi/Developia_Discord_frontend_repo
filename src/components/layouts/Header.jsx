import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cartIcon from "/src/assets/images/cart.svg";
import user from "/src/assets/images/user.svg";

const Header = () => {
  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
      <div className="container">
        <Link className="navbar-brand" to="/">Developia<span>.</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <NavLink to="/" className="nav-link active" ><li className="nav-item active">
             Home 
             </li></NavLink>
            <li  ><Link className="nav-link " to="/shop">Shop</Link></li>
            <li><Link className="nav-link " to="/about">About us</Link></li>
            <li><Link className="nav-link active" to="/services">Services</Link></li>
            <li><Link className="nav-link active" to="/BlogSection">Blog</Link></li>
            <li><Link className="nav-link active" to="/contact">Contact us</Link></li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5" >
            <li><a className="nav-link" href="#">
              <img src={user} alt="User icon" /></a></li>
            <li><a className="nav-link" href="cart.html">
              <img src={cartIcon } alt="Cart icon" /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;