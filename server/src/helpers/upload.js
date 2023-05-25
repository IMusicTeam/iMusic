const fs = require("fs");
const { BlobServiceClient } = require("@azure/storage-blob");
const { codes, strings } = require("../Constants");
const { serverDown } = require("./hooks");

const connectionString = process.env.AzureKey
const containerName = "ideyalabs";
const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);
// It provides methods to interact with containers and blobs within a storage account.
const blobOptions = {
  blobHTTPHeaders: {
    blobContentType:
      "image/png" ||
      "image/jpg" ||
      "image/jpeg" ||
      "image/jfif" ||
      "audio/basic" ||
      "audio/vnd.wav" ||
      "audio/mpeg" ||
      "application/pdf",
  },
};
const uploadImage = async (req, res, next) => {
  try {
    if (req.file) {
      const blobName = req.file.filename;
      const imageBuffer = fs.readFileSync(req.file.path);
      const containerClient =
        blobServiceClient.getContainerClient(containerName);
      // This method is used to get a reference to a specific container within a storage account.
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      // This method is used to get a reference to a specific block blob within a container.
      // const uploadResponse = await blockBlobClient.uploadData(
      //   imageBuffer,
      //   blobOptions
      // );
      const imageUrl = blockBlobClient.url;
      res.status(codes.created).json({ message: strings.saveSong, data: imageUrl})
    } else {
        res.status(codes.badRequest).json({ message: strings.validationOnUpload, data: ""})
    }
  } catch (error) {
    return serverDown(res)
  }
};

module.exports = { uploadImage };
