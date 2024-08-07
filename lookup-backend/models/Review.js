const { mongoose, Schema } = require("mongoose");

const reviewSchema = new Schema({
  // _id: mongoose.Types.ObjectId,

  productId: mongoose.Types.ObjectId,

  createdByUserId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  lastEditedByUserId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },

  createdAt: { type: Date, required: true },
  lastEditAt: { type: Date, required: true },

  title: { type: String, required: true },
  rating: { type: Number, required: true },
  packages: { type: Number, required: true },
  reviewText: { type: String, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
