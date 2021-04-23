const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema(
  {
    technologyName: {
      type: String,
      min: 4,
      max: 120,
    },
    technologyWeight: {
      type: Number,
      default: 2,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("technology", technologySchema);
