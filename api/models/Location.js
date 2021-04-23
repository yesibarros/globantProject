const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new mongoose.Schema(
  {
    locationName: {
      type: String,
      min: 4,
      max: 120,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: "country",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("location", locationSchema);
