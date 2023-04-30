const { codes, strings } = require("../../Constants");
const { serverDown } = require("../../helpers/hooks");
const LikedSong = require("../../models/liked");
const Songs = require("../../models/music");

class MusicController {
  async POST_song(req, res) {
    const {
      songThumbnail,
      albumName,
      artistName,
      price,
      tune,
      lyrics,
      songName,
      songDescription,
    } = req.body;
    try {
      if (
        !songThumbnail ||
        !albumName ||
        !artistName ||
        !price ||
        !tune ||
        !lyrics ||
        !songName ||
        !songDescription
      ) {
        return res
          .status(codes.badRequest)
          .json({ message: strings.fillAll, data: {} });
      }
      const save = new Songs({
        songThumbnail,
        albumName,
        artistName,
        price,
        tune,
        lyrics,
        songName,
        songDescription,
      });
      await save.save();
      const data = save.toObject();
      res.status(codes.created).json({ message: strings.saveSong, data });
    } catch (error) {
      if (error.code === 11000) {
        res.status(codes.badRequest).json({
          message: `${
            Object.keys(error.keyPattern)[0]
          } already exists in the database`,
        });
      } else {
        serverDown(res);
      }
    }
  }

  //all songs
  async GET_allSongs(req, res) {
    try {
      let data = await Songs.find();
      res.status(codes.success).json({ message: strings.sucesss, data });
    } catch (e) {
      serverDown(res);
    }
  }

  //update music
  async UPDATE_song(req, res) {
    const { _id } = req.body;
    const {
      songThumbnail,
      albumName,
      artistName,
      price,
      tune,
      lyrics,
      songName,
      songDescription,
    } = req.body;
    if (_id) {
      if (
        !songThumbnail ||
        !albumName ||
        !artistName ||
        !price ||
        !tune ||
        !lyrics ||
        !songName ||
        !songDescription
      ) {
        return res
          .status(codes.badRequest)
          .json({ message: strings.fillAll, data: {} });
      }
      try {
        const data = await Songs.findOneAndUpdate(
          { _id: _id },
          {
            $set: {
              songThumbnail,
              albumName,
              artistName,
              price,
              tune,
              lyrics,
              songName,
              songDescription,
            },
          },
          {
            returnOriginal: false,
          }
        );
        res.status(codes.success).json({ message: strings.updateSong, data });
      } catch (error) {
        serverDown(res);
      }
    } else {
      res.json({ message: strings.idNotFound });
    }
  }

  async UploadLikedSong(req, res) {
    const {
      albumName,
      artistName,
      price,
      selectedOption,
      songName,
      songDes,
      audio,
      image
    } = req.body;

    try {
      const save = new LikedSong({
      albumName,
      artistName,
      price,
      selectedOption,
      songName,
      songDes,
      audio,
      image
      });
      await save.save();
      const data = save.toObject();
      res.status(codes.created).json({ message: strings.saveSong, data });
    } catch (error) {
      if (error.code === 11000) {
        res.status(codes.badRequest).json({
          message: `${
            Object.keys(error.keyPattern)[0]
          } already exists in the database`,
        });
      } else {
        serverDown(res);
      }
    }
  }

  async GetLikedSongs (req, res){
    try {
      let data = await LikedSong.find();
      res.status(codes.success).json({ message: strings.sucesss, data });
    } catch (e) {
      serverDown(res);
    }
  }

  //get songByID
  async GET_song(req, res) {
    const { id } = req.query;
    try {
      if (id) {
        const findSong = await Songs.findOne({ _id: id });
        return res
          .status(codes.success)
          .json({ message: strings.fillAll, data: findSong });
      } else {
        res.status(codes.badRequest).json({ message: strings.idNotFound });
      }
    } catch (err) {
      res.status(codes.serverError).json({ message: strings.serverError });
    }
  }

  //allCharts
  async GET_allCharts(req, res) {
      const allCharts = {
        "newRelease" : Songs.find({}).sort({_id:-1}) 
        // newReleases:  Songs.findOne({ _id: "644cc49112cb5815289a3902" })
      }
      res
      .status(codes.success)
      .json({ message: strings.sucesss, data: JSON.stringify(allCharts) });
  }
}
const musicController = new MusicController();
module.exports = musicController;
