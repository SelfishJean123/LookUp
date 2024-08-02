const { mongoose, Schema } = require("mongoose");

const reviewSchema = new Schema({
  // _id: Schema.Types.UUID,
  reviewId: { type: Schema.Types.UUID, required: true },
  userId: { type: Schema.Types.UUID, required: true },
  productId: { type: Schema.Types.UUID, required: true },
  reportedByUserId: { type: Schema.Types.UUID, required: false },
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  packages: { type: Number, required: true },
  reviewText: { type: String, required: true },
  createdAt: { type: Date, required: true },
  lastEditAt: { type: Date, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
