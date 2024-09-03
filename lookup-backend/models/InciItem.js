const { mongoose, Schema } = require("mongoose");

const InciItemSchema = new Schema({
  id: { type: String, required: true },
  nameLatin: { type: String, required: true },
});

module.exports = mongoose.model("InciItem", InciItemSchema);
