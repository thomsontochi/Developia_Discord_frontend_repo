import React, { useState } from "react";

const products = [
  {
    id: 1,
    image: "/assets/images/product-1.png",
    name: "Nordic Chair",
    price: "$50.00",
    vendor: "John's Furniture",
    verified: true,
    whatsapp: "https://wa.me/1234567890",
  },
  {
    id: 2,
    image: "/assets/images/product-2.png",
    name: "Kruzo Aero Chair",
    price: "$78.00",
    vendor: "Elegant Homes",
    verified: false,
    whatsapp: "https://wa.me/1234567891",
  },
  {
    id: 3,
    image: "/assets/images/product-3.png",
    name: "Ergonomic Chair",
    price: "$43.00",
    vendor: "Comfy Seats",
    verified: true,
    whatsapp: "https://wa.me/1234567892",
  },
];

const ProductGrid = () => {
  const [view, setView] = useState("grid"); // Toggle between grid and list view

  return (
    <div className="container mt-4">
      {/* View Toggle */}
      <div className="d-flex justify-content-between mb-3">
        <h4 className="fw-bold">Shop Products</h4>
        <div>
          <button
            className={`btn btn-outline-primary me-2 ${view === "grid" ? "active" : ""}`}
            onClick={() => setView("grid")}
          >
            <i className="bi bi-grid"></i>
          </button>
          <button
            className={`btn btn-outline-primary ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      <div className={`row ${view === "list" ? "flex-column" : ""}`}>
        {products.map((product) => (
          <div key={product.id} className={`col-md-4 mb-4 ${view === "list" ? "col-12" : ""}`}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                loading="lazy" // Lazy loading for performance
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold text-primary">{product.price}</p>
                <p className="text-muted">
                  {product.vendor}{" "}
                  {product.verified && <i className="bi bi-patch-check-fill text-success"></i>}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <a href={product.whatsapp} className="btn btn-success btn-sm" target="_blank">
                    <i className="bi bi-whatsapp"></i> Chat
                  </a>
                  <button className="btn btn-outline-danger btn-sm">
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
