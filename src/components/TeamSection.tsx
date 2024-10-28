import React from 'react';
// import person_I from "/assets/images/person_1.jpg";
// import person_II from "/assets/images/person_2.jpg";
// import person_III from "/assets/images/person_3.jpg";
// import person_IV from "/assets/images/person_4.jpg";

import { teamSectionData } from '../../public/assets/TestimonialData';

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
					 { teamSectionData.map((tdata)=>{

					     return(
				
					<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0" key={tdata.id}>
			<img src={tdata.image} className="img-fluid mb-5" />
			<h3><a href="#"><span className="">{tdata.firstName} </span>{tdata.lastName}</a></h3>
            <span className="d-block position mb-4">{tdata.designation}</span>
            <p>{tdata.bioData}</p>
            <p className="mb-0"><a href="#" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
					</div> 
				)})	}
				{/*first column ends here*/}

				</div>
			</div>
		</div>
		

            
        </div>
    );
};

export default TeamSection;