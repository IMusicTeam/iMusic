const mongoose = require("mongoose");
const uploadSong = new mongoose.Schema(
  {
    tune:{
      type: String,
      required: true
    },
    albumName: {
      type: String,
      required: true,
    },
    songName: {
      type: String,
      required: true,
    },
    songDuration: {
      type: Number,
      required: true,
    },
    songThumbnail: {
      type: String,
      required: true,
    },
    endDuration: {type:  Number},
    updatedAt: { type: Date, expires: 600, default: Date.now },
    numberOfViews: {type: Number},
  },
  { timestamps: true }
);
// Create a Mongoose model for the Audio model
const Songs = mongoose.model("songs", uploadSong);
module.exports = Songs;
