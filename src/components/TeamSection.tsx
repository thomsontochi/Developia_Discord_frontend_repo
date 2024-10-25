import React from 'react';
import person_I from "../assets/images/person_1.jpg";
import person_II from "../assets/images/person_2.jpg";
import person_III from "../assets/images/person_3.jpg";
import person_IV from "../assets/images/person_4.jpg";


interface TeamSectionProps {
    
}

const TeamSection: React.FC<TeamSectionProps> = () => {
    return (
        <div>

		<div className="untree_co-section">
			<div className="container">

				<div className="row mb-5">
					<div className="col-lg-5 mx-auto text-center">
						<h2 className="section-title">Our Team</h2>
					</div>
				</div>

				<div className="row">

				
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_I} className="img-fluid mb-5" />
						<h3><a href="#"><span className="">Lawson</span> Arnold</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
					</div> 
				

					
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_II} className="img-fluid mb-5" />

						<h3><a href="#"><span className="">Jeremy</span> Walker</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

					</div> 
							
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_III} className="img-fluid mb-5" />
						<h3><a href="#"><span className="">Patrik</span> White</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
					</div> 
				

					
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_IV} className="img-fluid mb-5" />

						<h3><a href="#"><span className="">Kathryn</span> Ryan</a></h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>

          
					</div> 
					

					

				</div>
			</div>
		</div>
		

            
        </div>
    );
};

export default TeamSection;