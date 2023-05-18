const mongoose = require("mongoose");
const saveFav = new mongoose.Schema(
  {
    userID: {type: String, required: true},
    songId: {type: String, requires: true},
    allSongs: Array,
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
// Create a Mongoose model for the Audio model
const SaveFavourite = mongoose.model("favourites", saveFav);
module.exports = SaveFavourite;
