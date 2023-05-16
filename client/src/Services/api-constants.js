export const baseURL = "http://localhost:3000/IMusic/"

function returnApis(url) {
    return baseURL + url
}

export const APIConstants = {
    fileUpload :  returnApis("upload-audio"),
    formUpload:returnApis("upload-song"),
    emailVerification: returnApis("signup"),
    otpVerification: returnApis("verify-email"),
    saveasplaylist: returnApis('save-as-playlist'),
    getallfavourites: returnApis('get-all-favourites?userID='),
    allsongs: returnApis('all-songs'),
    saveasfavourites: returnApis('save-as-favourites'),
    getallplaylist: returnApis('get-all-playlist?userID=')
}