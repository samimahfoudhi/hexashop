import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useSelector } from "react-redux";
const Home = () => {
  const logg = useSelector((state) => state.user.log.log);

  console.log(logg);
  return (
    <div>
      <div className="main-banner" id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <div className="thumb">
                  <div className="inner-content">
                    <h4>We Are Hexashop</h4>

                    <div className="main-border-button">
                      <Link to="">Purchase Now!</Link>
                    </div>
                  </div>
                  <img src="assets/images/left-banner-image.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Women</h4>
                          <span>Best Clothes For Women</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Women</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/images/baner-right-image-01.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Men</h4>
                          <span>Best Clothes For Men</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Men</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/images/baner-right-image-02.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Kids</h4>
                          <span>Best Clothes For Kids</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Kids</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/images/baner-right-image-03.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-first-image">
                      <div className="thumb">
                        <div className="inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>
                        <div className="hover-content">
                          <div className="inner">
                            <h4>Accessories</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div className="main-border-button">
                              <Link to="#">Discover More</Link>
                            </div>
                          </div>
                        </div>
                        <img
                          src="assets/images/baner-right-image-04.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="explore">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-content">
                <h2>Explore Our Products</h2>
                <span>
                  You are allowed to use this HexaShop HTML CSS template. You
                  can feel free to modify or edit this layout. You can convert
                  this template as any kind of ecommerce CMS theme as you wish.
                </span>
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>
                    You are not allowed to redistribute this template ZIP file
                    on any other website.
                  </p>
                </div>
                <p>
                  There are 5 pages included in this HexaShop Template and we
                  are providing it to you for absolutely free of charge at our
                  TemplateMo website. There are web development costs for us.
                </p>
                <p>
                  If this template is beneficial for your website or business,
                  please kindly
                  <Link
                    rel="nofollow"
                    href="https://paypal.me/templatemo"
                    target="_blank"
                  >
                    support us
                  </Link>
                  a little via PayPal. Please also tell your friends about our
                  great website. Thank you.
                </p>
                <div className="main-border-button">
                  <Link to="">Discover More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="leather">
                      <h4>Leather Bags</h4>
                      <span>Latest Collection</span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="first-image">
                      <img src="assets/images/explore-image-01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="second-image">
                      <img src="assets/images/explore-image-02.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="types">
                      <h4>Different Types</h4>
                      <span>Over 304 Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section" id="social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Social Media</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row images">
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Fashion</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="assets/images/instagram-01.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>New</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="assets/images/instagram-02.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Brand</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="assets/images/instagram-03.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Makeup</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="assets/images/instagram-04.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Leather</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="assets/images/instagram-05.jpg" alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Bag</h6>
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <img src="assets/images/instagram-06.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {!logg && (
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
                <section id="login-section">
                  <Login />
                </section>
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
                          <Link to="#">Facebook</Link>,{" "}
                          <Link to="#">Instagram</Link>,
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
