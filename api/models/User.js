const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 120,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 120,
  },
  password: {
    type: String, 
    required: true, 
    trim: true
  },
  workingSince: {
    type: Number,
    min: 2003,
    max: new Date().getFullYear()
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
    required: true,
    validate: [isEmail, "invalid email"]
  },
  role: 
    [{
      type: String,
      enum: ['mentee', 'mentor', 'admin'],
      default: 'mentee'
    }], 
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
  areas: [
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
  objectives: [{
    type: Schema.Types.ObjectId,
    ref: "objective"
  }],
  salt: {
    type: String
  }
});

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

//INSTANCE METHOD
userSchema.methods.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

//HOOK saves hashed password
userSchema.pre("save", function (next) {
  const user = this;
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
      next();
    });
});


module.exports = mongoose.model("user", userSchema);
