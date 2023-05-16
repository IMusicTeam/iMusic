// functions

const { codes, strings } = require("../Constants");
const { storeOtp } = require("./otp");

function serverDown(res) {
    return  res.status(codes.serverError).json({ message: strings.serverError });
}
function noUserFound(res) {
  return res
      .status(codes.badRequest)
      .json({ message: strings.userNotFound, data: {} });
}
async function sendOTP(email, res) {
    const stored = await storeOtp({ email });
    if (stored) {
      res
        .status(codes.success)
        .json({ message: strings.otpSentSuccessfully, data: email});
    } else {
      res
        .status(codes.badRequest)
        .json({ message: strings.failedToSendOTP , data: "" });
    }
}
module.exports = {serverDown, sendOTP, noUserFound};

