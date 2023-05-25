const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RecentSongs = new Schema({
  userId: {type: String, required: true},
  songId: String,
  image: String,
  recentPlayedSongs: Array
});

module.exports= mongoose.model("RecentlyPlayed", RecentSongs);