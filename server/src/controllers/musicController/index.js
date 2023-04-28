const { codes, strings } = require("../../Constants");
const { serverDown } = require("../../helpers/hooks");
const Songs = require("../../models/music");

class MusicController {
  //save song
  async POST_song(req, res) {
    console.log(req,"REQ:")
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

    // if (!albumName || !artistName || !price || !selectedOption || !songName||  !songDes || !audio || !image) {
    //   return res
    //     .status(codes.badRequest)
    //     .json({ message: strings.fillAll, data: {} });
    // } else if (!tune.endsWith("mp3")) {
    //   return res
    //     .status(codes.badRequest)
    //     .json({ message: strings.validateAudio, data: {} });
    // }
    try {
      const save = new Songs({
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
      albumName,
      songName,
      songDuration,
      songThumbnail,
      endDuration,
      numberOfViews,
    } = req.body;
    if (_id) {
      if (!albumName || !songName || !songDuration || !songThumbnail) {
        return res
          .status(codes.badRequest)
          .json({ message: strings.fillAll, data: {} });
      }
      try {
        const data = await Songs.findOneAndUpdate(
          { _id: _id },
          {
            $set: {
              albumName,
              songName,
              songDuration,
              songThumbnail,
              endDuration,
              numberOfViews,
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
}

const musicController = new MusicController();
module.exports = musicController;
