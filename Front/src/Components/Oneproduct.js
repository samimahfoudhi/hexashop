import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Oneproduct = () => {
  const product = useSelector((state) => state.product.data);
  console.log(product);
  return (
    <div>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Single Product Page</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="left-images">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-content">
                <h4>{product.name}</h4>
                <span className="price">${product.price}</span>

                {/* <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod kon tempor incididunt ut labore.
                </span> */}
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <p>{product.description}</p>
                </div>
                {/* <div className="quantity-content">
                  <div className="left-content">
                    <h6>No. of Orders</h6>
                  </div>
                  <div className="right-content">
                    <div className="quantity buttons_added">
                      <input type="button" value="-" className="minus" />
                      <input
                        type="number"
                        step="1"
                        min="1"
                        max=""
                        name="quantity"
                        value="1"
                        title="Qty"
                        className="input-text qty text"
                        size="4"
                        pattern=""
                        inputmode=""
                      />
                      <input type="button" value="+" className="plus" />
                    </div>
                  </div>
                </div> */}
                <div className="total">
                  {/* <h4>Total: $210.00</h4> */}
                  <div className="main-border-button">
                    <Link to="#">Add To Cart</Link>
                  </div>
                </div>
                <span className="price">size : {product.size}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oneproduct;
