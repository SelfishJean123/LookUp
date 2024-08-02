const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema({
  // _id: Schema.Types.UUID,
  productId: { type: Schema.Types.UUID, required: false },
  userId: { type: Schema.Types.UUID, required: false },
  lastEditedByUserId: { type: Schema.Types.UUID, required: false },
  inci: [{ type: Schema.Types.UUID, ref: "Ingredient" }],
  reviews: [{ type: Schema.Types.UUID, ref: "Review" }],
  primaryImage: { type: String, required: false },
  secondaryImage: { type: String, required: false },
  tertiaryImage: { type: String, required: false },
  name: { type: String, required: false },
  subname: { type: String, required: false },
  producer: { type: String, required: false },
  brand: { type: String, required: false },
  subbrand: { type: String, required: false },
  category: { type: String, required: false },
  subcategory: { type: String, required: false },
  ean: { type: Number, required: false },
  volumes: { type: [Number], required: false },
  price: { type: Number, required: false },
  vegan: { type: Boolean, required: false },
  crueltyFree: { type: Boolean, required: false },
  description: { type: String, required: false },
  howToUse: { type: String, required: false },
  rating: { type: Number, required: false },
  numberOfReviews: { type: Number, required: false },
  createdAt: { type: Date, required: false },
  lastEditAt: { type: Date, required: false },
});

module.exports = mongoose.model("Product", productSchema);
