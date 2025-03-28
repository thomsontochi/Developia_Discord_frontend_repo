import React from "react";
import { Shield, CreditCard, RefreshCw, HeadsetIcon } from 'lucide-react';

const TrustIndicators = () => {
    const indicators = [
        {
            icon: <Shield size={48} className="text-primary mb-3" />,
            title: "Vendor Verification",
            description: "Every vendor undergoes a rigorous verification process to ensure authenticity and quality of products.",
            details: [
                "Background checks completed",
                "Product quality assessed",
                "Business credentials verified"
            ]
        },
        {
            icon: <CreditCard size={48} className="text-primary mb-3" />,
            title: "Secure Payments",
            description: "Your financial information is protected with state-of-the-art encryption and secure payment gateways.",
            details: [
                "256-bit SSL encryption",
                "PCI DSS compliant",
                "Multiple payment options"
            ]
        },
        {
            icon: <RefreshCw size={48} className="text-primary mb-3" />,
            title: "Money-Back Guarantee",
            description: "We stand behind the quality of our products with a comprehensive money-back guarantee.",
            details: [
                "30-day return policy",
                "Full refund for unsatisfactory products",
                "No questions asked"
            ]
        },
        {
            icon: <HeadsetIcon size={48} className="text-primary mb-3" />,
            title: "24/7 Customer Support",
            description: "Our dedicated support team is always ready to assist you with any questions or concerns.",
            details: [
                "Multiple contact channels",
                "Quick response times",
                "Knowledgeable support staff"
            ]
        }
    ];

    return (
        <section className="trust-indicators py-5 bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="display-6 fw-bold">Why Trust Our Platform?</h2>
                        <p className="lead text-muted">We prioritize your safety, security, and satisfaction</p>
                    </div>
                </div>
                <div className="row g-4">
                    {indicators.map((indicator, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3">
                            <div className="trust-card text-center p-4 h-100 border rounded-3 shadow-sm">
                                <div className="trust-icon mb-3">
                                    {indicator.icon}
                                </div>
                                <h3 className="h5 mb-3">{indicator.title}</h3>
                                <p className="text-muted mb-3">{indicator.description}</p>
                                <ul className="list-unstyled small text-muted">
                                    {indicator.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="mb-2">
                                            <span className="me-2">✓</span>{detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;