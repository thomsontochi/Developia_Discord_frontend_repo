import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css"

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch('/assets/TestimonialData.json')
      .then((response) => response.json())
      .then((data) => setTestimonialData(data.testimonialData))
      .catch((error) => console.error('Error loading testimonials:', error));
  }, []);

  // Don't render Swiper if there's no data
  if (testimonialData.length === 0) return null;

  return (
    <section className="testimonial-section py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            loop={testimonialData.length > 1} // Only enable loop if more than 1 slide
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="testimonial-slider"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-block text-center">
                  <blockquote className="mb-5">
                    <p className="text-break">
                      &ldquo; {testimonial.content} 
                      &rdquo;</p>
                  </blockquote>
                  <div className="author-info">
                    <div className="author-pic">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="img-fluid w-16 h-16 rounded-full mx-auto object-cover" 
                      />
                    </div>
                    <h3 className="font-weight-bold">{testimonial.name}</h3>
                    <span className="position d-block mb-3">{testimonial.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          <div className="custom-prev"><span className="fa fa-chevron-left"></span></div>
          <div className="custom-next"><span className="fa fa-chevron-right"></span></div>
          </Swiper>
          
        
        </div>
      </div>
    </section>
  );
};

export default Testimonials;