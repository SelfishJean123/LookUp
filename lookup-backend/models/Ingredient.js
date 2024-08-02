const { mongoose, Schema } = require("mongoose");

const ingredientSchema = new Schema({
  // _id: Schema.Types.UUID,
  ingredientId: { type: Schema.Types.UUID, required: true },
  userId: { type: Schema.Types.UUID, required: true },
  lastEditedByUserId: { type: Schema.Types.UUID, required: true },
  primaryImage: { type: String, required: true },
  secondaryImage: { type: String, required: false },
  tertiaryImage: { type: String, required: false },
  namePolish: { type: String, required: true },
  nameEnglish: { type: String, required: true },
  nameLatin: { type: String, required: true },
  category: { type: [String], required: true },
  subcategory: { type: [String], required: true },
  origin: { type: [String], required: true },
  forms: { type: [String], required: true },
  potentiallyAllergenic: { type: Boolean, required: true },
  pregnancySafe: { type: Boolean, required: true },
  vegan: { type: Boolean, required: true },
  description: { type: String, required: true },
  concerns: { type: String, required: true },
  createdAt: { type: Date, required: true },
  lastEditAt: { type: Date, required: true },
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
