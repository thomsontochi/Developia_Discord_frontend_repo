import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 text-lg-start text-center">
            <h1 className="fw-bold">
              Shop Directly from <span className="text-primary">WhatsApp Vendors</span>
            </h1>
            <p className="text-muted">
              Discover verified local sellers. Chat, shop, and buy with confidence through WhatsApp.
            </p>
            <div className="d-flex gap-3 justify-content-lg-start justify-content-center">
              <Link to="/auth/vendor/register" className="btn btn-primary">
                Become a Vendor
              </Link>
              <Link to="/shop" className="btn btn-outline-dark">
                Shop Now
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="/assets/images/Shopping.png"
              className="img-fluid hero-image"
              alt="Shopping on WhatsApp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
