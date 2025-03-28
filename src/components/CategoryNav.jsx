import React from "react";

const categories = [
  { name: "All", icon: "bi-grid", count: 120 },
  { name: "Chairs", icon: "bi-chair", count: 32 },
  { name: "Tables", icon: "bi-table", count: 18 },
  { name: "Sofas", icon: "bi-couch", count: 25 },
  { name: "Beds", icon: "bi-hospital-bed", count: 15 },
  { name: "Lamps", icon: "bi-lightbulb", count: 10 },
  { name: "Storage", icon: "bi-box-seam", count: 20 },
  { name: "Decor", icon: "bi-brush", count: 8 },
];

const CategoryNav = () => {
  return (
    <div className="bg-white py-3 shadow-sm">
      <div className="container">
        <div className="d-flex overflow-auto gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="btn btn-light d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
            >
              <i className={`bi ${category.icon}`}></i>
              <span>{category.name}</span>
              <span className="badge bg-primary">{category.count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
