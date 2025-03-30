import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const brands = [
    {
        id: 1,
        image: "https://picsum.photos/id/237/200/300",
        category: "Fashion",
        title: "Urban Streetwear Collection"
    },
    {
        id: 2,
        image: "https://picsum.photos/id/237/200/300",
        category: "Electronics",
        title: "Smart Home Essentials"
    },
    {
        id: 3,
        image: "https://picsum.photos/id/237/200/300",
        category: "Beauty",
        title: "Organic Skincare Line"
    },
    {
        id: 4,
        image: "https://picsum.photos/id/237/200/300",
        category:"pets",
        title: "dog"
    }

    // Add more brands...
];

const NewlyBrands = () => {
    return (
        <section className="brands-section py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="m-0"  style={{fontWeight: 700, fontSize: "2rem"}}>Newly Arrived Brands</h2>
                            <a href="#" className="view-all-link">
                                View All Brands →
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="brands-carousel-container">
                    <div className="brand-navigation">
                        <button className="brand-carousel-prev" aria-label="Previous slide">❮</button>
                        <button className="brand-carousel-next" aria-label="Next slide">❯</button>
                    </div>
                    
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.brand-carousel-prev',
                            nextEl: '.brand-carousel-next',
                        }}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 }
                        }}
                        className="brand-carousel"
                    >
                        {brands.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="brand-card">
                                    <div className="brand-card-inner">
                                        <div className="brand-image-container">
                                            <img
                                                src={brand.image}
                                                className="brand-image"
                                                alt={brand.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="brand-content">
                                            <span className="brand-category">{brand.category}</span>
                                            <h3 className="brand-title">{brand.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default NewlyBrands;