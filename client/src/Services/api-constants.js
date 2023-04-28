export const baseURL = "http://localhost:3000/IMusic/"

function returnApis(url) {
    return baseURL + url
}

export const APIConstants = {
    fileUpload :  returnApis("upload-audio")
}