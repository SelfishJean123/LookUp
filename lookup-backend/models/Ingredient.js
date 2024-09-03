const { mongoose, Schema } = require("mongoose");

const ingredientSchema = new Schema({
  createdByUserId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  lastEditedByUserId: { type: mongoose.Types.ObjectId, required: false, ref: "User" },
  createdAt: { type: Date, required: true },
  lastEditedAt: { type: Date, required: true },
  image1: { type: String, required: true },
  image2: { type: String, required: false },
  image3: { type: String, required: false },
  namePolish: { type: String, required: true },
  nameEnglish: { type: String, required: true },
  nameLatin: { type: String, required: true },
  categories: [
    {
      name: { type: String, required: true },
      value: { type: Schema.Types.Mixed, required: true },
      _id: false,
    },
  ],
  origin: [
    {
      name: { type: String, required: true },
      value: { type: Schema.Types.Mixed, required: true },
      _id: false,
    },
  ],
  forms: [
    {
      name: { type: String, required: true },
      value: { type: Schema.Types.Mixed, required: true },
      _id: false,
    },
  ],
  potentiallyAllergenic: { type: Boolean, required: false },
  pregnancySafe: { type: Boolean, required: false },
  vegan: { type: Boolean, required: false },
  description: { type: String, required: true },
  concerns: { type: String, required: false },
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
