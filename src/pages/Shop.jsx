import React from "react";
import ShopHero from "../components/ShopHero";
import CategoryNav from "../components/CategoryNav";
import ProductGrid from "../components/ProductGrid";
import VendorQuickView from "../components/VendorQuickView";
import FeaturedProducts from "../components/FeaturedProducts";

const Shop = () => {
  return (
    <div className="shop-page">
      {/* Hero Section */}
      {/* <ShopHero /> */}

      <div className="container py-5">
        <div className="row">
          {/* Sidebar - Filters, Categories, Search & Sort */}
          <div className="col-lg-3">
            {/* Filters Section */}
            <div className="d-none d-lg-block mb-4">
              <div className="filters p-3 border rounded">
                <h5 className="fw-bold">Filters</h5>

                <div className="mb-3">
                  <label className="form-label">Price Range</label>
                  <input type="range" className="form-range" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Vendor Rating</label>
                  <select className="form-select">
                    <option>Any</option>
                    <option>4 Stars & Up</option>
                    <option>3 Stars & Up</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city..."
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Verification</label>
                  <select className="form-select">
                    <option>All Sellers</option>
                    <option>Verified Sellers</option>
                    <option>Unverified Sellers</option>
                  </select>
                </div>
                {/* make button size smaller */}
                <button className="btn btn-dark w-100">Apply Filters</button>
              </div>
            </div>

            {/* Categories Section */}
            <div className="d-none d-lg-block">
              <CategoryNav />
            </div>

            {/* Search & Sort (Now inside Sidebar) */}
            <div className="d-none d-lg-block mt-4">
              <div className="search-sort p-3 border rounded">
                <h5 className="fw-bold">Search & Sort</h5>

                {/* Search Input */}
                <div className="mb-3">
                  <label className="form-label">Search Products</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                  />
                </div>

                {/* Sort Dropdown */}
                <div className="mb-3">
                  <label className="form-label">Sort By</label>
                  <select className="form-select">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Sellers</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile View - Collapsible Filters, Categories & Search/Sort */}
            {/* <button
              className="btn btn-outline-primary w-100 d-lg-none mb-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileFilters"
            >
              <i className="bi bi-funnel"></i> Filter Options
            </button> */}

            <button
              className="btn btn-outline-primary d-lg-none mb-2 small-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileFilters"
            >
              <i className="bi bi-funnel"></i> Filters
            </button>

            <div className="collapse mt-2 d-lg-none" id="mobileFilters">
              <div className="filters p-3 border rounded mb-3">
                <h5 className="fw-bold">Filters</h5>

                <div className="mb-3">
                  <label className="form-label">Price Range</label>
                  <input type="range" className="form-range" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Vendor Rating</label>
                  <select className="form-select">
                    <option>Any</option>
                    <option>4 Stars & Up</option>
                    <option>3 Stars & Up</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city..."
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Verification</label>
                  <select className="form-select">
                    <option>All Sellers</option>
                    <option>Verified Sellers</option>
                    <option>Unverified Sellers</option>
                  </select>
                </div>

                <button className="btn btn-dark w-100">Apply Filters</button>
              </div>
            </div>

            {/* <button
              className="btn btn-outline-primary w-100 d-lg-none mt-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileCategories"
            >
              <i className="bi bi-list"></i> Filter Categories
            </button> */}

            <button
              className="btn btn-outline-primary d-lg-none mb-2 small-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileCategories"
            >
              <i className="bi bi-list"></i> Categories
            </button>
            <div className="collapse mt-3 d-lg-none" id="mobileCategories">
              <CategoryNav />
            </div>

            {/* <button
              className="btn btn-outline-primary w-100 d-lg-none mt-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileSearchSort"
            >
              <i className="bi bi-search"></i> Search & Sort
            </button> */}
             <button
              className="btn btn-outline-primary d-lg-none mb-2 small-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileSearchSort"
            >
              <i className="bi bi-search"></i> Search & Sort
            </button>
            <div className="collapse mt-3 d-lg-none" id="mobileSearchSort">
              <div className="search-sort p-3 border rounded">
                <h5 className="fw-bold">Search & Sort</h5>

                {/* Search Input */}
                <div className="mb-3">
                  <label className="form-label">Search Products</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                  />
                </div>

                {/* Sort Dropdown */}
                <div className="mb-3">
                  <label className="form-label">Sort By</label>
                  <select className="form-select">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Sellers</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Product Grid */}
          <div className="col-lg-9">

            {/* 🔥 Trending / Featured Products */}
            <FeaturedProducts />

            {/* 🛍️ All Products */}
            <ProductGrid />

            {/* Pagination */}
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
