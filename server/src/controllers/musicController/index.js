const { codes } = require("../../Constants");
const Songs = require("../../models/saveMusic");

class MusicController {
  //My music list
  async GET_allSongs(req, res) {
    try {
      let data = await Songs.find();
      res.send(data);
    } catch (e) {
      console.log(e.message);
      res.send(e);
    }
  }

  //Uploading Music
  async POST_song(req, res) {
    try {
      const { audio, image, album, artist } = req.body; // Access the base64-encoded file data from the request body
      // Save the base64 data to your Mongoose database
      const result = new Songs({
        audio: audio,
        image: image,
        album: album,
        artist: artist,
      });
      await result.save();
      res.json({ success: true, result });
    } catch (error) {
      console.error(error);
      res.status(codes.serverError).json({ error: "Failed to upload file" });
    }
  }
}

const musicController = new MusicController();
module.exports = musicController;
