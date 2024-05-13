import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="first-item">
              <div className="logo">
                <img
                  src="assets/images/white-logo.png"
                  alt="hexashop ecommerce templatemo"
                />
              </div>
              <ul>
                <li>
                  <Link to="#">
                    16501 Collins Ave, Sunny Isles Beach, FL 33160, United
                    States
                  </Link>
                </li>
                <li>
                  <Link to="#">hexashop@company.com</Link>
                </li>
                <li>
                  <Link to="#">010-020-0340</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Shopping &amp; Categories</h4>
            <ul>
              <li>
                <Link to="#">Men's Shopping</Link>
              </li>
              <li>
                <Link to="#">Women's Shopping</Link>
              </li>
              <li>
                <Link to="#">Kid's Shopping</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link to="#">Homepage</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>

              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Help &amp; Information</h4>
            <ul>
              <li>
                <Link to="#">Help</Link>
              </li>
              <li>
                <Link to="#">FAQ's</Link>
              </li>
              <li>
                <Link to="#">Shipping</Link>
              </li>
              <li>
                <Link to="#">Tracking ID</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="under-footer">
              <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.</p>
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
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
