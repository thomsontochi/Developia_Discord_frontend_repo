import React from "react";
import { Link } from 'react-router-dom';

const Product = () => {
    return (

        <div className="product-section">
            <div className="container">
                <div className="row">

                    {/* <!-- Start Column 1 --> */}
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Shop Unique Products from WhatsApp Vendors</h2>
                        <p className="mb-4">Explore high-quality, handcrafted items directly from talented vendors. Enjoy a seamless shopping experience through WhatsApp.</p>
                        <p><a href="shop.html" className="btn">Explore Now</a></p>
                    </div>
                    {/* <!-- End Column 1 --> */}

                    {/* <!-- Start Column 2 --> */}
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
                           
                            <img src="/assets/images/product-1.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Nordic Chair</h3>
                            <strong className="product-price">$50.00</strong>

                            <span className="icon-cross">
                                <img src="/assets/images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>
                    {/* <!-- End Column 2 --> */}

                    {/* <!-- Start Column 3 --> */}
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
                            <img src="/assets/images/product-2.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kruzo Aero Chair</h3>
                            <strong className="product-price">$78.00</strong>

                            <span className="icon-cross">
                                <img src="/assets/images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>
                    {/* <!-- End Column 3 --> */}

                    {/* <!-- Start Column 4 --> */}
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
                            <img src="/assets/images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Ergonomic Chair</h3>
                            <strong className="product-price">$43.00</strong>

                            <span className="icon-cross">
                                <img src="/assets/images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div>
                    {/* <!-- End Column 4 --> */}

                </div>
            </div>
	    </div>
	
    );
};

export default Product;
