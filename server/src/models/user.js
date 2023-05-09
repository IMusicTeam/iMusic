const mongoose = require("mongoose");
const saveUsers = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    emailVerified: { type: Boolean, default: false },
    mobileVerified: { type: Boolean, default: false },
  },
);
// Create a Mongoose model for the Audio model
const User = mongoose.model("users", saveUsers);
module.exports = User;
