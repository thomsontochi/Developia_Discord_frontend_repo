import React, { useState } from 'react';

const products = [
  {
    id: 1,
    image: "/assets/images/product-1.png",
    name: "Nordic Chair",
    price: "$50.00",
    vendor: "John's Furniture",
  },
  {
    id: 2,
    image: "/assets/images/product-2.png",
    name: "Kruzo Aero Chair",
    price: "$78.00",
    vendor: "Elegant Homes",
  },
  {
    id: 3,
    image: "/assets/images/product-3.png",
    name: "Ergonomic Chair",
    price: "$43.00",
    vendor: "Comfy Seats",
  },
];

const ProductGrid = () => {
  const [view, setView] = useState('grid');

  return (
    <div className="container-fluid p-4">
      <div className="row mb-4 align-items-center">
        <div className="col">
          <h2 className="m-0">All Products</h2>
        </div>
        {/* <div className="col-auto">
          <div className="btn-group" role="group">
            <button 
              type="button" 
              className={`btn ${view === 'grid' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setView('grid')}
            >
              Grid
            </button>
            <button 
              type="button" 
              className={`btn ${view === 'list' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setView('list')}
            >
              List
            </button>
          </div>
        </div> */}
      </div>

      <div className={`row ${view === 'grid' ? 'row-cols-1 row-cols-md-3 g-4' : 'row-cols-1'}`}>
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className={`card h-100 ${view === 'list' ? 'd-flex flex-row' : ''}`}>
              <div className={`${view === 'grid' ? 'card-img-top' : 'card-img-left'}`} style={{
                height: view === 'grid' ? '250px' : '200px',
                width: view === 'list' ? '200px' : 'auto',
                objectFit: 'cover'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.vendor}</p>
                <p className="card-text fw-bold">{product.price}</p>
                <div className={`d-grid ${view === 'list' ? 'gap-2 d-md-flex' : 'gap-2'}`}>
                  <button className="btn btn-success" type="button">Chat</button>
                  <button className="btn btn-dark" type="button">Save</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;