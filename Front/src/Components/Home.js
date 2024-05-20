import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setproducts } from "./Features/dataslice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categ, setCategory] = useState(null);
  const logg = useSelector((state) => state.user.log.log);
  console.log(categ);
  const handleData = (x) => {
    axios
      .get(`http://localhost:7000/getAllProductByCategory/${x}`)
      .then((response) => {
        console.log(response.data);
        dispatch(setproducts(response.data));
      })
      .catch((err) => console.log(err));
  };
  const handleFilter = (category) => {
    setCategory(category);
    handleData(category);
    navigate("/productsCategory");
  };

  const categories = [
    {
      name: "Women",
      description: "Best Clothes For Women",
      imgSrc: "assets/images/baner-right-image-01.jpg",
    },
    {
      name: "Men",
      description: "Best Clothes For Men",
      imgSrc: "assets/images/baner-right-image-02.jpg",
    },
    {
      name: "Kids",
      description: "Best Clothes For Kids",
      imgSrc: "assets/images/baner-right-image-03.jpg",
    },
    {
      name: "Accessories",
      description: "Best Trend Accessories",
      imgSrc: "assets/images/baner-right-image-04.jpg",
    },
  ];

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
                      <Link to="/products">Purchase Now!</Link>
                    </div>
                  </div>
                  <img src="assets/images/left-banner-image.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  {categories.map((category, index) => (
                    <div className="col-lg-6" key={index}>
                      <div className="right-first-image">
                        <div className="thumb">
                          <div className="inner-content">
                            <h4>{category.name}</h4>
                            <span>{category.description}</span>
                          </div>
                          <div className="hover-content">
                            <div className="inner">
                              <h4>{category.name}</h4>
                              <p>{category.description}</p>
                              <div
                                className="main-border-button"
                                onClick={() =>
                                  handleFilter(
                                    category.name.toLocaleLowerCase()
                                  )
                                }
                              >
                                <Link to="#">Discover More</Link>
                              </div>
                            </div>
                          </div>
                          <img src={category.imgSrc} alt="" />
                        </div>
                      </div>
                    </div>
                  ))}
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
                  <Link to="#">Discover More</Link>
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
