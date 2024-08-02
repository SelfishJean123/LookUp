const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/HttpError");

let DUMMY_INGREDIENTS = [
  {
    ingredientId: "01134",
    createdByUserId: "ddecv332s",
    lastEditedByUserId: "ddecv332s",
    primaryImage: "",
    secondaryImage: "",
    tertiaryImage: "",
    namePolish: "name polish",
    nameEnglish: "name english",
    nameLatin: "name latin",
    category: [""],
    subcategory: [""],
    origin: [""],
    forms: [""],
    potentiallyAllergenic: false,
    pregnancySafe: true,
    vegan: true,
    description: "",
    concerns: "",
    createdAt: "",
    lastEditedAt: "",
  },
];

const getIngredients = (req, res, next) => {};

const getIngredientById = (req, res, next) => {
  const ingredientId = req.params.ingredientId;
  const ingredient = DUMMY_INGREDIENTS.find((ingredient) => ingredient.ingredientId === ingredientId);

  if (!ingredient) throw new HttpError("Could not find ingredient for provided ingredient id", 404);
  res.json({ ingredient });
};

const addIngredient = (req, res, next) => {
  const {
    primaryImage,
    secondaryImage,
    tertiaryImage,
    namePolish,
    nameEnglish,
    nameLatin,
    category,
    subcategory,
    origin,
    forms,
    potentiallyAllergenic,
    pregnancySafee,
    vegan,
    description,
    concerns,
  } = req.body;

  const newIngredient = {
    ingredientId: uuidv4(),
    primaryImage,
    secondaryImage,
    tertiaryImage,
    namePolish,
    nameEnglish,
    nameLatin,
    category,
    subcategory,
    origin,
    forms,
    potentiallyAllergenic,
    pregnancySafee,
    vegan,
    description,
    concerns,
  };

  DUMMY_INGREDIENTS.push(newIngredient);
  res.status(201).json({ ingredient: newIngredient });
};

const editIngredient = (req, res, next) => {
  const ingredientId = req.params.ingredientId;

  const {
    primaryImage,
    secondaryImage,
    tertiaryImage,
    namePolish,
    nameEnglish,
    nameLatin,
    category,
    subcategory,
    origin,
    forms,
    potentiallyAllergenic,
    pregnancySafe,
    vegan,
    description,
    concerns,
  } = req.body;

  const editedIngredient = { ...DUMMY_INGREDIENTS.find((ingredient) => ingredient.ingredientId === ingredientId) };
  const ingredientIndex = DUMMY_INGREDIENTS.findIndex((ingredient) => ingredient.ingredientId === ingredientId);

  editedIngredient.primaryImage = primaryImage;
  editedIngredient.secondaryImage = secondaryImage;
  editedIngredient.tertiaryImage = tertiaryImage;
  editedIngredient.namePolish = namePolish;
  editedIngredient.nameEnglish = nameEnglish;
  editedIngredient.nameLatin = nameLatin;
  editedIngredient.category = category;
  editedIngredient.subcategory = subcategory;
  editedIngredient.origin = origin;
  editedIngredient.forms = forms;
  editedIngredient.potentiallyAllergenic = potentiallyAllergenic;
  editedIngredient.pregnancySafe = pregnancySafe;
  editedIngredient.vegan = vegan;
  editedIngredient.description = description;
  editedIngredient.concerns = concerns;

  DUMMY_INGREDIENTS[ingredientIndex] = editedIngredient;

  res.status(200).json({ ingredient: editedIngredient });
};

const deleteIngredient = (req, res, next) => {
  const ingredientId = req.params.ingredientId;
  DUMMY_INGREDIENTS = DUMMY_INGREDIENTS.filter((ingredient) => ingredient.ingredientId !== ingredientId);

  res.status(200).json({ message: "Ingredient deleted" });
};

const getIngredientsByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const ingredients = DUMMY_INGREDIENTS.filter((ingredient) => ingredient.createdByUserId === userId);

  if (!ingredients.length) return next(new HttpError("Could not find ingredient for provided user id", 404));
  res.json({ ingredients });
};

exports.getIngredients = getIngredients;
exports.getIngredientById = getIngredientById;
exports.addIngredient = addIngredient;
exports.editIngredient = editIngredient;
exports.deleteIngredient = deleteIngredient;
exports.getIngredientsByUserId = getIngredientsByUserId;
