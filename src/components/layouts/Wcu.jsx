import React from "react";

const Wcu = () => {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p>At Developia Discord, we empower WhatsApp vendors to thrive in the eCommerce space. Our platform is designed to facilitate seamless transactions and enhance customer engagement.</p>

                        <div className="row my-5">
                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="/assets/images/truck.svg" alt="Image" className="imf-fluid"/>
                                    </div>
                                    <h3>Fast &amp; Reliable Delivery</h3>
                                    <p>We ensure prompt delivery of products, so you can enjoy your purchases without delay.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="/assets/images/bag.svg" alt="Image" className="imf-fluid"/>
                                    </div>
                                    <h3>Easy Shopping Experience</h3>
                                    <p>Our user-friendly interface makes it simple to browse and purchase products directly through WhatsApp.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="/assets/images/support.svg" alt="Image" className="imf-fluid"/>
                                    </div>
                                    <h3>24/7 Customer Support</h3>
                                    <p>Our dedicated support team is available around the clock to assist you with any inquiries.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="/assets/images/return.svg" alt="Image" className="imf-fluid"/>
                                    </div>
                                    <h3>Hassle-Free Returns</h3>
                                    <p>If you're not satisfied, our easy return policy ensures a smooth process for returns and exchanges.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img src="/assets/images/why-choose-us-img.jpg" alt="Image" className="img-fluid"/>
                        </div>
                    </div>

                </div>
            </div>
	    </div>
    );
};

export default Wcu
