const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  createdByUserId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  lastEditedByUserId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  createdAt: { type: Date, required: true },
  lastEditAt: { type: Date, required: true },
  inci: [{ type: mongoose.Types.ObjectId, required: true, ref: "Ingredient" }],
  image1: { type: String, required: true },
  image2: { type: String, required: true },
  image3: { type: String, required: true },
  name: { type: String, required: true },
  subname: { type: String, required: false },
  producer: { type: String, required: true },
  brand: { type: String, required: true },
  subbrand: { type: String, required: false },
  category: [{ type: String, required: true }],
  subcategory: [{ type: String, required: true }],
  ean: { type: Number, required: true },
  volumes: [{ type: Number, required: true }],
  vegan: { type: Boolean, required: true },
  crueltyFree: { type: Boolean, required: true },
  description: { type: String, required: true },
  howToUse: { type: String, required: true },
  numberOfReviews: { type: Number, required: true },
  rating: { type: Number, required: false },
});

module.exports = mongoose.model("Product", productSchema);
