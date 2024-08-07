const { validationResult } = require("express-validator");
const HttpError = require("../models/HttpError");
const User = require("../models/User");

const signUpUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid input provided. Check your data.", 422);
    return next(error);
  }

  const { firstName, lastName, userName, avatar, email, password } = req.body;

  let alreadyExistingUserEmail;
  try {
    alreadyExistingUserEmail = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Failed", 500);
    return next(error); // w async-await używamy next a nie throw
  }

  if (alreadyExistingUserEmail) {
    const error = new HttpError("User already exists. Login instead.", 500);
    return next(error);
  }

  const newUser = new User({
    firstName,
    lastName,
    userName,
    avatar,
    email,
    password,
    favourites: [],
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Failed trying to save", 500);
    return next(error);
  }

  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

const signInUser = async (req, res, next) => {
  const { email, password } = req.body;

  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Failed when fetichng user.", 500);
    return next(error);
  }

  if (!identifiedUser || identifiedUser.password !== password) {
    const error = new HttpError("Could not find user with the provided email or password is incorrenct.", 401);
    return next(error);
  }

  res.json({ message: "User signed in." });
};

const signOutUser = (req, res, next) => {};
const recoverUserPassword = (req, res, next) => {};
const changeUserPassword = (req, res, next) => {};

const deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    await User.findByIdAndDelete(userId);
  } catch (err) {
    const error = new HttpError("Removing user failed.", 500);
    return next(error);
  }

  res.status(200).json({ message: "User deleted" });
};

const getUserByUserId = async (req, res, next) => {
  const userId = req.params.userId;

  let user;
  try {
    user = await user.findById(userId);
  } catch (err) {
    const error = new HttpError("Fetching user failed.", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided user id.", 404);
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) });
};

exports.signUpUser = signUpUser;
exports.signInUser = signInUser;
exports.signOutUser = signOutUser;
exports.recoverUserPassword = recoverUserPassword;
exports.changeUserPassword = changeUserPassword;
exports.deleteUser = deleteUser;
exports.getUserByUserId = getUserByUserId;
