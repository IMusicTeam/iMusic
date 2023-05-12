const { codes, strings } = require("../../../Constants");
const { serverDown } = require("../../../helpers/hooks");
const Songs = require("../../../models/music");
const { default: mongoose, ObjectId } = require("mongoose");
const SavePlayList = require("../../../models/liked");

class PlaylistController {
      //save playlist
  async POST_Playlist(req, res) {
    const { userID, songId } = req.body;
    if ((userID, songId)) {
      const findSong = await Songs.find({ _id: songId });
      if (findSong && findSong.length > 0) {
        const findUserHasCollection = await SavePlayList.find({
          userID: userID,
        });
        if (
          findUserHasCollection !== null &&
          Object.keys(findUserHasCollection).length > 0
        ) {
          const validateSong_ = findUserHasCollection.map((each) =>
            each.allSongs.findIndex((item) => item._id == songId)
          )[0];
          if (validateSong_ < 0) {
            const data = await SavePlayList.findOneAndUpdate(
              { userID: userID },
              { $push: { allSongs: findSong[0] } },
              { returnOriginal: false }
            );
          } else {
            return res
              .status(codes.moved)
              .json({ message: strings.alreadyExists });
          }
        } else {
          const data = new SavePlayList({
            userID,
            allSongs: findSong[0],
          });
          await data.save();
        }
        res.status(codes.created).json({ message: strings.liked });
      } else {
        res.status(codes.badRequest).json({ message: strings.idNotFound });
      }
    } else {
      res.status(codes.badRequest).json({ message: strings.failure });
    }
  }

  async GET_allPlaylist(req, res) {
    const { userID } = req.query;
    const getAll = await SavePlayList.aggregate([
      { $match: { userID: userID } },
    ]);
    try {
      if (getAll) {
        return res
          .status(codes.success)
          .json({ message: strings.sucesss, data: getAll });
      } else {
        res.status(codes.badRequest).json({ message: strings.idNotFound });
      }
    } catch {
      serverDown(res);
    }
  }

  async DELETE_FromPlaylist(req, res) {
    const { userID, songId } = req.body;
    if ((userID, songId)) {
      try {
        const newId = new mongoose.Types.ObjectId(songId);
        const { modifiedCount } = await SavePlayList.updateOne(
          { userID: userID },
          { $pull: { allSongs: { _id: newId } } },
          { upsert: false, multi: true }
        );
        if (modifiedCount === 1) {
          res.status(codes.success).json({ message: strings.rmovedFromFav });
        } else {
          res
            .status(codes.success)
            .json({ message: strings.invalidCredentials });
        }
      } catch {
        res.status(codes.badRequest).json({ message: strings.failure });
      }
    } else {
      res.status(codes.badRequest).json({ message: strings.userNotFound });
    }
  }
}
const playlistController = new PlaylistController();
module.exports = playlistController;

