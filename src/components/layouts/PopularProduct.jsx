import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/assets/PopularProductData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.PopularProductData))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="product-section py-4">
      <div className="container">
        {/* Title Section - Full Width */}
        <div className="row mb-4">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div>
              <h2 className="h4 mb-1">Trending Now</h2>
              <p className="small text-muted mb-0">
                Top picks from verified vendors
              </p>
            </div>
            <Link to="/shop" className="btn btn-sm btn-outline-primary">
              View All
            </Link>
          </div>
        </div>

        {/* Product Grid - Two Rows */}
        <div className="row g-3">
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src="/assets/images/product-1.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>

              <span className="icon-cross">
                <img src="/assets/images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src="/assets/images/product-1.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>

              <span className="icon-cross">
                <img src="/assets/images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src="/assets/images/product-1.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>

              <span className="icon-cross">
                <img src="/assets/images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src="/assets/images/product-1.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>

              <span className="icon-cross">
                <img src="/assets/images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
