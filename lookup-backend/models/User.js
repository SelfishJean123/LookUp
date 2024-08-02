const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  // _id: Schema.Types.UUID,
  userId: { type: Schema.Types.UUID, required: true },
  createdByUserId: { type: Schema.Types.UUID, required: true },
  isAdmin: { type: Boolean, required: true },
  token: { type: String, required: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  favourites: [{ type: Schema.Types.UUID, ref: "Product" }],
  reviews: [{ type: Schema.Types.UUID, ref: "Review" }],
});

module.exports = mongoose.model("User", userSchema);
