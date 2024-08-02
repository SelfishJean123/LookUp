const { MongoClient, ServerApiVersion } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const HttpError = require("../models/HttpError");

const url =
  "mongodb+srv://JoannaHornung:Masakajmakowa231@cluster0.97yar0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let DUMMY_REVIEWS = [
  {
    reviewId: "011",
    createdByUserId: "ddecv332s",
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
        createdByUserId: "",
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

const getReviews = (req, res, next) => {};

const getReviewById = (req, res, next) => {
  const reviewId = req.params.reviewId;
  const review = DUMMY_REVIEWS.find((review) => review.reviewId === reviewId);

  if (!review) throw new HttpError("Could not find review for provided review id", 404);
  res.json({ review });
};

const addReview = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid input provided. Check your data", 422);
  }

  const {
    createdByUserId,
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

  const newReview = {
    reviewId: uuidv4(),
    createdByUserId,
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
  };

  try {
    await client.connect();
    await client.db("LookUp").collection("reviews").insertOne(newReview);
  } catch (err) {
    console.log(err);
    return res.json({ message: "We could not store data" });
  } finally {
    await client.close();
  }

  res.status(201).json({ review: newReview });
};

const editReview = (req, res, next) => {
  const reviewId = req.params.reviewId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) throw new HttpError("Invalid input provided. Check your data", 422);

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

  const editedReview = { ...DUMMY_REVIEWS.find((review) => review.reviewId === reviewId) };
  const reviewIndex = DUMMY_REVIEWS.findIndex((review) => review.reviewId === reviewId);

  editedReview.inci = inci;
  editedReview.primaryImage = primaryImage;
  editedReview.secondaryImage = secondaryImage;
  editedReview.tertiaryImage = tertiaryImage;
  editedReview.name = name;
  editedReview.subname = subname;
  editedReview.producer = producer;
  editedReview.brand = brand;
  editedReview.subbrand = subbrand;
  editedReview.category = category;
  editedReview.subcategory = subcategory;
  editedReview.ean = ean;
  editedReview.volumes = volumes;
  editedReview.price = price;
  editedReview.vegan = vegan;
  editedReview.crueltyFree = crueltyFree;
  editedReview.description = description;
  editedReview.howToUse = howToUse;

  DUMMY_REVIEWS[reviewIndex] = editedReview;

  res.status(200).json({ review: editedReview });
};

const deleteReview = (req, res, next) => {
  const reviewId = req.params.reviewId;
  DUMMY_REVIEWS = DUMMY_REVIEWS.filter((review) => review.reviewId !== reviewId);

  res.status(200).json({ message: "Review deleted" });
};

const getReviewsByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const reviews = DUMMY_REVIEWS.filter((review) => review.createdByUserId === userId);

  if (!reviews.length) return next(new HttpError("Could not find review for provided user id", 404));
  res.json({ reviews });
};

exports.getReviews = getReviews;
exports.getReviewById = getReviewById;
exports.addReview = addReview;
exports.editReview = editReview;
exports.deleteReview = deleteReview;
exports.getReviewsByUserId = getReviewsByUserId;
