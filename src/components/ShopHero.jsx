import React from "react";

const ShopHero = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Search & Category Dropdown */}
          <div className="col-md-5 mb-3 mb-md-0">
            <div className="input-group">
              <select className="form-select">
                <option value="">All Categories</option>
                <option value="chairs">Chairs</option>
                <option value="tables">Tables</option>
                <option value="sofas">Sofas</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
              />
              <button className="btn btn-primary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Sort Options */}
          <div className="col-md-3 mb-3 mb-md-0">
            <select className="form-select">
              <option value="newest">Sort by: Newest</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Filters Button (for mobile) */}
          <div className="col-md-4 text-md-end">
            <button
              className="btn btn-outline-primary"
              data-bs-toggle="collapse"
              data-bs-target="#filterOptions"
            >
              <i className="bi bi-funnel"></i> Filters
            </button>
          </div>
        </div>

        {/* Filter Options (Collapsible for Mobile) */}
        <div className="collapse mt-4" id="filterOptions">
          <div className="row">
            {/* Price Range */}
            <div className="col-md-3 mb-3">
              <label className="form-label">Price Range</label>
              <input type="range" className="form-range" min="0" max="500" />
            </div>

            {/* Vendor Rating */}
            <div className="col-md-3 mb-3">
              <label className="form-label">Vendor Rating</label>
              <select className="form-select">
                <option>Any</option>
                <option>⭐⭐⭐⭐⭐</option>
                <option>⭐⭐⭐⭐</option>
                <option>⭐⭐⭐</option>
              </select>
            </div>

            {/* Location */}
            <div className="col-md-3 mb-3">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" placeholder="Enter city..." />
            </div>

            {/* Verification Status */}
            <div className="col-md-3 mb-3">
              <label className="form-label">Verification</label>
              <select className="form-select">
                <option>All</option>
                <option>Verified Sellers</option>
                <option>Unverified Sellers</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;
