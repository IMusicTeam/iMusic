const { codes, strings } = require("../../Constants");
const { serverDown } = require("../../helpers/hooks");
const Songs = require("../../models/music");
const SaveFavourite = require("../../models/favourites");

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
      serverDown(res);
    }
  }

  //allCharts
  async GET_allCharts(req, res) {
    const allCharts = {
      newRelease: Songs.find({}).sort({ _id: -1 }),
      // newReleases:  Songs.findOne({ _id: "644cc49112cb5815289a3902" })
    };
    res
      .status(codes.success)
      .json({ message: strings.sucesss, data: JSON.stringify(allCharts) });
  }

  //saveLikedSong
  async POST_likedSong(req, res) {
    const { userID, songId } = req.body;
    if ((userID, songId)) {
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
            // const data = SaveFavourite.findOneAndDelete(
            //   { userID: userID },
            //   { $pull: {allSongs: {_id : songId}} },
            //   { returnOriginal: false }
            // )
            //   return res
            //     .status(codes.moved)
            //     .json({ message: strings.alreadyExists, data });
            // }
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
        res
          .status(codes.badRequest)
          .json({ message: strings.idNotFound});
      }
    } else {
      res.status(codes.badRequest).json({ message: strings.failure});
    }
  }

  async GET_allFavourites(req, res) {
    const { userID } = req.query;
    const getAll = await SaveFavourite.aggregate(
      [ { $match : { userID : userID } } ]
    );
    try {
      if(getAll){
        return res
          .status(codes.success)
          .json({ message: strings.sucesss, data: getAll });
      }else {
        res.status(codes.badRequest).json({ message: strings.idNotFound });
      }
    }catch {
      serverDown(res);
    }
  }



}
const musicController = new MusicController();
module.exports = musicController;
