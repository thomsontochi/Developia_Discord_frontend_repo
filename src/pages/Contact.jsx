import Header from "../components/layouts/Header.jsx";
import Footer from "../components/layouts/Footer.jsx";
import React from "react";
import ContactHero from "../components/ContactHero.jsx";
import './contact.css'

const Contact = () => {
    return (
        <>
            <div className="site-wrap">
                <Header/>
                <ContactHero/>
                <div
                    className={"container mx-auto col-7 my-5 "}>

                    <section className={"d-flex  justify-content-between align-items-center"}>

                        <div>
                            <i className={"icon me-3"}>icon</i>
                            <span className={"contact-address"}>43 Raymouth Rd. Baltemoer, London 3910</span>
                        </div>
                        <div>
                            <i className={"icon me-3"}>icon</i>
                            <span>info@yourdomain.com</span>
                        </div>
                        <div>
                            <i className={"icon me-3"}>icon</i>
                            <span>+1 294 3925 3939</span>
                        </div>
                    </section>


                    <div className="row row-cols-2 g-2">
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>

                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>

                        <div className="w-100">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                        <div className="w-100">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                          rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    );
};

export default Contact;