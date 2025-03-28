import React from "react";

const categories = [
  { name: "All Products", icon: "bi-grid", count: 120 },
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
    <div className="bg-white p-3 shadow-sm rounded">
      <h5 className="fw-bold mb-3">Categories</h5>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <i className={`bi ${category.icon} me-2 text-primary`}></i>
              {category.name}
            </div>
            <span className="badge bg-primary">{category.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
