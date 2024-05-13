import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./Features/useSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    return dispatch(setUser({ data: {}, log: false }));
  };
  const log = useSelector((state) => state.user.log.log);
  const role = useSelector((state) => state.user.data.data.role);
  console.log(log);
  console.log(role);
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
                {/* <li className="scroll-to-section">
                  <Link to="/products">Women's</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="/products">Kid's</Link>
                </li> */}
                <li className="submenu">
                  <Link to="#">Marques</Link>
                  <ul>
                    <li>
                      <Link to="">Nike</Link>
                    </li>
                    <li>
                      <Link to="">Adidas</Link>
                    </li>
                    <li>
                      <Link to="">Puma</Link>
                    </li>
                    <li>
                      <Link to="">Rebook</Link>
                    </li>
                    <li>
                      <Link to="">Autres</Link>
                    </li>
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
