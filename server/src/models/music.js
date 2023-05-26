const mongoose = require("mongoose");
const uploadSong = new mongoose.Schema(
  {
    songThumbnail: {
      type: String,
      required: true
    },
    albumName: {
      type: String,
      required: true,
    },
    userId:{
      type: String,
      required: true,
    },
    artistName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tune: Array,
    lyrics: {
      type: String,
      required: true,
    },
    songName: {
      type: String,
      required: true,
    },
    favourited: Boolean,
    songDescription: {
      type: String,
      required: true,
    },
    copyrightFile: {
      type: String,
      required: true
    },
    songApproved: Boolean,
    userWalletId: {type: String, required: true},
    adminWalletId: String,
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
// Create a Mongoose model for the Audio model
const Songs = mongoose.model("songs", uploadSong);
module.exports = Songs;