import React, {useEffect, useState} from 'react';
import Testimonials from '../components/Testimonials';
import Product from '../components/Product';


const ServicePage = () => {
    
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
      fetch('/assets/TestimonialData.json')
        .then((response) => response.json())
        .then((data) => setServicesData(data.ServicesWeOffer))
        .catch((error) => console.error('Error loading testimonials:', error));
    }, []);

     return(
        <div>
              <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Services</h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="/assets/images/couch.png" class="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>

                {/* our List of services we do offer */}

                <div className="why-choose-section">
			    <div className="container">

				<div className="row my-5">

                     {
                        servicesData.map((services)=>{
                            return(
					<div className="col-6 col-md-6 col-lg-3" key={services.id}>
						<div className="feature">
							<div className="icon">
								<img src={services.ServicesLogo} alt="Image" class="imf-fluid" />
							</div>
							<h3>{services.typeOfServices}</h3>
							<p>{services.descriptionOfServieces}</p>
						</div>
					</div>
                            ) }) }

				</div>
			
			</div>
		</div>
         {/* our List of services we do offer end here*/}
		



            {/* //product section for service page  */}
            <Product />

            <Testimonials />


        </div>
    );
};



export default ServicePage;