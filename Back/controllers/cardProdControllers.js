const db = require("../models");

exports.addProductToCard = (req, res) => {
  let { name, brand, price, description, image, size, category, ClientId } =
    req.body;
  db.ProductCard.create({
    name,
    brand,
    category,
    price,
    description,
    image,
    size,
    ClientId,
  })
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
exports.deleteProductFromCard = (req, res) => {
  db.ProductCard.destroy({ where: { id: req.params.id } })
    .then((response) => {
      res.status(204).json(response);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.getAllProductByClient = (req, res) => {
  let ClientId = req.params.id;
  db.ProductCard.findAll({ where: { ClientId } })
    .then((products) => {
      if (!products) {
        return res
          .status(404)
          .json({ message: "No products found with this client id." });
      } else {
        return res.status(200).json(products);
      }
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: "Error retrieving the data from the database" });
    });
};
