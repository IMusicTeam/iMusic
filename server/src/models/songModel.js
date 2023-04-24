const mongoose = require('mongoose');
const uploadSong = new mongoose.Schema({
    audio: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    album: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    }
  });
  
  // Create a Mongoose model for the Audio model
  const Songs = mongoose.model("songs", uploadSong);
  module.exports=Songs