const path = require("path")
const multer = require("multer")
const uploasdfad = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log(file)
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" ||   file.mimetype == "audio/mpeg" || file.mimetype == "audio/vnd.wav" || file.mimetype == "audio/basic" || file.mimetype == "application/pdf") {
            cb(null, true)
        } else {
            cb(null, false)
        }
    },
    limits: {
        fileSize: 10000000
    }
})

module.exports = upload