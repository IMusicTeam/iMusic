const { codes, strings } = require("../../Constants");
const Songs = require("../../models/music");
const SaveFavourite = require("../../models/favourites");
const { default: mongoose } = require("mongoose");
const { storeOtp, verifyOtp } = require("../../helpers/otp");
const { serverDown } = require("../../helpers/hooks");
const User = require("../../models/user");

class AuthController {
  async ON_SINGNUP(req, res) {
    const { email } = req.body;
    if (!email) {
      return res.status(codes.badRequest).json({ error: strings.fillAll });
    }
    try {
      const user = new User({
        email: email.toLowerCase(),
      });
      await user.save();
      const data = user.toObject();
      const userId = data._id;
      if (userId) {
        const stored = await storeOtp({email, userId });
        const data = {
          userId,
          email
        }
        if (stored) {
          res
            .status(codes.success)
            .json({ message: strings.otpSentSuccessfully, data });
        } else {
          res
            .status(codes.badRequest)
            .json({ message: strings.failure, stored });
        }
      } else {
        serverDown(res);
      }
    } catch {
      serverDown(res);
    }
  }

  // verify-email
  async VERIFY_email(req, res) {
    try {
      const { otp, userId } = req.body;
      if (!otp || !userId) {
        return res.status(codes.badRequest).json({ error: strings.fillAll });
      }
      const verified = await verifyOtp({
        otp,
        userId,
      });
      if (!verified) {
        return res
          .status(codes.badRequest)
          .json({ message: strings.invalidOtp });
      }
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { emailVerified: true } },
        { returnOriginal: false, projection: { password: 0 } }
      );
      const data = user.toObject();
      res.status(codes.success).json({ message: strings.emailVerified, data });
    } catch {
      serverDown(res);
    }
  }
}
const authController = new AuthController();
module.exports = authController;
