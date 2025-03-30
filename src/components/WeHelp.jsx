import React from 'react';


const WeHelp = () => {
    return (
        <div>
            
            
		<div className="we-help-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-7 mb-5 mb-lg-0">
						<div className="imgs-grid">
							<div className="grid grid-1"><img src="/assets/images/img1.png" alt="Untree.co" /></div>
							<div className="grid grid-2"><img src="/assets/images/img2.png" alt="Untree.co" /></div>
							{/* <div className="grid grid-3"><img src="/assets/images/img3.png" alt="Untree.co" /></div> */}
						</div>
					</div>
					<div className="col-lg-5 ps-lg-5">
						<h2 className="section-title mb-4">How Vendly Work</h2>
						<p>Shop confidently from verified WhatsApp vendors in just a few simple steps. Our platform makes buying from local businesses easy and secure.</p>
						<ul className="list-unstyled custom-list my-4">
                            <li>Browse and discover verified WhatsApp vendors</li>
                            <li>Connect directly through WhatsApp chat</li>
                            <li>Complete secure transactions with vendors</li>
                            <li>Track orders and manage your shopping</li>
                        </ul>
						<p><a href="/vendors" className="btn">Find Vendors</a></p>
					</div>
				</div>
			</div>
		</div>
        </div>
    );
};



export default WeHelp;