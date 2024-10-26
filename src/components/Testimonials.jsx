import React from "react";
import { useEffect, useRef } from 'react';
import { tns } from "tiny-slider";
import 'tiny-slider/dist/tiny-slider.css';
import './testimonials.css'// Make sure to create this CSS file

const Testimonials = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            const slider = tns({
                container: sliderRef.current,
                items: 1,
                slideBy: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayButtonOutput: false,
                nav: true,
                navPosition: "bottom",
                controls: true,
                speed: 400,
                mouseDrag: true,
                controlsContainer: "#testimonial-nav"
            });
        }
    }, []);

    const testimonials = [
        {
            id: 1,
            text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
            name: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: "/assets/images/person-1.png"
        },
        {
            id: 2,
            text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
            name: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: "/assets/images/person-1.png"
        },
        {
            id: 3,
            text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
            name: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: "/assets/images/person-1.png"
        }
    ];

    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center mb-5">
                        <h2 className="section-title">Testimonials</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonial-slider-wrap">
                            <div className="testimonial-slider" ref={sliderRef}>
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="item">
                                        <div className="testimonial-block text-center">
                                            <blockquote className="mb-5">
                                                <p>&ldquo;{testimonial.text}&rdquo;</p>
                                            </blockquote>

                                            <div className="author-info">
                                                <div className="author-pic">
                                                    <img src={testimonial.image} alt={testimonial.name} />
                                                </div>
                                                <h3 className="font-weight-bold">{testimonial.name}</h3>
                                                <span className="position d-block mb-3">{testimonial.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div id="testimonial-nav" className="custom-nav">
                                <button className="prev">
                                    <span className="icon-keyboard_arrow_left"></span>
                                </button>
                                <button className="next">
                                    <span className="icon-keyboard_arrow_right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;