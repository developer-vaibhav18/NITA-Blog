const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const tokenSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
});

module.exports = mongoose.model("emailToken", tokenSchema);
