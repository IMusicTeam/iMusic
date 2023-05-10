const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId: {type:String, required: true},
    transactionDetails: Array,
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const Transactions = mongoose.model("transaction", transactionSchema);

module.exports = Transactions;
