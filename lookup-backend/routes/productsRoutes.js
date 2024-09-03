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

router.post("/", [check("pageNumber").notEmpty(), check("itemsPerPage").notEmpty()], getProducts);
router.get("/:productId", getProductById);
router.post(
  "/addProduct",
  fileUpload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  [check("name").notEmpty(), check("description").isLength({ min: 5 })],
  addProduct
);
router.patch("/:productId", [check("name").notEmpty(), check("description").isLength({ min: 5 })], editProduct);
router.delete("/:productId", deleteProduct);
router.get("/user/:userId", getProductsByUserId);

module.exports = router;
