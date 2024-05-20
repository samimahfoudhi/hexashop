import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductModel from "./ProductModel";
import { useSelector } from "react-redux";
const ProductsCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const data = useSelector((state) => state.products.data);
  console.log(data);
  // Calculer l'index de début et de fin des produits à afficher sur la page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Check Our Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {currentProducts.map((product, index) => (
              <ProductModel key={index} e={product} />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination">
                <ul>
                  {Array.from(
                    { length: Math.ceil(data.length / productsPerPage) },
                    (_, i) => (
                      <li
                        key={i}
                        className={currentPage === i + 1 ? "active" : ""}
                      >
                        <Link to="#" onClick={() => paginate(i + 1)}>
                          {i + 1}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsCategory;
