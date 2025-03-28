import React, { useEffect, useState } from "react";

const Footer = () => {
  const [menuData, setMenuData] = useState([
    {
      id: 1,
      title: "Shop",
      listOne: "Browse Products",
      listTwo: "Featured Vendors",
      listThree: "Categories",
      listFour: "New Arrivals"
    },
    {
      id: 2,
      title: "Sell",
      listOne: "Become a Vendor",
      listTwo: "Vendor Guidelines",
      listThree: "Success Stories",
      listFour: "Vendor Support"
    },
    {
      id: 3,
      title: "Support",
      listOne: "Help Center",
      listTwo: "Buyer Protection",
      listThree: "Contact Us",
      listFour: "Report an Issue"
    },
    {
      id: 4,
      title: "Company",
      listOne: "About Us",
      listTwo: "Our Mission",
      listThree: "Careers",
      listFour: "Press & Media"
    }
  ]);

  return (
    <>
      <footer className="footer-section">
        <div className="container relative">
          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img
                      src="/assets/images/envelope-outline.svg"
                      alt="Newsletter"
                      className="img-fluid"
                    />
                  </span>
                  <span>Get Vendor Updates & Offers</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <a href="#" className="footer-logo">
                  Vendly<span>.</span>
                </a>
              </div>
              <p className="mb-4">
                Join Vendly, the trusted marketplace connecting WhatsApp vendors with customers. 
                Discover unique products, chat directly with verified sellers, and shop with 
                confidence in our secure platform.
              </p>

              <ul className="list-unstyled custom-social">
                <li>
                  <a href="#" aria-label="Follow us on Facebook">
                    <span className="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Follow us on Twitter">
                    <span className="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Follow us on Instagram">
                    <span className="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Follow us on LinkedIn">
                    <span className="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                {menuData.map((data) => (
                  <div className="col-6 col-sm-6 col-md-3" key={data.id}>
                    <h3 className="footer-heading mb-3">{data.title}</h3>
                    <ul className="list-unstyled">
                      <li><a href="#">{data.listOne}</a></li>
                      <li><a href="#">{data.listTwo}</a></li>
                      <li><a href="#">{data.listThree}</a></li>
                      <li><a href="#">{data.listFour}</a></li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;{new Date().getFullYear()} Vendly. 
                  All Rights Reserved. &mdash; Building the future of WhatsApp commerce
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
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