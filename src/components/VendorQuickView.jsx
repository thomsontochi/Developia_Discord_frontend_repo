import React from 'react';
import {  StarIcon, ClockIcon, PackageIcon } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: "John's Furniture",
    profileImage: "/assets/images/vendor-1.jpg",
    rating: 4.8,
    responseTime: "Within 1 hour",
    productsCount: 35,
    whatsapp: "https://wa.me/1234567890",
    specialties: ["Nordic Design", "Modern Furniture"]
  },
  {
    id: 2,
    name: "Elegant Homes",
    profileImage: "/assets/images/vendor-2.jpg",
    rating: 4.5,
    responseTime: "Within 2 hours",
    productsCount: 50,
    whatsapp: "https://wa.me/1234567891",
    specialties: ["Luxury Furniture", "Interior Design"]
  },
  {
    id: 3,
    name: "Urban Interiors",
    profileImage: "/assets/images/vendor-3.jpg",
    rating: 4.6,
    responseTime: "Within 1.5 hours",
    productsCount: 42,
    whatsapp: "https://wa.me/1234567892",
    specialties: ["Contemporary", "Minimalist"]
  }
];

const VendorQuickView = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon 
        key={i} 
        size={16}
        fill={i < Math.floor(rating) ? "#ffc107" : "none"}
        color={i < Math.floor(rating) ? "#ffc107" : "#6c757d"}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <div className="container-fluid px-4 py-3">
      <h4 className="mb-3 fw-bold">Featured Vendors</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="col">
            <div className="card vendor-card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={vendor.profileImage}
                    alt={vendor.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                    style={{ objectFit: 'cover' }}
                  />
                  <div>
                    <h5 className="mb-1 fw-bold">{vendor.name}</h5>
                    <div className="d-flex align-items-center">
                      <div className="d-flex">
                        {renderStars(vendor.rating)}
                      </div>
                      <small className="text-muted ms-2">({vendor.rating})</small>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <ClockIcon className="me-2 text-muted" size={16} />
                    <small>{vendor.responseTime}</small>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <PackageIcon className="me-2 text-muted" size={16} />
                    <small>{vendor.productsCount} Products</small>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    {vendor.specialties.map((specialty, index) => (
                      <span 
                        key={index} 
                        className="badge bg-light text-muted small me-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <a 
                    href={vendor.whatsapp} 
                    className="btn btn-success w-100 d-flex align-items-center justify-content-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <WhatsappIcon className="me-2" size={20} /> */}
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorQuickView;