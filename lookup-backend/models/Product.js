const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  createdByUserId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  lastEditedByUserId: { type: mongoose.Types.ObjectId, required: false, ref: "User" },
  createdAt: { type: Date, required: true },
  lastEditedAt: { type: Date, required: true },
  // inci: [{ type: mongoose.Types.ObjectId, required: true, ref: "Ingredient" }],
  inci: [{ value: { type: String || Number, required: true }, name: { type: String, required: true }, _id: false }],
  image1: { type: String, required: false },
  image2: { type: String, required: false },
  image3: { type: String, required: false },
  name: { type: String, required: true },
  subName: { type: String, required: false },
  producer: { type: String, required: true },
  brand: { type: String, required: true },
  subBrand: { type: String, required: false },
  categories: [
    { value: { type: String || Number, required: true }, name: { type: String, required: true }, _id: false },
  ],
  subCategories: [
    { value: { type: String || Number, required: true }, name: { type: String, required: true }, _id: false },
  ],
  ean: { type: Number, required: true },
  volumes: [{ value: { type: String || Number, required: true }, name: { type: String, required: true }, _id: false }],
  volumesUnit: { type: String, required: true },
  vegan: { type: Boolean, required: true },
  crueltyFree: { type: Boolean, required: true },
  description: { type: String, required: true },
  howToUse: { type: String, required: true },
  numberOfReviews: { type: Number, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
