const db = require("../models");

exports.createProduct = (req, res) => {
  let { name, brand, price, description, image, size, category } = req.body;
  db.Product.create({
    name,
    brand,
    price,
    description,
    image,
    size,
    category,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
exports.getAllProducts = (req, res) => {
  db.Product.findAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
exports.getAllProductByBrand = (req, res, brand) => {
  db.Product.findAll({
    where: {
      brand: brand,
    },
  })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
exports.getAllProductByCategory = (req, res, category) => {
  db.Product.findAll({
    where: {
      category: category,
    },
  })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  db.Product.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.status(204).json(console.log("deleted"));
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
exports.deleteAllProducts = (req, res) => {
  db.Product.destroy({
    where: {},
  })
    .then(() => {
      res.status(204).json("all deleted");
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
