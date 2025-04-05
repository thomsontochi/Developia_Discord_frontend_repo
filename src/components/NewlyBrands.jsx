// Imports remain the same
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


// Data remains the same (or adapt if needed)
const brands = [
    // ... (same brand data as before)
     {
        id: 1,
        image: "/assets/images/product-1.png",
        category: "Fashion", // Keep data field name
        title: "Urban Streetwear",
        alt: "Urban Streetwear Brand",
     },
     {
        id: 2,
        image: "/assets/images/product-1.png",
        category: "Electronics", // Keep data field name
        title: "Smart Home",
        alt: "Smart Home Brand",
     },
     {
        id: 3,
        image: "/assets/images/product-1.png",
        category: "Electronics", // Keep data field name
        title: "Smart Home",
        alt: "Smart Home Brand",
     },
     {
        id: 4,
        image: "/assets/images/product-1.png",
        category: "Electronics", // Keep data field name
        title: "Smart Home",
        alt: "Smart Home Brand",
     },
     {
        id: 5,
        image: "/assets/images/product-1.png",
        category: "Electronics", // Keep data field name
        title: "Smart Home",
        alt: "Smart Home Brand",
     },
     {
        id: 6,
        image: "/assets/images/product-1.png",
        category: "Electronics", // Keep data field name
        title: "Smart Home",
        alt: "Smart Home Brand",
     },
];

// font-weight: 700;
// font-size: 2rem;

const NewlyBrandsStyle2 = () => {
  return (
    // Section with background color
    <section className="brands-section-style2">
      <div className="container">
        {/* Section Header - Title left, Button right */}
        <div className="section-header">
          <h2 className="" style={{ fontWeight: 700 , fontSize: "2rem"  }}>Newly Added Brands</h2>
          {/* Styled link/button */}
          <a href="#" className="view-all-button">
            View all
          </a>
        </div>

        {/* Carousel Wrapper (optional but good for nav positioning) */}
        <div className="brands-carousel-wrapper">
          <Swiper
             // Swiper props remain largely the same
             modules={[Navigation]}
             spaceBetween={24}
             slidesPerView={1.5}
             navigation={{
               prevEl: ".brand-carousel-prev-s2", // Use unique selectors if needed
               nextEl: ".brand-carousel-next-s2",
             }}
             breakpoints={{
               576: { slidesPerView: 2 },
               768: { slidesPerView: 3 }, // Show 3 like the example screenshot
               992: { slidesPerView: 3 },
               1200: { slidesPerView: 3 }, // Keep 3 for larger screens if that's the target look
             }}
             className="brand-carousel"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                {/* Card with new styling classes */}
                <div className="brand-card-s2">
                  <div className="brand-image-container-s2">
                    <img
                      src={brand.image}
                      className="brand-image-s2"
                      alt={brand.alt || brand.title}
                      loading="lazy"
                    />
                  </div>
                  {/* Content area with its own background */}
                  <div className="brand-content-s2">
                    {/* Title */}
                    <h3 className="brand-title-s2">{brand.title}</h3>
                    {/* Meta info (using category data) */}
                    <span className="brand-meta-s2">{brand.category}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Optional: Navigation Buttons - Style appropriately or hide if not desired */}
           <button
            className="swiper-nav-button-s2 brand-carousel-prev-s2"
            aria-label="Previous Brands"
           >
             {/* SVG Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
           </button>
           <button
            className="swiper-nav-button-s2 brand-carousel-next-s2"
            aria-label="Next Brands"
           >
             {/* SVG Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
           </button>
        </div>
      </div>
    </section>
  );
};

export default NewlyBrandsStyle2;