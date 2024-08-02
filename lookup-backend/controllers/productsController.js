const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const Product = require("../models/Product");
const HttpError = require("../models/HttpError");

let DUMMY_PRODUCTS = [
  {
    productId: "011",
    userId: "ddecv332s",
    lastEditedByUserId: "ddecv332s",
    inci: [
      {
        ingredientId: "23",
        name: "Disodium EDTA",
        position: "",
      },
    ],
    reviews: [
      {
        reviewId: "",
        userId: "",
        title: "",
        rating: 4,
        packages: 4,
        reviewText: "",
        createdAt: "",
        lastEditedAt: "",
      },
    ],
    primaryImage: "",
    secondaryImage: "",
    tertiaryImage: "",
    name: "name",
    subname: "",
    producer: "basic lab",
    brand: "",
    subbrand: "",
    category: "",
    subcategory: "",
    ean: 12345678910123,
    volumes: [0.5, 10.0, 30.0],
    price: 15.5,
    vegan: true,
    crueltyFree: true,
    description: "",
    howToUse: "",
    rating: 3.9,
    numberOfReviews: 92,
    createdAt: "",
    lastEditedAt: "",
  },
];

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

const getProductById = async (req, res, next) => {
  const productId = req.params.productId;
  const product = DUMMY_PRODUCTS.find((product) => product.productId === productId);

  if (!product) throw new HttpError("Could not find product for provided product id", 404);
  res.json({ product: product });
};

const addProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid input provided. Check your data", 422);
  }

  const {
    userId,
    inci,
    primaryImage,
    secondaryImage,
    tertiaryImage,
    name,
    subname,
    producer,
    brand,
    subbrand,
    category,
    subcategory,
    ean,
    volumes,
    price,
    vegan,
    crueltyFree,
    description,
    howToUse,
    createdAt,
  } = req.body;

  const newProduct = new Product({
    productId: uuidv4(),
    userId,
    inci,
    primaryImage,
    secondaryImage,
    tertiaryImage,
    name,
    subname,
    producer,
    brand,
    subbrand,
    category,
    subcategory,
    ean,
    volumes,
    price,
    vegan,
    crueltyFree,
    description,
    howToUse,
    createdAt,
  });

  try {
    const result = await newProduct.save();
    res.status(201).json(result);
  } catch (err) {
    const error = new HttpError("Adding new product faild.", 500);
    return next(error);
  }
};

const editProduct = (req, res, next) => {
  const productId = req.params.productId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid input provided. Check your data", 422);
  }

  const {
    inci,
    primaryImage,
    secondaryImage,
    tertiaryImage,
    name,
    subname,
    producer,
    brand,
    subbrand,
    category,
    subcategory,
    ean,
    volumes,
    price,
    vegan,
    crueltyFree,
    description,
    howToUse,
  } = req.body;

  const editedProduct = { ...DUMMY_PRODUCTS.find((product) => product.productId === productId) };
  const productIndex = DUMMY_PRODUCTS.findIndex((product) => product.productId === productId);

  editedProduct.inci = inci;
  editedProduct.primaryImage = primaryImage;
  editedProduct.secondaryImage = secondaryImage;
  editedProduct.tertiaryImage = tertiaryImage;
  editedProduct.name = name;
  editedProduct.subname = subname;
  editedProduct.producer = producer;
  editedProduct.brand = brand;
  editedProduct.subbrand = subbrand;
  editedProduct.category = category;
  editedProduct.subcategory = subcategory;
  editedProduct.ean = ean;
  editedProduct.volumes = volumes;
  editedProduct.price = price;
  editedProduct.vegan = vegan;
  editedProduct.crueltyFree = crueltyFree;
  editedProduct.description = description;
  editedProduct.howToUse = howToUse;

  DUMMY_PRODUCTS[productIndex] = editedProduct;
  res.status(200).json({ product: editedProduct });
};

const deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  DUMMY_PRODUCTS = DUMMY_PRODUCTS.filter((product) => product.productId !== productId);

  res.status(200).json({ message: "Product deleted" });
};

const getProductsByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const products = DUMMY_PRODUCTS.filter((product) => product.userId === userId);

  if (!products.length) return next(new HttpError("Could not find product for provided user id", 404));
  res.json({ products });
};

exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.addProduct = addProduct;
exports.editProduct = editProduct;
exports.deleteProduct = deleteProduct;
exports.getProductsByUserId = getProductsByUserId;
