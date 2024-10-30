import React, { useEffect, useState }  from 'react';
// import { Link } from 'react-router-dom';
import envelope_Image from "/assets/images/envelope-outline.svg";
import sofa_Image from "/assets/images/sofa.png";



// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';






const Footer = () => {

  const [menuData, setmenuData] = useState([]);

  useEffect(() => {
    fetch('/assets/TestimonialData.json')
      .then((response) => response.json())
      .then((data) => setmenuData(data.menuData))
      .catch((error) => console.error('Error loading testimonials:', error));
  }, []);

 


  return (
       <>
<footer class="footer-section mt-5">
  <div class="container relative">

    <div className="sofa-img mt-2">
      <img src={sofa_Image } alt="Image" className="img-fluid" />
    </div>

    <div class="row">
      <div class="col-lg-8">
        <div class="subscription-form">
          <h3 class="d-flex align-items-center"><span class="me-1">
            <img src={envelope_Image}alt="Image" className="img-fluid" />
            </span><span>Subscribe to Newsletter</span></h3>

          <form action="#" class="row g-3">
            <div className="col-auto">
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="col-auto">
              <input type="email" class="form-control" placeholder="Enter your email" />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">
                <span><FontAwesomeIcon icon={faPaperPlane} /></span>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <div class="row g-5 mb-5">
      <div class="col-lg-4">
        <div class="mb-4 footer-logo-wrap"><a href="#" class="footer-logo">Furni<span>.</span></a></div>
        <p class="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

        <ul class="list-unstyled custom-social">
          <li><a href="#"><span><FontAwesomeIcon icon={faFacebookF} /></span></a></li>
          <li><a href="#"><span ><FontAwesomeIcon icon={faTwitter} /></span></a></li>
          <li><a href="#"><span ><FontAwesomeIcon icon={faInstagram} /></span></a></li>
          <li><a href="#"><span><FontAwesomeIcon icon={faLinkedin} /></span></a></li>
        </ul>
      </div>

      <div className="col-lg-8">
        <div className="row links-wrap">
          
          { menuData.map((data)=>{

          return(
          <div className="col-6 col-sm-6 col-md-3" key={data.id}>
            <ul className="list-unstyled">
              <li><a href="#">{data.listOne}</a></li>
              <li><a href="#">{data.listTwo}</a></li>
              <li><a href="#">{data.listThree}</a></li>
              <li><a href="#">{data.listFour}</a></li>
            </ul>
          </div> )})}
     
        </div>
      </div>

    </div>

    <div class="border-top copyright">
      <div class="row pt-4">
        <div class="col-lg-6">
          <p class="mb-2 text-center text-lg-start">Copyright &copy;All Rights Reserved. &mdash; Designed with love by
             <a href="https://untree.co">Untree.co</a> Distributed By
           <a hreff="https://themewagon.com">Developia Discord</a> 
        </p>
        </div>

        <div className="col-lg-6 text-center text-lg-end">
          <ul className="list-unstyled d-inline-flex ms-auto">
            <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</footer>
</>
  );
};

export default Footer;