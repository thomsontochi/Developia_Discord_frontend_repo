import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopVendors = () => {
    const [vendorsData, setVendorsData] = useState([]);

    useEffect(() => {
        fetch('/assets/VendorsData.json')
            .then((response) => response.json())
            .then((data) => setVendorsData(data.TopVendors))
            .catch((error) => console.error('Error loading vendors:', error));
    }, []);

    return (
        <section className="top-vendors-section py-5 bg-light">
            <div className="container">
                {/* Section Header */}
                <div className="row mb-5 text-center">
                    <div className="col-12">
                        <h2 className="fw-bold text-dark">Top Verified Vendors</h2>
                        <p className="text-muted">Discover and connect with our most trusted sellers.</p>
                    </div>
                </div>

                {/* Vendors Grid */}
                <div className="row g-4">
                    {vendorsData.map((vendor) => (
                        <div key={vendor.id} className="col-12 col-md-6 col-lg-3">
                            <div className="vendor-card p-4 border rounded-3 shadow-sm bg-white transition-all hover-lift">
                                {/* Vendor Header */}
                                <div className="vendor-header d-flex align-items-center mb-3">
                                    <img 
                                        src={vendor.profileImage} 
                                        alt={vendor.name} 
                                        className="vendor-avatar rounded-circle me-3"
                                    />
                                    <div>
                                        <h3 className="h6 fw-semibold mb-1">{vendor.name}</h3>
                                        <div className="vendor-rating text-warning">
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index}>
                                                    {index < vendor.rating ? '★' : '☆'}
                                                </span>
                                            ))}
                                            <span className="text-muted small ms-2">({vendor.rating}/5)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Vendor Categories */}
                                <div className="vendor-categories mb-3">
                                    <p className="text-muted small fw-medium mb-1">Categories:</p>
                                    <div className="d-flex flex-wrap">
                                        {vendor.categories.map((category, index) => (
                                            <span key={index} className="badge bg-secondary text-white me-2 mb-2">
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Vendor Actions */}
                                <div className="vendor-actions">
                                    <a 
                                        href={`https://wa.me/${vendor.whatsappNumber}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-success w-100 fw-semibold"
                                    >
                                        <i className="fab fa-whatsapp me-2"></i> Chat on WhatsApp
                                    </a>
                                </div>

                                {/* Verified Badge */}
                                {vendor.verifiedBadge && (
                                    <div className="verified-badge text-center mt-3">
                                        <span className="badge bg-primary text-white">
                                            <i className="fas fa-check-circle me-1"></i> Verified Vendor
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Styles */}
            <style>{`
                .vendor-avatar {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border: 2px solid #007bff;
                    transition: transform 0.3s ease-in-out;
                }
                .vendor-card:hover .vendor-avatar {
                    transform: scale(1.1);
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default TopVendors;
