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
    <div className="container">
      <h3 className="fw-bold mb-3">Featured Vendors</h3>
      <div className="row">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card vendor-card p-3 shadow-sm">
              <div className="d-flex align-items-center">
                {/* Vendor Image */}
                <img
                  src={vendor.profileImage}
                  alt={vendor.name}
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                />
                {/* Vendor Info */}
                <div>
                  <h5 className="mb-1">{vendor.name}</h5>
                  <p className="text-warning mb-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className={`bi ${i < vendor.rating ? "bi-star-fill" : "bi-star"} me-1`}></i>
                    ))}
                  </p>
                  <p className="text-muted small mb-0">⏳ {vendor.responseTime}</p>
                  <p className="text-muted small mb-0">📦 {vendor.productsCount} Products</p>
                </div>
              </div>
              {/* WhatsApp Contact Button */}
              <div className="mt-3">
                <a href={vendor.whatsapp} className="btn btn-success w-100" target="_blank">
                  <i className="bi bi-whatsapp"></i> Chat with Vendor
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorQuickView;
