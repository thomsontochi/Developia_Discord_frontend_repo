import React from "react";

const featuredProducts = [
  {
    id: 1,
    image: "/assets/images/product-1.png",
    name: "Nordic Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.",
  },
  {
    id: 2,
    image: "/assets/images/product-2.png",
    name: "Kruzo Aero Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.",
  },
  {
    id: 3,
    image: "/assets/images/product-3.png",
    name: "Ergonomic Chair",
    description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio.",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="popular-product py-4">
      <div className="container">
        <h3 className="fw-bold mb-3">🔥 Trending Products</h3>
        <div className="row">
          {featuredProducts.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="product-item-sm d-flex align-items-center">
                <div className="thumbnail flex-shrink-0 me-3">
                  <img src={product.image} alt={product.name} className="img-fluid rounded" />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">{product.name}</h5>
                  <p className="text-muted small mb-1">{product.description}</p>
                  <p>
                    <a href="#" className="text-primary fw-bold small">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
