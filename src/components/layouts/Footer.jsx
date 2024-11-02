import React from 'react';
import { Link } from 'react-router-dom';
// import envelope_Image from "/src/assets/images/envelope-outline.svg";
// import sofa_Image from "/src/assets/images/sofa.png";
// import { menuData } from "/src/assets/TestimonialData";

// Font awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer-section">
          {/* <div>
          <div className="container relative">

            <div className="sofa-img">
              <img src="/assets/images/sofa.png" alt="Image" className="img-fluid"/>
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="subscription-form">
                  <h3 className="d-flex align-items-center"><span className="me-1">
                    <img src="/assets/images/envelope-outline.svg"
                        alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span>
                    </h3>

                  <form action="#" className="row g-3">
                    <div className="col-auto">
                      <input type="text" className="form-control" placeholder="Enter your name"/>
                    </div>
                    <div className="col-auto">
                      <input type="email" className="form-control" placeholder="Enter your email"/>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary">
                        <span className="fa fa-paper-plane"></span>
                      </button>
                    </div>
                  </form>

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

            <div className="row g-5 mb-5">
              <div className="col-lg-4">
                <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Vendly<span>.</span></a></div>
                <p className="mb-4">Your ultimate destination for unique products from WhatsApp vendors. Experience quality and convenience in every purchase.</p>

                <ul className="list-unstyled custom-social">
                  <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                  <li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
                  <li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
                  <li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
                </ul>
              </div>

              <div className="col-lg-8">
                <div className="row links-wrap">
                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact us</a></li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Knowledge base</a></li>
                      <li><a href="#">Live chat</a></li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li><a href="#">Jobs</a></li>
                      <li><a href="#">Our team</a></li>
                      <li><a href="#">Leadership</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li><a href="#">Nordic Chair</a></li>
                      <li><a href="#">Kruzo Aero</a></li>
                      <li><a href="#">Ergonomic Chair</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className="border-top copyright">
              <div className="row pt-4">
                <div className="col-lg-6">
                  <p className="mb-2 text-center text-lg-start">Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash;
                    Designed with love by <a
                      hreff="">Developia discord</a>
                  
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
        </div> */}

  
  </footer>

  );
};

export default Footer;