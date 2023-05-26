const mongoose = require("mongoose");
const fs = require("fs");
const multer = require("multer");
const port = process.env.PORT || 5555;

const uploader = multer({
  storage: multer.memoryStorage(),
});

const uploadController = async (req, res) => {
  try {
    const protocol = req.protocol;
    const host = req.hostname;
    const fullUrl = `${protocol}://${host}:${port}`;
    const objectId = new mongoose.Types.ObjectId();
    const file = req.file;
    const fileName = `${objectId}-${file.originalname}`;
    fs.writeFileSync(__dirname + "/uploads/" + fileName, file.buffer); // const link = `${fullUrl}/uploads/${fileName}`;
    const link = `/uploads/${fileName}`;
    res.status(200).json({ link });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploader, uploadController };
