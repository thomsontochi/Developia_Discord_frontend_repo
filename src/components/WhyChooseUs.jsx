import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <h2 className="section-title">Why Choose Vendly</h2>
                            <p>Connect with trusted WhatsApp vendors in one place. Shop securely and conveniently from verified local businesses.</p>

                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="/assets/images/truck.svg" alt="Verified" className="imf-fluid" />
                                        </div>
                                        <h3>Verified Vendors</h3>
                                        <p>Every vendor is thoroughly verified to ensure you're dealing with legitimate businesses.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="/assets/images/bag.svg" alt="WhatsApp" className="imf-fluid" />
                                        </div>
                                        <h3>Direct WhatsApp Chat</h3>
                                        <p>Connect directly with vendors through WhatsApp for seamless communication.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="/assets/images/support.svg" alt="Support" className="imf-fluid" />
                                        </div>
                                        <h3>Secure Transactions</h3>
                                        <p>Shop with confidence knowing your transactions are protected and secure.</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="/assets/images/return.svg" alt="Community" className="imf-fluid" />
                                        </div>
                                        <h3>Trusted Community</h3>
                                        <p>Join a growing community of verified vendors and satisfied customers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src="/assets/images/vendly2.jpg" alt="Vendly Shopping Experience" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;