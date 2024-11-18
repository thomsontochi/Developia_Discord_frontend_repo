import React from 'react';
import Post_1 from "/assets/images/post-1.jpg";
import Post_2 from "/assets/images/post-2.jpg";
import Post_3 from "/assets/images/post-3.jpg";

const RecentBlog = () => {
    return (
        <div className='pb-5'>
          
		<div className="blog-section mb-4">
			<div className="container">
				<div class="row mb-5">
					<div className="col-md-6">
						<h2 class="section-title">Recent Blog</h2>
					</div>
					<div className="col-md-6 text-start text-md-end">
						<a href="#" className="more">View All Posts</a>
					</div>
				</div>

				<div className="row">

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" class="post-thumbnail">
                                <img src={Post_1} alt="Image" className="img-fluid" /></a>
							<div class="post-content-entry">
								<h3><a href="#">First Time Home Owner Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry" >
							<a href="#" class="post-thumbnail" >
                                <img src={Post_2} alt="Image" class="img-fluid" /></a>
							<div class="post-content-entry">
								<h3><a href="#">How To Keep Your Furniture Clean </a></h3>
								<div className="meta">
									<span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
						<div className="post-entry">
							<a href="#" className="post-thumbnail">
                                <img src={Post_3} alt="Image" class="img-fluid" /></a>
							<div className="post-content-entry">
								<h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
								<div className="meta">
									<span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	 
        </div>
    );
};



export default RecentBlog;