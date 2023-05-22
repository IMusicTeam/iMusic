const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    transactionDetails: [{
      type: { type: String, required: true },
      subType: { type: String, required: true },
      description: { type: String, required: true },
      amount: { type: Number, required: true },
      status: { type: Number, required: true },
      created: {
        type: Date,
        default: Date.now,
      },
      updated: {
        type: Date,
        default: Date.now,
      },
    }],
  },
  { timestamps: true }
);
const Transactions = mongoose.model("transaction", transactionSchema);

module.exports = Transactions;
