import React from "react";
import Testimonials from "../components/Testimonials";
import BlogInfoComponent from "../components/BlogInfoComponent";



const BlogSection= () => {
  return (
    <div>

       <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Blog</h1>
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

    <BlogInfoComponent />

   <Testimonials />
    </div>
  );
};

export default BlogSection;
