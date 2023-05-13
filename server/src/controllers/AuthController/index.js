const { codes, strings } = require("../../Constants");
const { verifyOtp } = require("../../helpers/otp");
const { serverDown, sendOTP } = require("../../helpers/hooks");
const User = require("../../models/user");

class AuthController {
  async ON_SINGNUP(req, res) {
    const { email } = req.body;
    if (!email) {
      return res.status(codes.badRequest).json({ error: strings.fillAll });
    }
    const checkEmailVerified = await User.findOne({ email: email });
    try {
      if (checkEmailVerified) {
        sendOTP(email, res)
      } else {
        const user = new User({
          email: email.toLowerCase(),
        });
        await user.save();
        const data = user.toObject();
        sendOTP(email, res)
      }
    } catch {
      serverDown(res);
    }
  }

  //verify-email
  async VERIFY_email(req, res) {
    try {
      const { otp, email } = req.body;
      if (!otp || !email) {
        return res.status(codes.badRequest).json({ error: strings.fillAll });
      }
      const verified = await verifyOtp({
        otp,
        email,
      });
      if (!verified) {
        return res
          .status(codes.badRequest)
          .json({ message: strings.invalidOtp });
      }
      const user = await User.findOneAndUpdate(
        { email: email },
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
