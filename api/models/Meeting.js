const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingsSchema = new mongoose.Schema({
  host: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("meeting", meetingsSchema);
