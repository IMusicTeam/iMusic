const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
  file: {
    type: JSON,
    required: true,
  },
});

const Audio = mongoose.model("Audios", audioSchema);
module.exports = Audio;