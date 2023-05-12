export const baseURL = "http://localhost:3000/IMusic/"

function returnApis(url) {
    return baseURL + url
}

export const APIConstants = {
    fileUpload :  returnApis("upload-audio"),
    formUpload:returnApis("upload-song"),
    emailVerification: returnApis("signup"),
    otpVerification: returnApis("verify-email")
}