import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch("/assets/TestimonialData.json")
      .then((response) => response.json())
      .then((data) => setTestimonialData(data.testimonialData))
      .catch((error) => console.error("Error loading testimonials:", error));
  }, []);

  // Don't render Swiper if there's no data
  if (testimonialData.length === 0) return null;

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="text-center mb-5">
              <h2 className=""  style={{ fontWeight: 700 , fontSize: "2rem"  }}>Vendly Customers </h2>
              <p className="text-muted">Real feedback from verified buyers</p>
            </div>

            <div className="testimonials-wrapper position-relative">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                loop={testimonialData.length > 1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                }}
                className="testimonial-slider"
              >
                {testimonialData.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-card">
                      <div className="testimonial-content p-4">
                        <div className="author-info mb-4">
                          <div className="d-flex align-items-center">
                            <div className="author-image">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-circle"
                              />
                            </div>
                            <div className="author-details ms-3">
                              <h4 className="mb-0">{testimonial.name}</h4>
                              <span className="text-muted small">
                                {testimonial.position}
                              </span>
                            </div>
                          </div>
                        </div>
                        <blockquote>
                          <p className="mb-0">{testimonial.content}</p>
                        </blockquote>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
