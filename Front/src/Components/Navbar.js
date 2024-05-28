import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Features/useSlice";
import { setproducts } from "./Features/dataslice";
import axios from "axios";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    return dispatch(setUser({ data: {}, log: false }));
  };
  const brands = ["Nike", "Adidas", "Puma", "Rebook", "Autres"];
  const log = useSelector((state) => state.user.log.log);
  const role = useSelector((state) => state.user.data?.data?.role);
  console.log(role);
  const [brand, setBrand] = useState(null);
  const handleData = (x) => {
    axios
      .get(`http://localhost:7000/getAllProductsByBrand/${x}`)
      .then((response) => {
        dispatch(setproducts(response.data));
      })
      .catch((err) => console.log(err));
  };
  const filterByBrand = (brand) => {
    setBrand(brand);
    handleData(brand);
    navigate("/productsCategory");
  };
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src="assets/images/logo.png" alt="" />
              </Link>

              <ul className="nav">
                <li className="search-container">
                  <form className="form-search">
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                    <input type="text" placeholder="Rechercher..." />
                  </form>
                </li>

                <li className="scroll-to-section">
                  <Link to="/products">Our collection</Link>
                </li>

                <li className="submenu">
                  <Link to="#">Marques</Link>
                  <ul>
                    {brands.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          filterByBrand(item.toLowerCase());
                        }}
                      >
                        <Link to="">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="submenu">
                  <Link to="">
                    <i className="fa fa-user"></i>
                  </Link>
                  <ul>
                    {!log && (
                      <li>
                        <Link to="/register">Sign Up</Link>
                      </li>
                    )}
                    {!log && (
                      <li>
                        <Link to="/">Sign In</Link>
                      </li>
                    )}
                    {log && (
                      <li>
                        <Link to="#" onClick={handleLogOut}>
                          Log out
                        </Link>
                      </li>
                    )}
                    {log && role === "Admin" && (
                      <li>
                        <Link to="#" onClick={handleLogOut}>
                          admin dashboard
                        </Link>
                      </li>
                    )}
                  </ul>
                </li>
                {log && (
                  <li className="scroll-to-section">
                    <Link to="/myCard">
                      <i className="fa fa-shopping-cart"></i>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
