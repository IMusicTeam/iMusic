const strings = {
    fillAll: "Please fill all the details.",
    unauthorized: "Unauthorized request.",
    serverError: "Internal server error.",
    invalidCredentials: "Invalid credentials.",
    invalidData: "Invalid data",
    userNotFound: "User not found.",
    userFound: "User found.",
    invalidOtp: "Invalid OTP.",
    otpVerified: "OTP verified successfully.",
    passwordUpdated: "Password updated successfully.",
  
    // sign up
    signupSuccess: "Account created.",
    emailVerified: "Email is verified.",
  
    // sign in
    loginSuccess: "Login Successfull.",
    invalidLogin: "Invalid email or password.",
    invalidAddress: "Invalid account address.",
  
    otpSent: "OTP sent successfully.",

    //Music
    saveSong: "Saved Successfully",
    updateSong: "Updated Successfully",
    uploadedSong: "Uploaded Song Successfully",
    liked: "Added to your favourites",
    alreadyExists: "Already added this song to liked list",
    rmovedFromFav: "Removed from favourites",

    //success || failure
    sucesss: "Success",
    failure: "Failure",
    //id
    idNotFound: "Id not found",
    //upload audio
    validateAudio: "Please Upload Audio file only",
    validationOnUpload: "only jpg png mp3 files are accepted",

    //liked
    notFoundUser: "UserID not found",

    //OTP success
    otpSentSuccessfully: "OTP sent successfully",
    failedToSendOTP : "Failed to send OTP",
    //emaiul verified
    verified: "Email Already Verified"
  };
  
  const codes = {
    success: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    partialContent: 206,
    moved: 301,
    found: 302,
    badRequest: 400,
    unauthorized: 401,
    paymentRequired: 402,
    forbidden: 403,
    notFound: 404,
    serverError: 500,
    badGateway: 502,
    unavailable: 503,
  };
  
  const exceptions = {
    validation: "ValidationError",
  };
  
  const otpTypes = {
    loggedInUser: "LOGGEDINUSER",
    notLoggedInUser: "NOTLOGGEDINUSER",
  };
  
  const verifyTypes = {
    email: "email",
    mobile: "mobile",
  };
  
  const expiryIn = {
    tenMinutes: "10m",
  };
  
  module.exports = {
    strings,
    codes,
    exceptions,
    otpTypes,
    verifyTypes,
    otpLength: 6,
    expiryIn,
  };
  