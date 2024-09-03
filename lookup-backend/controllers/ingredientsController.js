const { validationResult } = require("express-validator");
const Ingredient = require("../models/Ingredient");
const InciItem = require("../models/InciItem");
const User = require("../models/User");
const HttpError = require("../models/HttpError");

const getIngredients = async (req, res, next) => {
  const { pageNumber, itemsPerPage, IngredientFilters, ingredientsSorting } = req.body;

  let sortDirection = 1;
  switch (ingredientsSorting.sortDirection) {
    case "ascending": {
      sortDirection = 1;
      break;
    }
    case "descending": {
      sortDirection = -1;
      break;
    }
    default: {
      sortDirection = 1;
      break;
    }
  }

  const ingredientsLength = await Ingredient.countDocuments();
  const ingredients = await Ingredient.find()
    .sort({ [ingredientsSorting.sortBy]: sortDirection })
    .skip((pageNumber - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .exec();

  res.json({ ingredients: ingredients.map((ingredient) => ingredient.toObject({ getters: true })), ingredientsLength });
};

const getInciItems = async (req, res, next) => {
  const ingredients = await Ingredient.find().exec();
  const inciItems = ingredients.map(
    (ingredient) =>
      new InciItem({
        id: ingredient.id,
        nameLatin: ingredient.nameLatin,
      })
  );

  res.json({ inciItems: inciItems.map((item) => item.toObject({ getters: true })) });
};

const getIngredientById = async (req, res, next) => {
  const ingredientId = req.params.ingredientId;

  let ingredient;
  try {
    ingredient = await Ingredient.findById(ingredientId);
  } catch (err) {
    const error = new HttpError("Fetching ingredient failed.", 500);
    return next(error);
  }

  if (!ingredient) {
    const error = new HttpError("Could not find ingredient for provided ingredient id.", 404);
    return next(error);
  }

  res.json({ ingredient: ingredient.toObject({ getters: true }) });
};

const addIngredient = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid input provided. Check your data.", 422);
    return next(error);
  }

  const {
    createdByUserId,
    image1,
    image2,
    image3,
    namePolish,
    nameEnglish,
    nameLatin,
    potentiallyAllergenic,
    pregnancySafe,
    vegan,
    description,
    concerns,
  } = req.body;

  const categories = JSON.parse(req.body.categories);
  const origin = JSON.parse(req.body.origin);
  const forms = JSON.parse(req.body.forms);
  const createdAt = new Date();

  let user;
  try {
    user = await User.findById(createdByUserId);
  } catch (err) {
    const error = new HttpError("Fail when fetching user.", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("No such user in the db", 404);
    return next(error);
  }

  const newIngredient = new Ingredient({
    createdByUserId,
    lastEditedByUserId: createdByUserId,
    createdAt,
    lastEditedAt: createdAt,
    image1: req.files.image1[0].path,
    image2: req.files.image2[0].path,
    image3: req.files.image3[0].path,
    namePolish,
    nameEnglish,
    nameLatin,
    potentiallyAllergenic,
    pregnancySafe,
    vegan,
    description,
    concerns,
    categories,
    origin,
    forms,
  });

  try {
    const result = await newIngredient.save();
    res.status(201).json({ ingredient: result.toObject({ getters: true }) }); // transaction & sessions - lesson 139
  } catch (err) {
    const error = new HttpError("Adding new ingredient faild.", 500);
    return next(error);
  }
};

exports.getIngredients = getIngredients;
exports.getInciItems = getInciItems;
exports.getIngredientById = getIngredientById;
exports.addIngredient = addIngredient;
