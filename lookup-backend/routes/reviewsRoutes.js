const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  getReviews,
  getReviewById,
  addReview,
  editReview,
  deleteReview,
  getReviewsByUserId,
} = require("../controllers/reviewsController");

router.get("/", getReviews);
router.get("/:reviewId", getReviewById);
router.post("/", [check("name").notEmpty(), check("description").isLength({ min: 5 })], addReview);
router.patch("/:reviewId", [check("name").notEmpty(), check("description").isLength({ min: 5 })], editReview);
router.delete("/:reviewId", deleteReview);
router.get("/user/:userId", getReviewsByUserId);

module.exports = router;
