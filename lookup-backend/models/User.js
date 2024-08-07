const { mongoose, Schema } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  // token: { type: String, required: true },
  // accessToken: { type: String, required: true },
  // refreshToken: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  avatar: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favourites: [{ type: mongoose.Types.ObjectId, required: true, ref: "Product" }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
