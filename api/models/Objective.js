const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectiveSchema = new mongoose.Schema(
  {
    objectiveName: {
      type: String,
      min: 4,
      max: 120,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      Enum: ["pending", "achieved", "excellent"],
      default: "pending",
    },
    feedback: {
      type: String,
      min: 4,
      max: 120,
    },
    mentor: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    mentee: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("objective", objectiveSchema);
