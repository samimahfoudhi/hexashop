import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="page-heading about-page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>About Our Company</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src="assets/images/about-left-image.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <h4>About Us &amp; Our Skills</h4>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod kon tempor incididunt ut labore.
                </span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiuski smod kon tempor incididunt ut labore.
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod kon tempor incididunt ut labore et dolore magna
                  aliqua ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip.
                </p>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Amazing Team</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-item">
                <div className="thumb">
                  <div className="hover-effect">
                    <div className="inner-content">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-behance"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img src="assets/images/team-member-01.jpg" alt="" />
                </div>
                <div className="down-content">
                  <h4>Ragnar Lodbrok</h4>
                  <span>Product Caretaker</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-item">
                <div className="thumb">
                  <div className="hover-effect">
                    <div className="inner-content">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-behance"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img src="assets/images/team-member-02.jpg" alt="" />
                </div>
                <div className="down-content">
                  <h4>Ragnar Lodbrok</h4>
                  <span>Product Caretaker</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-item">
                <div className="thumb">
                  <div className="hover-effect">
                    <div className="inner-content">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa fa-behance"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img src="assets/images/team-member-03.jpg" alt="" />
                </div>
                <div className="down-content">
                  <h4>Ragnar Lodbrok</h4>
                  <span>Product Caretaker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Services</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item">
                <h4>Synther Vaporware</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
                  do eiusmod temp incididunt ut labore, et dolore quis ipsum
                  suspend.
                </p>
                <img src="assets/images/service-01.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item">
                <h4>Locavore Squidward</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
                  do eiusmod temp incididunt ut labore, et dolore quis ipsum
                  suspend.
                </p>
                <img src="assets/images/service-02.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item">
                <h4>Health Gothfam</h4>
                <p>
                  Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed
                  do eiusmod temp incididunt ut labore, et dolore quis ipsum
                  suspend.
                </p>
                <img src="assets/images/service-03.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-heading">
                <h2>
                  En vous abonnant à notre site, vous bénéficiez d'avantages
                  exclusifs
                </h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="row">
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email Address"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-2">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-dark-button"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      Store Location:
                      <br />
                      <span>Sunny Isles Beach, FL 33160, United States</span>
                    </li>
                    <li>
                      Phone:
                      <br />
                      <span>010-020-0340</span>
                    </li>
                    <li>
                      Office Location:
                      <br />
                      <span>North Miami Beach</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Work Hours:
                      <br />
                      <span>07:30 AM - 9:30 PM Daily</span>
                    </li>
                    <li>
                      Email:
                      <br />
                      <span>info@company.com</span>
                    </li>
                    <li>
                      Social Media:
                      <br />
                      <span>
                        <Link to="#">Facebook</Link>,
                        <Link to="#">Instagram</Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
