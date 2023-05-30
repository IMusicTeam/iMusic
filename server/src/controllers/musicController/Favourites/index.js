const { codes, strings } = require("../../../constants");
const { serverDown } = require("../../../helpers/hooks");
const Songs = require("../../../models/music");
const SaveFavourite = require("../../../models/favourites");
const { default: mongoose, ObjectId } = require("mongoose");

class FavouritesController {
  //saveLikedSong
  async POST_likedSong(req, res) {
    const { userID, songId } = req.body;
    console.log(req.body)
    if (userID, songId) {
      const findSong = await Songs.find({ _id: songId });
      if (findSong && findSong.length > 0) {
        const findUserHasCollection = await SaveFavourite.find({
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
            const data = await SaveFavourite.findOneAndUpdate(
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
          const data = new SaveFavourite({
            userID,
            allSongs: findSong[0],
          });
          await data.save();
        }
        res.status(codes.created).json({ message: strings.liked });
      } else {
        res.status(codes.badRequest).json({ message: strings.songNotFound });
      }
    } else {
      res.status(codes.badRequest).json({ message: strings.failure });
    }
  }

  async DeleteFromFavourites(req, res) {
    const { userID, songId } = req.body;
    if ((userID, songId)) {
      try {
        const newId = new mongoose.Types.ObjectId(songId);
        const { modifiedCount } = await SaveFavourite.updateOne(
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

  async GET_allFavourites(req, res) {
    const { userID } = req.query;
    const getAll = await SaveFavourite.aggregate([
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
}
const favController = new FavouritesController();
module.exports = favController;

