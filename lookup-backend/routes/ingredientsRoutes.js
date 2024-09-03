const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  getIngredients,
  getInciItems,
  getIngredientById,
  addIngredient,
  // editIngredient,
  // deleteIngredient,
  // getIngredientsByUserId,
} = require("../controllers/ingredientsController");
const fileUpload = require("./../middleware/fileUpload");

router.post("/", [check("pageNumber").notEmpty(), check("itemsPerPage").notEmpty()], getIngredients);
router.get("/getInciItems", getInciItems);
router.get("/:ingredientId", getIngredientById);
router.post(
  "/addIngredient",
  fileUpload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  [check("nameLatin").notEmpty(), check("description").isLength({ min: 5 })],
  addIngredient
);
// router.patch("/:ingredientId", [check("name").notEmpty(), check("description").isLength({ min: 5 })], editIngredient);
// router.delete("/:ingredientId", deleteIngredient);
// router.get("/user/:userId", getIngredientsByUserId);

module.exports = router;
