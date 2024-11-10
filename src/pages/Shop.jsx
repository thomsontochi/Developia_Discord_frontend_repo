import ShopHero from "../components/ShopHero";

const Shop = () => {
  const products = [
    {
      productImage: "/assets/images/product-3.png",
      header: "Nodic Chair",
      price: "$50.00",
      iconCross: "/assets/images/cross.svg",
    },
    {
      productImage: "/assets/images/product-1.png",
      header: "Nordic Chair",
      price: "$50.00",
      iconCross: "/assets/images/cross.svg",
    },
    {
      productImage: "/assets/images/product-2.png",
      header: "Kruzo Aero Chair",
      price: "$78.00",
      iconCross: "/assets/images/cross.svg",
    },
    {
      productImage: "/assets/images/product-3.png",
      header: "Ergonomic Chair",
      price: "$43.00",
      iconCross: "/assets/images/cross.svg",
    },

    {
      productImage: "/assets/images/product-3.png",
      header: "Nordic Chair",
      price: "$50.00",
      iconCross: "/assets/images/cross.svg",
    },

    {
      productImage: "/assets/images/product-1.png",
      header: "Ergonomic Chair",
      price: "$43.00",
      iconCross: "/assets/images/cross.svg",
    },
    {
      productImage: "/assets/images/product-2.png",
      header: "Ergonomic Chair",
      price: "$43.00",
      iconCross: "/assets/images/cross.svg",
    },
    {
      productImage: "/assets/images/product-3.png",
      header: "Ergonomic Chair",
      price: "$43.00",
      iconCross: "/assets/images/cross.svg",
    },
  ];
  return (
    <>
      <div className="site-wrap">
        <ShopHero />
        <div className="product-section">
          <div className="container">
            <div className="row">
              {products.map((product, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
                  <a className="product-item" href="cart.html">
                    <img
                      src={product.productImage}
                      alt="product"
                      className="img-fluid product-thumbnail"
                    />
                    <h3 className="product-title">{product.header}</h3>
                    <strong className="product-price">{product.price}</strong>

                    <span className="icon-cross">
                      <img src={product.iconCross} className="img-fluid" />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
