const { mongoose, Schema } = require("mongoose");

const optionSchema = new Schema({
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  name: { type: mongoose.Types.ObjectId, required: true},
});

module.exports = mongoose.model("Option", optionSchema);
