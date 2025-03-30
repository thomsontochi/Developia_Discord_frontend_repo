import React, { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/assets/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data.categories))
            .catch(error => console.error('Error loading categories:', error));
    }, []);

    return (
        <section className="categories">
            <div className="container">
                <div className="section-header">
                    <h2>🛍️ Shop by Category</h2>
                    <a href="#" className="view-all">View All →</a>
                </div>
                <div className="category-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <img src={category.icon} alt={category.name} />
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
