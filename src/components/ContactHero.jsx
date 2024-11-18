import React from "react";

const ContactHero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="">
                            <h1>Contact</h1>
                            <p className="mb-4">Join Developia Discord, where we connect WhatsApp vendors with customers
                                effortlessly. Our platform provides a user-friendly interface, enabling vendors to
                                showcase their products and manage orders directly through WhatsApp.</p>
                            <p>
                                <a href="" className="btn btn-secondary me-2">Start Selling Now</a>
                                <a href="#" className="btn btn-white-outline">Discover More</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img-wrap">
                            <img src="/assets/images/couch.png" className="img-fluid"
                                 alt="E-commerce illustration"/> {/* Self-closing tag */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;