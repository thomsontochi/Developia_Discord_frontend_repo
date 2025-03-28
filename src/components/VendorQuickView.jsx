import React from "react";

const vendors = [
  {
    id: 1,
    name: "John's Furniture",
    profileImage: "/assets/images/vendor-1.jpg",
    rating: 4.8,
    responseTime: "Within 1 hour",
    productsCount: 35,
    whatsapp: "https://wa.me/1234567890",
  },
  {
    id: 2,
    name: "Elegant Homes",
    profileImage: "/assets/images/vendor-2.jpg",
    rating: 4.5,
    responseTime: "Within 2 hours",
    productsCount: 50,
    whatsapp: "https://wa.me/1234567891",
  },
];

const VendorQuickView = () => {
  return (
    <div className="container mt-4">
      <h4 className="fw-bold mb-3">Top Vendors</h4>
      <div className="row">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="col-md-4 mb-4">
            <div className="card shadow-sm p-3 d-flex align-items-center text-center">
              <img
                src={vendor.profileImage}
                alt={vendor.name}
                className="rounded-circle mb-2"
                width="80"
                height="80"
              />
              <h5 className="mb-1">{vendor.name}</h5>
              <p className="text-warning mb-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <i key={i} className={`bi ${i < vendor.rating ? "bi-star-fill" : "bi-star"} me-1`}></i>
                ))}
              </p>
              <p className="text-muted small">⏳ {vendor.responseTime}</p>
              <p className="text-muted small">📦 {vendor.productsCount} Products</p>
              <a href={vendor.whatsapp} className="btn btn-success btn-sm" target="_blank">
                <i className="bi bi-whatsapp"></i> Chat Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorQuickView;
