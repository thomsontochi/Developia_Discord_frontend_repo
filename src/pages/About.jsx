import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';
import MissionSection from '../components/MissionSection';
import HowItWorksSection from '../components/HowItWorksSection';

const About = () => {
    return (
        <>
            <div>
                <div className="hero">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-5">
                                <div className="intro-excerpt">
                                    <h1>About Vendly</h1>
                                    <p className="mb-4">Transforming WhatsApp commerce through a secure, verified marketplace that connects trusted vendors with customers.</p>
                                    <p>
                                        <a href="/shop" className="btn btn-secondary me-2">Explore Shops</a>
                                        <a href="/auth/vendor/register" className="btn btn-white-outline">Become a Vendor</a>
                                    </p>
                                </div>
                            </div>
                            {/* <div className="col-lg-7">
                                <div className="hero-img-wrap">
                                    <img src="assets/images/vendly.jpg" className="img-fluid" alt="Vendly Marketplace" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <MissionSection/>
                <WhyChooseUs />
                <HowItWorksSection/>
                <TeamSection />
                {/* <Testimonials /> */}
            </div>
        </>
    )
};

export default About;