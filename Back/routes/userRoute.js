const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getAllUsers,
  deleteUser,
  updateUser,
  deleteAllUsers,
} = require("../controllers/userControllers");
const {
  getAllClients,
  updateClient,
} = require("../controllers/clientControllers");
const {
  addProductToCard,
  deleteProductFromCard,
  getAllProductByClient,
} = require("../controllers/cardProdControllers");
const {
  createProduct,
  getAllProductByBrand,
  getAllProductByCategory,
  getAllProducts,
  deleteProduct,
  deleteAllProducts,
} = require("../controllers/productControllers");
// -----------------------user-------------------------------
router.post("/register", register);
router.post("/login", login);
router.get("/getAllUsers", getAllUsers);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteAllUsers", deleteAllUsers);
// -----------------------Client-------------------------------
router.get("/getAllClients", getAllClients);
router.put("/updateClient", updateClient);
// -----------------------cardProduct-------------------------------
router.post("/addProductToCard", addProductToCard);
router.delete("/deleteProductFromCard/:id", deleteProductFromCard);
router.get("/getAllProductByClient/:id", getAllProductByClient);
// -----------------------Product-------------------------------
router.post("/createProduct", createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getAllProductsByBrand/:brand", (req, res) => {
  const brand = req.params.brand;
  getAllProductByBrand(req, res, brand);
});
router.get("/getAllProductByCategory/:category", (req, res) => {
  const category = req.params.category;
  getAllProductByCategory(req, res, category);
});
router.delete("/deleteProduct/:id", deleteProduct);
router.delete("/deleteAllProducts", deleteAllProducts);
module.exports = router;
