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

          Filters Button (for mobile)
          
        </div>

        
      </div>
    </section>
  );
};

export default ShopHero;
