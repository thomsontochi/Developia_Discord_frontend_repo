import React from "react";


import {BlogInfoComponentData} from "../assets/TestimonialData"

interface BlogInfoComponentProps {}

const BlogInfoComponent: React.FC<BlogInfoComponentProps> = () => {
  return (
    <div>
      <div className="blog-section">
        <div className="container">
          <div className="row">

            {  BlogInfoComponentData.map((blog)=>{

                   return(
       
            <div className="col-12 col-sm-6 col-md-4 mb-5" key={blog.id}>
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={blog.image} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">{blog.postContentEntry}</a>
                  </h3>
                  <div className="meta">
                    <span>
                      by <a href="#">{blog.name}</a>
                    </span>
                    <span>
                      on <a href="#">{blog.date}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>     ) })}
            {/* post-entry ends here*/}

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfoComponent;
