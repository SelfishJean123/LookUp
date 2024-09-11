const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  signUpUser,
  signInUser,
  signOutUser,
  recoverUserPassword,
  changeUserPassword,
  deleteUser,
  getUserByUserId,
  addToFavourites,
} = require("../controllers/usersController");
const fileUpload = require("./../middleware/fileUpload");

router.post(
  "/signup",
  fileUpload.single("avatar"),
  [
    check("firstName").notEmpty(),
    check("lastName").notEmpty(),
    check("userName").notEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signUpUser
);
router.post("/signin", [check("email").normalizeEmail().isEmail(), check("password").notEmpty()], signInUser);
router.post("/signout", signOutUser);
router.post("/recoverpassword", recoverUserPassword);
router.patch("/changepassword", changeUserPassword);
router.delete("/:userId", deleteUser);
router.get("/:userId", getUserByUserId);
router.post("/:userId/favourites", addToFavourites);

module.exports = router;
