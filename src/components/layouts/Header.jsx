import React, {useState, useEffect} from 'react';
import { Link, useLocation} from 'react-router-dom';


const Header = () => {

  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Set the active link based on the current path
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // Handler to set the active link when clicked
  // const handleLinkClick = (path) => {
  //   setActiveLink(path);
  // }




  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
      <div className="container">
        <Link className="navbar-brand" to="/">Vendly<span>.</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`} >
              <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li className={` ${activeLink === '/Shop' ? 'active' : ''}`} >
            <Link className="nav-link" to="/Shop" >Shop</Link></li>
            <li className={` ${activeLink === '/about' ? 'active' : ''}`}>
              <Link className="nav-link"  to="/about" >About us</Link></li>
            <li  className={` ${activeLink === '/service' ? 'active' : ''}`}>
              <Link className="nav-link" to="/service">Services</Link></li>
            <li className={` ${activeLink === '/blog' ? 'active' : ''}`}>
              <Link className="nav-link" to="/blog">Blog</Link></li>
            <li className={` ${activeLink === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">Contact Us</Link></li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <img src="/assets/images/user.svg" alt="User icon" />
                </a>
              </li>
            <li>
         <Link  to="/cart"> <a className="nav-link" href="">
                <img src="/assets/images/cart.svg" alt="Cart icon" />
                </a> </Link>  </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;