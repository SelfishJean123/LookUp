const { validationResult } = require("express-validator");
const Product = require("../models/Product");
const User = require("../models/User");
const HttpError = require("../models/HttpError");

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

const getProductById = async (req, res, next) => {
  const productId = req.params.productId;

  let product;

  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError("Fetching product failed.", 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError("Could not find product for provided product id.", 404);
    return next(error);
  }

  res.json({ product: product.toObject({ getters: true }) });
};

const addProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid input provided. Check your data.", 422);
    return next(error);
  }

  const {
    createdByUserId,
    inci,
    image1,
    image2,
    image3,
    name,
    subname,
    producer,
    brand,
    subbrand,
    category,
    subcategory,
    ean,
    volumes,
    vegan,
    crueltyFree,
    description,
    howToUse,
  } = req.body;

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

  const newProduct = new Product({
    createdByUserId,
    lastEditedByUserId: createdByUserId,
    createdAt: new Date(),
    lastEditAt: createdAt,
    inci,
    image1,
    image2,
    image3,
    name,
    subname,
    producer,
    brand,
    subbrand,
    category,
    subcategory,
    ean,
    volumes,
    vegan,
    crueltyFree,
    description,
    howToUse,
    numberOfReviews: 0,
    rating: undefined,
  });

  try {
    const result = await newProduct.save();
    res.status(201).json(result); // transaction & sessions - lesson 139
  } catch (err) {
    const error = new HttpError("Adding new product faild.", 500);
    return next(error);
  }
};

const editProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("Invalid input provided. Check your data", 422);
    return next(error);
  }

  const productId = req.params.productId;

  let editedProduct;
  try {
    editedProduct = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError("Fetching product failed.", 500);
    return next(error);
  }

  if (!editedProduct) {
    const error = new HttpError("Could not find product for provided product id.", 404);
    return next(error);
  }

  const {
    lastEditedByUserId,
    inci,
    image1,
    image2,
    image3,
    name,
    subname,
    producer,
    brand,
    subbrand,
    category,
    subcategory,
    ean,
    volumes,
    vegan,
    crueltyFree,
    description,
    howToUse,
  } = req.body;

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

  editedProduct.lastEditedByUserId = lastEditedByUserId;
  editedProduct.lastEditAt = new Date();
  editedProduct.inci = inci;
  editedProduct.image1 = image1;
  editedProduct.image2 = image2;
  editedProduct.image3 = image3;
  editedProduct.name = name;
  editedProduct.subname = subname;
  editedProduct.producer = producer;
  editedProduct.brand = brand;
  editedProduct.subbrand = subbrand;
  editedProduct.category = category;
  editedProduct.subcategory = subcategory;
  editedProduct.ean = ean;
  editedProduct.volumes = volumes;
  editedProduct.vegan = vegan;
  editedProduct.crueltyFree = crueltyFree;
  editedProduct.description = description;
  editedProduct.howToUse = howToUse;

  let result;

  try {
    result = await editedProduct.save();
  } catch (err) {
    const error = new HttpError("Editing product faild.", 500);
    return next(error);
  }

  res.status(200).json({ product: result.toObject({ getters: true }) });
};

const deleteProduct = async (req, res, next) => {
  const productId = req.params.productId;

  try {
    await Product.findByIdAndDelete(productId); // populate("createdByUserId") aby usunąć też referencję
  } catch (err) {
    const error = new HttpError("Removing product failed.", 500);
    return next(error);
  }

  res.status(200).json({ message: "Product deleted" });
};

const getProductsByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  let products;

  try {
    products = await Product.find({ createdByUserId: userId });
  } catch (err) {
    const error = new HttpError("Fetching products failed", 500);
    return next(error);
  }

  if (!products) {
    const error = new HttpError("Could not find any products for provided product id", 404);
    return next(error);
  }

  res.json({ products: products.map((product) => product.toObject({ getters: true })) });
};

exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.addProduct = addProduct;
exports.editProduct = editProduct;
exports.deleteProduct = deleteProduct;
exports.getProductsByUserId = getProductsByUserId;
