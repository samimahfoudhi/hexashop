import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProd } from "./Features/productSelectedSlice";
import { setproducts } from "./Features/dataslice";
import axios from "axios";

const ProductModel = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.user.data.data.role);
  const data = useSelector((state) => state.products.data);

  const handelView = () => {
    dispatch(setProd({ ...props.e }));
    navigate("/productDetails");
  };
  // const handleDelete = () => {
  //   axios
  //     .delete(`http://localhost:7000/deleteProduct/${props.e.id}`)
  //     .then((response) => console.log("deleted"))
  //     .catch((err) => console.log(err));
  // };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:7000/deleteProduct/${props.e.id}`)
      .then((response) => {
        console.log("deleted");
        // Mettre à jour la liste des produits dans l'état de l'application
        const updatedProducts = data.filter(
          (product) => product.id !== props.e.id
        );
        dispatch(setproducts(updatedProducts));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-lg-4">
      <div className="item">
        <div className="thumb">
          <div className="hover-content">
            <ul>
              <li onClick={handelView}>
                <Link to="/productDetails">
                  <i className="fa fa-eye"></i>
                </Link>
              </li>
              <li>
                <Link to="add-product-to-my-cart">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
              {role === "Admin" && (
                <li>
                  <Link to="update-product">
                    <i className="fa fa-pencil"></i>
                  </Link>
                </li>
              )}
              {role === "Admin" && (
                <li onClick={handleDelete}>
                  <Link to="/products">
                    <i className="fa fa-trash"></i>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <img
            src={props.e.image}
            alt=""
            style={{ height: "300px", width: "100%" }}
          />
        </div>
        <div className="down-content">
          <h4>{props.e.title}</h4>
          <span>$ {props.e.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductModel;
