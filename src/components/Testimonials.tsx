// import React from 'react';
import React, { useEffect } from 'react';
import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css";
import {testimonialsData} from "../assets/TestimonialData"




import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";


interface TestimonialsProps {
    
}



const Testimonials: React.FC<TestimonialsProps> = () => {


          
	useEffect(() => {
		const slider = tns({
		   container: '.testimonial-slider',
		   items: 1,
		   slideBy: 'page',
		   autoplay: true,
		   autoplayButtonOutput: false,
		   controls: true,
		   nav: true,
		   prevButton: '.prev',
		   nextButton: '.next',
		});
	 
		return () => slider.destroy(); // Clean up on component unmount
	 }, []);


    return (
        <div>
             
			
		<div className="testimonial-section ">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">

							<div id="testimonial-nav">
								<span className="prev" data-controls="prev">
									<span ><BsChevronLeft  size={20}/>
										</span></span>
								<span className="next" data-controls="next"><span><BsChevronRight  size={20}/></span></span>
							</div>

							<div className="testimonial-slider">
							{ testimonialsData.map((info)=>{
								return(

									<div className="item" key={info.id}>
									<div className="row justify-content-center">
										<div className="col-lg-8 mx-auto">

											<div className="testimonial-block text-center">
												<blockquote className="mb-5">
													<p>&ldquo;{info.quote}&rdquo;</p>
												</blockquote>

												<div className="author-info">
													<div className="author-pic">
														<img src={info.image} alt="Maria Jones" className="img-fluid" />
													</div>
													<h3 className="font-weight-bold">{info.name}</h3>
													<span className="position d-block mb-3">{info.designation}</span>
												</div>
											</div>

										</div>
									</div>
								</div>)

							})
								  }{/* {item one  ends here} */}
													

							</div>   {/*testimonials ends here*/} 
							

						</div>
					</div>
				</div>
			</div>
		</div>
	


        </div>
    );
};

export default Testimonials;