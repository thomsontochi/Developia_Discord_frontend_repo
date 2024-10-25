import React from 'react';
import { Link } from 'react-router-dom';
import envelope_Image from "/src/assets/images/envelope-outline.svg";
import sofa_Image from "/src/assets/images/sofa.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img" >
          <img src={sofa_Image } alt="Image" className="img-fluid" />
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center"><span className="me-1"><img src={envelope_Image} alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>
              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="col-auto">
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Add the rest of the footer content here */}
      </div>
    </footer>
  );
};

export default Footer;