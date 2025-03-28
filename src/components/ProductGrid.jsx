import React, { useState } from "react";

const products = [
  {
    id: 1,
    image: "/assets/images/product-1.png",
    name: "Nordic Chair",
    price: "$50.00",
    vendor: "John's Furniture",
  },
  {
    id: 2,
    image: "/assets/images/product-2.png",
    name: "Kruzo Aero Chair",
    price: "$78.00",
    vendor: "Elegant Homes",
  },
  {
    id: 3,
    image: "/assets/images/product-3.png",
    name: "Ergonomic Chair",
    price: "$43.00",
    vendor: "Comfy Seats",
  },
];

const ProductGrid = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="container">
      {/* Title + View Toggle (Better Spacing) */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-2">All Products</h3>
        <div className="btn-group">
          <button
            className={`btn btn-outline-primary btn-sm ${
              view === "grid" ? "active" : ""
            }`}
            onClick={() => setView("grid")}
          >
            <i className="bi bi-grid"></i>{" "}
            <span className="d-none d-md-inline">Grid</span>
          </button>
          <button
            className={`btn btn-outline-primary btn-sm ${
              view === "list" ? "active" : ""
            }`}
            onClick={() => setView("list")}
          >
            <i className="bi bi-list"></i>{" "}
            <span className="d-none d-md-inline">List</span>
          </button>
        </div>
      </div>

      {/* Product Grid (Responsive) */}
      <div className={`row ${view === "list" ? "flex-column" : ""}`}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`col-12 col-sm-6 col-md-4 mb-3 ${
              view === "list" ? "w-100" : ""
            }`}
          >
            <div className="card product-card border-0 shadow-sm p-2">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded w-100"
              />

              <div className="p-2">
                <h6 className="fw-bold text-truncate">{product.name}</h6>
                <p className="text-primary fw-bold mb-1">{product.price}</p>
                <p className="text-muted small">{product.vendor}</p>

                {/* Buttons - Now Stacked on Mobile */}
                <div className="d-grid gap-2 mt-2">
                  <button className="btn btn-success">
                    <i className="bi bi-whatsapp"></i> Chat
                  </button>
                  <button className="btn btn-outline-dark">
                    <i className="bi bi-heart"></i> Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;



