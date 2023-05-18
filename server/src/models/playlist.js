const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Playlist = new Schema({
  userId: {type: String, required: true},
  songId: String,
  image: String,
  name: String,
  description: String,
  allPlaylist: Array
});

module.exports= mongoose.model("playlist", Playlist);