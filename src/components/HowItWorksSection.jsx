import React from 'react';
import { 
    Search, 
    MessageCircle, 
    ShieldCheck, 
    Package, 
    Store, 
    Link2, 
    BarChart2, 
    Clipboard 
} from 'lucide-react';

const HowItWorksSection = () => {
    const buyerSteps = [
        {
            icon: <Search size={48} className="text-primary mb-3" />,
            title: "Browse Verified Vendors",
            description: "Explore a curated marketplace of trusted and verified sellers"
        },
        {
            icon: <MessageCircle size={48} className="text-primary mb-3" />,
            title: "Connect via WhatsApp",
            description: "Communicate directly with vendors through a familiar platform"
        },
        {
            icon: <ShieldCheck size={48} className="text-primary mb-3" />,
            title: "Secure Purchase Process",
            description: "Complete transactions with confidence using our secure payment system"
        },
        {
            icon: <Package size={48} className="text-primary mb-3" />,
            title: "Track Orders",
            description: "Monitor your purchase status in real-time with easy tracking"
        }
    ];

    const vendorSteps = [
        {
            icon: <Store size={48} className="text-primary mb-3" />,
            title: "Easy Store Setup",
            description: "Create your online store with just a few clicks, no technical expertise required"
        },
        {
            icon: <Link2 size={48} className="text-primary mb-3" />,
            title: "WhatsApp Integration",
            description: "Seamlessly connect your store to WhatsApp for direct customer communication"
        },
        {
            icon: <Clipboard size={48} className="text-primary mb-3" />,
            title: "Order Management",
            description: "Efficiently manage and process orders from a centralized dashboard"
        },
        {
            icon: <BarChart2 size={48} className="text-primary mb-3" />,
            title: "Comprehensive Analytics",
            description: "Gain insights into your sales, customer behavior, and business performance"
        }
    ];

    const renderSteps = (steps, title, bgColor) => (
        <div className={`col-12 col-lg-6 p-4 ${bgColor}`}>
            <div className="text-center mb-4">
                <h3 className="h4 fw-bold">{title}</h3>
            </div>
            <div className="row g-4">
                {steps.map((step, index) => (
                    <div key={index} className="col-12 col-md-6">
                        <div className="text-center p-3">
                            <div className="mb-3">
                                {step.icon}
                            </div>
                            <h4 className="h5 mb-3">{step.title}</h4>
                            <p className="text-muted">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="how-it-works-section py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-4">How It Works</h2>
                        <p className="lead text-muted">
                            Our platform simplifies WhatsApp commerce for both buyers and vendors
                        </p>
                    </div>
                </div>

                <div className="row g-0 border rounded-3 overflow-hidden">
                    {renderSteps(buyerSteps, "For Buyers", "bg-light")}
                    {renderSteps(vendorSteps, "For Vendors", "bg-white")}
                </div>

                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p className="text-muted">
                            Ready to get started? Join our platform and transform your commerce experience.
                        </p>
                        <div className="d-flex justify-content-center gap-3 mt-4">
                            <button className="btn btn-primary btn-lg">
                                I'm a Buyer
                            </button>
                            <button className="btn btn-outline-primary btn-lg">
                                I'm a Vendor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;