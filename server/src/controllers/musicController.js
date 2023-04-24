const Songs = require("../models/songModel");

class UserController {
  //Get image list
  async GetImagesList(req, res) {
    try {
      let data = await Songs.find();
      res.send(data);
    } catch (e) {
      console.log(e.message);
      res.send(e);
    }
  }

  //My music list
  async GetSongs(req, res) {
    try {
      let data = await Songs.find();
      res.send(data);
    } catch (e) {
      console.log(e.message);
      res.send(e);
    }
  }
//Uploading Music
  async UploadSong(req, res) {
    try {
      const { audio, image, album, artist } = req.body; // Access the base64-encoded file data from the request body
      // Save the base64 data to your Mongoose database
      const result = new Songs({
        audio: audio,
        image: image,
        album: album,
        artist:artist
      });
      await result.save();
      res.json({ success: true, result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to upload file" });
    }
  }
}

const userController = new UserController();
module.exports = userController;
