const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  getIngredients,
  getIngredientById,
  addIngredient,
  editIngredient,
  deleteIngredient,
  getIngredientsByUserId,
} = require("../controllers/IngredientController");

router.get("/", getIngredients);
router.get("/:ingredientId", getIngredientById);
router.post("/addIngredient", [check("name").notEmpty(), check("description").isLength({ min: 5 })], addIngredient);
router.patch("/:ingredientId", [check("name").notEmpty(), check("description").isLength({ min: 5 })], editIngredient);
router.delete("/:ingredientId", deleteIngredient);
router.get("/user/:userId", getIngredientsByUserId);

module.exports = router;
