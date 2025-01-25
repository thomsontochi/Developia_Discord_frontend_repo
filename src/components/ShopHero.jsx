import React from "react";

const ShopHero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="">
              <h1>Shop</h1>
              <p className="mb-4"></p>
              <p>
                <a href="" className="btn btn-secondary me-2"></a>
                <a href="#" className="btn btn-white-outline"></a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img-wrap">
              <img
                src="/assets/images/couch.png"
                className="img-fluid"
                alt="E-commerce illustration"
              />{" "}
              {/* Self-closing tag */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
