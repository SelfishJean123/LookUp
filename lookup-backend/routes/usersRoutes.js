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
} = require("../controllers/usersController");

router.post(
  "/signup",
  [
    check("firstName").notEmpty(),
    check("lastName").notEmpty(),
    check("userName").notEmpty(),
    check("avatar").notEmpty(),
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

module.exports = router;
