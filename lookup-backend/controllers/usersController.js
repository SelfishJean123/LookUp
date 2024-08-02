const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/HttpError");

const DUMMY_USERS = [
  {
    userId: "9820",
    isAdmin: true,
    accessToken: "", 
    refreshToken: "",
    firstName: "Joanna",
    lastName: "Hornung",
    userName: "SelfishJean",
    email: "joanna.hornung@gmail.com",
    password: "1234",
    addedProducts: 23,
    favourites: [""],
  },
];

const signUpUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid input provided. Check your data", 422);
  }

  const { firstName, lastName, userName, email, password } = req.body;

  const alreadyExistingUserEmail = DUMMY_USERS.find((user) => user.email === email);
  if (alreadyExistingUserEmail) throw new HttpError("User with provided email already exists", 422);

  const alreadyExistingUserName = DUMMY_USERS.find((user) => user.userName === userName);
  if (alreadyExistingUserName) throw new HttpError("User with provided user name already exists", 422);

  const newUser = {
    userId: uuidv4(),
    firstName,
    lastName,
    userName,
    email,
    password,
  };

  DUMMY_USERS.push(newUser);
  res.status(201).json({ user: newUser });
};

const signInUser = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
  if (!identifiedUser || identifiedUser.password !== password)
    throw new HttpError("Could not find user with the provided email", 404);

  res.json({ message: "User signed in" });
};

const signOutUser = (req, res, next) => {};
const recoverUserPassword = (req, res, next) => {};
const changeUserPassword = (req, res, next) => {};
const deleteUser = (req, res, next) => {};

const getUserByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const user = DUMMY_USERS.find((user) => {
    return user.userId === userId;
  });

  res.json({ user: user });
};

exports.signUpUser = signUpUser;
exports.signInUser = signInUser;
exports.signOutUser = signOutUser;
exports.recoverUserPassword = recoverUserPassword;
exports.changeUserPassword = changeUserPassword;
exports.deleteUser = deleteUser;
exports.getUserByUserId = getUserByUserId;
