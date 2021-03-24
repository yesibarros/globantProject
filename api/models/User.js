const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
    min: 2,
    max: 120,
  },
  lastName: {
    type: String,
    // required: true,
    min: 2,
    max: 120,
  },
  location: [
    {
      type: Schema.Types.ObjectId,
      ref: "location",
    },
  ],

  employeeId: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  role: [
    {
      type: String,
      enum: ["mentee", "mentor", "admin"],
      required: true,
    },
  ],
  mentees: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  mentor: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  area: [
    {
      type: Schema.Types.ObjectId,
      ref: "area",
    },
  ],

  technologies: [
    {
      type: Schema.Types.ObjectId,
      ref: "technology",
    },
  ],
  img: {
    type: String,
    // required: true,
  },
});

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model("user", userSchema);
