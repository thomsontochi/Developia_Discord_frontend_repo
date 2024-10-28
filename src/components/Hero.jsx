import React from "react";
// import { Link } from 'react-router-dom';
import Counch from "/assets/images/couch.png";

const Hero = () => {
    return (

        // <!-- Start Hero Section -->
		<div className="hero">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<div className="">
							<h1>Empowering WhatsApp Vendors <span className="d-block">with Seamless E-commerce Solutions</span></h1>
							<p className="mb-4">Join Developia Discord, where we connect WhatsApp vendors with customers effortlessly. Our platform provides a user-friendly interface, enabling vendors to showcase their products and manage orders directly through WhatsApp.</p>
							<p><a href="" className="btn btn-secondary me-2">Start Selling Now</a><a href="#" className="btn btn-white-outline">Discover More</a></p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="hero-img-wrap">
							<img src={Counch} className="img-fluid" /> {/* Self-closing tag */}
						</div>
					</div>
				</div>
			</div>
		</div>
	
    );
};

export default Hero;
