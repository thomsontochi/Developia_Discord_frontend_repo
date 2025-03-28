import React, { useEffect, useState } from "react";

const PopularProduct = () => {
    const [PopularProductData, setPopularProductData] = useState([]);

    useEffect(() => {
        fetch('/assets/PopularProductData.json')
            .then((response) => response.json())
            .then((data) => setPopularProductData(data.PopularProductData))
            .catch((error) => console.error('Error loading testimonials:', error));
    }, []);

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    {/* Start Column 1 - Description */}
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Discover Our Popular Products</h2>
                        <p className="mb-4">Explore our curated collection of unique and high-quality products that our customers love.</p>
                        <p><a href="#" className="btn">View All</a></p>
                    </div>

                    {/* Dynamic Product Columns - First 3 */}
                    {PopularProductData.slice(0, 3).map((product) => (
                        <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="#">
                                <img 
                                    src={product.productImage} 
                                    className="img-fluid product-thumbnail" 
                                    alt={product.productName} 
                                />
                                <h3 className="product-title">{product.productName}</h3>
                                <strong className="product-price">$49.99</strong>

                                <span className="icon-cross">
                                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Cross icon" />
                                </span>
                            </a>
                        </div>
                    ))}

                    {/* Dynamic Product Columns - Next 3 */}
                    {PopularProductData.slice(3, 6).map((product) => (
                        <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="#">
                                <img 
                                    src={product.productImage} 
                                    className="img-fluid product-thumbnail" 
                                    alt={product.productName} 
                                />
                                <h3 className="product-title">{product.productName}</h3>
                                <strong className="product-price">$49.99</strong>

                                <span className="icon-cross">
                                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Cross icon" />
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;