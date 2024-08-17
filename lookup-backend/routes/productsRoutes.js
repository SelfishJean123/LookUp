const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
  getProductsByUserId,
} = require("../controllers/productsController");
const fileUpload = require("./../middleware/fileUpload");

router.get("/", getProducts);
router.get("/:productId", getProductById);
router.post(
  "/",
  fileUpload.single("image1"),
  fileUpload.single("image2"),
  fileUpload.single("image3"),
  [check("name").notEmpty(), check("description").isLength({ min: 5 })],
  addProduct
);
router.patch("/:productId", [check("name").notEmpty(), check("description").isLength({ min: 5 })], editProduct);
router.delete("/:productId", deleteProduct);
router.get("/user/:userId", getProductsByUserId);

module.exports = router;
