const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    otp: { type: String, required: true },
    userId: { type: mongoose.Schema.ObjectId, required: true },
    updatedAt: { type: Date, expires: 600, default: Date.now },
  },
  { timestamps: true }
);
const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;
