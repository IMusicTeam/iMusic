const nodemailer = require("nodemailer");
const { otpLength } = require("../constants");
const Otp = require("../models/otp");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.OTP_SENDER_EMAIL,
    pass: process.env.OTP_SENDER_PASSWORD,
  },
});

function generateOtp(length) {
  var digits = "1234567890";
  var otp = "";
  for (i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

async function sendOtpToEmail(to, otp) {
  const mailOptions = {
    from: process.env.OTP_SENDER_EMAIL,
    to,
    subject: "iMusic Email Verification",
    text: `Verify with following OTP: ${otp}`,
  };
  // console.log("Sending mail", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("OTP Email sent: " + info.response);
    }
  });
}

async function storeOtp({email}) {
  const otp = generateOtp(otpLength);
  const filter = {otp, email}
  const set = {otp, email};
  await Otp.findOneAndUpdate(filter, { $set: set }, { upsert: true });
  sendOtpToEmail(email, otp);
  return true;
}

async function verifyOtp({ otp, email}) {
  const filter = { otp, email  };
  const result = await Otp.deleteOne(filter);
  return result ? result.deletedCount === 1 : false;
}

module.exports = { sendOtpToEmail, generateOtp, storeOtp, verifyOtp };
