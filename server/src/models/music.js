const mongoose = require("mongoose");
const uploadSong = new mongoose.Schema(
  {
    albumName:{
      type: String,
      required: true
    },
    artistName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
    songName: {
      type: String,
      required: true,
    },
    songDes: {
      type: String,
      required: true,
    },
    audio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    updatedAt: { type: Date, expires: 600, default: Date.now },
  },
  { timestamps: true }
);
// Create a Mongoose model for the Audio model
const Songs = mongoose.model("songs", uploadSong);
module.exports = Songs;
