import React from "react";
import ShopHero from "../components/ShopHero";
import CategoryNav from "../components/CategoryNav";
import ProductGrid from "../components/ProductGrid";
import VendorQuickView from "../components/VendorQuickView";

const Shop = () => {
  return (
    <div className="shop-page">
      {/* Hero Section */}
      <ShopHero />

      <div className="container py-5">
        <div className="row">
          {/* Sidebar filters - visible on large screens, collapsible on mobile */}
          <div className="col-lg-3">
            <div className="d-none d-lg-block">
              <CategoryNav />
            </div>

            {/* Collapsible category filter for mobile */}
            <button
              className="btn btn-outline-primary w-100 d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileCategories"
            >
              <i className="bi bi-funnel"></i> Filter Categories
            </button>
            <div className="collapse mt-3 d-lg-none" id="mobileCategories">
              <CategoryNav />
            </div>
          </div>

          {/* Main Product Grid */}
          <div className="col-lg-9">
            {/* <h3 className="section-title mb-4">All Products</h3> */}
            <ProductGrid />

            {/* Pagination Placeholder */}
            <div className="d-flex justify-content-center mt-4">
              <nav>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Shop;
