import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./testimonials.css"
import { useEffect } from "react";

// import { testimonialData } from "/assets/TestimonialData";

const Testimonials = () => {


  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch('/assets/TestimonialData.json')
      .then((response) => response.json())
      .then((data) => setTestimonialData(data.testimonialData))
      .catch((error) => console.error('Error loading testimonials:', error));
  }, []);




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
            // navigation={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="testimonial-slider"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>

                <div className="testimonial-slider">
								
								<div className="item">
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;{testimonial.content}&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={testimonial.image} alt="Maria Jones" class="img-fluid w-16 h-16 
                            rounded-full mx-auto object-cover" />
													</div>
													<h3 className="font-weight-bold">{testimonial.name}</h3>
													<span className="position d-block mb-3">{testimonial.position}</span>
												</div>
											</div>

										</div>
									</div>
								</div> 
                </div>

                {/* <div className="px-4 py-8">
                  <div className="testimonial-block text-center">
                    <blockquote className="mb-5">
                      <p className="text-lg italic text-gray-600">
                     &ldquo;{testimonial.content} &rdquo;
                      </p>
                    </blockquote>
                    <div className="author-info">
                      <div className="author-pic mb-4" style={{ marginBottom: '20px'}}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mx-auto object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-xl mb-1">
                        {testimonial.name}
                      </h3>
                      <span className="position d-block mb-3">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>
                </div> */}



              </SwiperSlide>
            ))}

           

            <div className="custom-next"><BsChevronRight size={20}/></div>
            <div className="custom-prev"><BsChevronLeft  size={20} /></div>

          </Swiper>

     
         

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
