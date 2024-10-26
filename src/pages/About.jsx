import React from 'react';
import couch from "/src/assets/images/couch.png";
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';




const About = () => {
    return (
             <>
        <div>

         {/* !-- Start Hero Section --> */}
			<div className="hero" >
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>About Us</h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src={couch} class="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>

             { /* <!-- End Hero Section --> */ }
        
              <WhyChooseUs />
			 <TeamSection />
			 <Testimonials />
			 {/* <Testimonials /> /* the tstimaonial component is in progress   */ }
         </div>
		</>
    )
};



export default About;