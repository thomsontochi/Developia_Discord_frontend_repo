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
        <div className="top-vendors-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="section-title mb-3">Top Verified Vendors</h2>
                        <p className="lead text-muted">Connect with trusted sellers offering unique products</p>
                    </div>
                </div>
                <div className="row g-4">
                    {vendorsData.map((vendor) => (
                        <div key={vendor.id} className="col-12 col-md-6 col-lg-3 mb-4">
                            <div className="vendor-card border rounded-3 p-4 h-100 shadow-sm">
                                <div className="vendor-header d-flex align-items-center mb-3">
                                    <img 
                                        src={vendor.profileImage} 
                                        alt={vendor.name} 
                                        className="vendor-avatar rounded-circle me-3"
                                        style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h3 className="h5 mb-1">{vendor.name}</h3>
                                        <div className="vendor-rating text-warning">
                                            {[...Array(5)].map((star, index) => (
                                                <span key={index}>
                                                    {index < vendor.rating ? '★' : '☆'}
                                                </span>
                                            ))}
                                            <span className="text-muted ms-2">({vendor.rating}/5)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="vendor-categories mb-3">
                                    <p className="text-muted small mb-1">Categories:</p>
                                    <div>
                                        {vendor.categories.map((category, index) => (
                                            <span 
                                                key={index} 
                                                className="badge bg-light text-dark me-2 mb-2"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="vendor-actions">
                                    <a 
                                        href={`https://wa.me/${vendor.whatsappNumber}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-success w-100"
                                    >
                                        <i className="fab fa-whatsapp me-2"></i>
                                        Connect on WhatsApp
                                    </a>
                                </div>
                                {vendor.verifiedBadge && (
                                    <div className="verified-badge text-center mt-3">
                                        <span className="badge bg-primary">
                                            <i className="fas fa-check-circle me-1"></i>
                                            Verified Vendor
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopVendors;