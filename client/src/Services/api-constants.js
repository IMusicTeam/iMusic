// 192.168.1.5
export const baseURL = "https://imusic-backend.inspiretk.com/IMusic/"
export const assetURL = "https://imusic-backend.inspiretk.com";

function returnApis(url) {
    return baseURL + url
}

export const APIConstants = {
    fileUpload:  returnApis("upload-audio"),
    formUpload: returnApis("upload-song"),
    emailVerification: returnApis("signup"),
    otpVerification: returnApis("verify-email"),
    saveasplaylist: returnApis('save-as-playlist'),
    getallfavourites: returnApis('get-all-favourites?userID='),
    allsongs: returnApis('all-songs'),
    saveasfavourites: returnApis('save-as-favourites'),
    removeFromFavourites:returnApis('remove-from-favourites'),
    getallplaylist: returnApis('get-all-playlist?userId='),
    updatePlaylist:returnApis('update-playlist'),
    saveTransaction:returnApis('save-transaction'),
    getTransaction:returnApis('get-transaction?:userId='),
    getAllPendingSongs:returnApis('get-all-pending-songs'),
    approveSong:returnApis('approve-song?songId=')
}