import React from 'react';
import { UserPlus, Target, Download, Store } from 'lucide-react';

const CTASection = () => {
    const ctaItems = [
        {
            icon: <UserPlus size={48} className="text-primary mb-3" />,
            title: "Vendor Signup Promotion",
            description: "Join our platform and unlock new business opportunities!",
            benefits: [
                "Zero initial setup costs",
                "Instant market access",
                "Free listing for first 3 months"
            ],
            buttonText: "Become a Vendor",
            buttonVariant: "outline-primary"
        },
        {
            icon: <Target size={48} className="text-primary mb-3" />,
            title: "Customer Registration Benefits",
            description: "Get exclusive perks when you create your account today.",
            benefits: [
                "Personalized recommendations",
                "Early access to sales",
                "Reward points on every purchase"
            ],
            buttonText: "Register Now",
            buttonVariant: "primary"
        },
        {
            icon: <Download size={48} className="text-primary mb-3" />,
            title: "Download Mobile App",
            description: "Experience seamless shopping on the go!",
            benefits: [
                "User-friendly interface",
                "Push notifications",
                "Exclusive app-only deals"
            ],
            buttonText: "Get the App",
            buttonVariant: "outline-secondary",
            appLinks: {
                apple: "#",
                google: "#"
            }
        }
    ];

    return (
        <section className="cta-section py-5 bg-white">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="display-6 fw-bold">Grow with Us</h2>
                        <p className="lead text-muted">Unlock opportunities, enjoy benefits, and stay connected</p>
                    </div>
                </div>
                <div className="row g-4">
                    {ctaItems.map((item, index) => (
                        <div key={index} className="col-12 col-md-4">
                            <div className="cta-card text-center p-4 h-100 border rounded-3 shadow-sm">
                                <div className="cta-icon mb-3">
                                    {item.icon}
                                </div>
                                <h3 className="h5 mb-3">{item.title}</h3>
                                <p className="text-muted mb-3">{item.description}</p>
                                <ul className="list-unstyled small text-muted mb-4">
                                    {item.benefits.map((benefit, benefitIndex) => (
                                        <li key={benefitIndex} className="mb-2">
                                            <span className="me-2">✓</span>{benefit}
                                        </li>
                                    ))}
                                </ul>
                                {item.title === "Download Mobile App" ? (
                                    <div className="d-flex justify-content-center gap-3">
                                        <a 
                                            href={item.appLinks.apple} 
                                            className="btn btn-dark"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <i className="bi bi-apple me-2"></i>App Store
                                        </a>
                                        <a 
                                            href={item.appLinks.google} 
                                            className="btn btn-success"
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <i className="bi bi-google-play me-2"></i>Google Play
                                        </a>
                                    </div>
                                ) : (
                                    <button 
                                        className={`btn btn-${item.buttonVariant}`}
                                    >
                                        {item.buttonText}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTASection;