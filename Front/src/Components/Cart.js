import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Cart = () => {
  const [data, setData] = useState([]);
  const idUser = useSelector((state) => state.user.data?.data?.id);
  const total = data.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  useEffect(() => {
    axios
      .get(`http://localhost:7000/getAllProductByClient/${idUser}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, [idUser]);

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title-cart">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {data.length}
              </div>
            </div>
          </div>
          {data.map((item) => (
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img className="img-fluid" src={item.image} alt="" />
                </div>
                <div className="col">
                  <div className="row text-muted">{item.name}</div>
                  <div className="row">{item.description}</div>
                </div>
                <div className="col">
                  <Link to="#">-</Link>
                  <Link to="#" className="border">
                    1
                  </Link>
                  <Link to="#">+</Link>
                </div>
                <div className="col">
                  &euro;{item.price} <span className="close">&#10005;</span>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src="https://i.imgur.com/ba3tvGm.jpg"
                  alt=""
                />
              </div>
              <div className="col">
                <div className="row text-muted">Shirt</div>
                <div className="row">Cotton T-shirt</div>
              </div>
              <div className="col">
                <Link to="#">-</Link>
                <Link to="#" className="border">
                  1
                </Link>
                <Link href="#">+</Link>
              </div>
              <div className="col">
                &euro; 44.00 <span className="close">&#10005;</span>
              </div>
            </div>
          </div>
          <div className="row border-top border-bottom">
            <div className="row main align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid"
                  src="https://i.imgur.com/pHQ3xT3.jpg"
                  alt=""
                />
              </div>
              <div className="col">
                <div className="row text-muted">Shirt</div>
                <div className="row">Cotton T-shirt</div>
              </div>
              <div className="col">
                <Link to="#">-</Link>
                <Link href="#" className="border">
                  1
                </Link>
                <Link to="#">+</Link>
              </div>
              <div className="col">
                &euro; 44.00 <span className="close">&#10005;</span>
              </div>
            </div>
          </div> */}
          <div className="back-to-shop">
            <Link to="/">
              <span className="text-muted">Back to shop</span>
            </Link>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: "0" }}>
              ITEMS 3
            </div>
            <div className="col text-right">&euro;{total} </div>
          </div>
          <form className="form-cart">
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">
                Standard-Delivery- &euro;5.00
              </option>
            </select>
            <p>GIVE CODE</p>
            <input
              className="input-cart"
              id="code"
              placeholder="Enter your code"
            />
          </form>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">&euro; {total + 5}</div>
          </div>
          <button className="btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
