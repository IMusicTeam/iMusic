const { codes, strings } = require("../../Constants");
const Songs = require("../../models/music");
const { default: mongoose } = require("mongoose");
const { serverDown } = require("../../helpers/hooks");
const User = require("../../models/user");
const Transactions = require("../../models/transaction");

class TransactionController {
  // save transaction
  async SaveTransaction(req, res) {
    const requestedBody = req.body;
    const { userId } = requestedBody;
    const { type, subType, description, amount, status } =
      requestedBody.transactionDetails;
    const findUserHasCollection = await Transactions.find({
      userId: userId,
    });
    if (findUserHasCollection && findUserHasCollection.length > 0) {
      const data = await Transactions.updateOne(
        { userId: userId },
        { $push: { transactionDetails: req.body.transactionDetails } },
        { returnOriginal: false }
      );
      res.status(codes.success).json({ message: strings.sucesss, data: data });
    } else {
      try {
        if (!userId) {
          return res
            .status(codes.badRequest)
            .json({ message: strings.userNotFound });
        }
        if (!type || !subType || !description || !amount || !status) {
          return res
            .status(codes.badRequest)
            .json({ message: strings.fillAll });
        }
        const save = new Transactions({
          userId,
          transactionDetails: req.body.transactionDetails,
        });
        await save.save();
        const json = save.toObject();
        res
          .status(codes.created)
          .json({ message: strings.sucesss, data: json });
      } catch {
        serverDown(res);
      }
    }
  }

  // async getTransactionById
  async getTransactionById(req, res) {
    const { userId } = req.query;
    if (!userId) {
      return res
        .status(codes.badRequest)
        .json({ message: strings.userNotFound });
    }
    try {
      const findAllTransactions = await Transactions.aggregate([
        { $match: { userId: userId } },
      ]);
      if (findAllTransactions) {
        res
          .status(codes.found)
          .json({ message: strings.sucesss, data: findAllTransactions??[0] });
      } else {
        res.status(codes.notFound).json({ message: strings.sucesss, data: [] });
      }
    } catch {
      serverDown(res);
    }
  }
}

const transactionController = new TransactionController();
module.exports = transactionController;
