const { codes, strings } = require("../../Constants");
const { serverDown } = require("../../helpers/hooks");
const Songs = require("../../models/music");
const SaveFavourite = require("../../models/favourites");
const { default: mongoose, ObjectId } = require("mongoose");
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
      favourited,
      userId,
      copyrightFile,
      userWalletId
    } = req.body;
    try {
      if (!userId) {
        return res
          .status(codes.badRequest)
          .json({ message: strings.userNotFound, data: {} });
      }
      if (
        !songThumbnail ||
        !albumName ||
        !artistName ||
        !price ||
        !tune ||
        !lyrics ||
        !songName ||
        !songDescription ||
        !copyrightFile ||
        !userWalletId
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
        favourited,
        userId,
        copyrightFile,
        userWalletId,
        songApproved: false,
        adminWalletId: ""
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
      copyrightFile,
      userWalletId,
      songApproved
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
        !songDescription ||
        !userWalletId ||
        !copyrightFile
      ) {
        return res
          .status(codes.badRequest)
          .json({ message: strings.fillAll, data: {} });
      }
      try {
        const newId = new mongoose.Types.ObjectId(_id);
        const data = await Songs.findOneAndUpdate(
          { _id: newId },
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
              copyrightFile,
              userWalletId,
              songApproved
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
    const { _id, userId } = req.query;
    try {
      if (_id) {
        const newId = new mongoose.Types.ObjectId(_id);
        const findSong = await SaveFavourite.findOne(
          { userID: userId, "allSongs._id": newId },
          { allSongs: 1 }
        );
        const returnSong = await Songs.findOne({ _id: _id });
        const favourited = findSong && findSong !== null ? true : false;
        return res
          .status(codes.success)
          .json({ message: strings.sucesss, data: returnSong, favourited });
      } else {
        res.status(codes.badRequest).json({ message: strings.idNotFound });
      }
    } catch (err) {
      console.log(err);
      serverDown(res);
    }
  }

  //allCharts
  async GET_allCharts(req, res) {
    const allCharts = {
      newRelease: Songs.find({}).sort({ _id: -1 }),
    };
    res
      .status(codes.success)
      .json({ message: strings.sucesss, data: JSON.stringify(allCharts) });
  }


  //approve song
  async ApproveSong(req, res) {
    const {songId, adminWalletId} = req.query
    try {
       await Songs.findOneAndUpdate(
        { _id: songId},
        {
          $set: {
            songApproved : true,
            adminWalletId
          },
        },
        // {
        //   returnOriginal: false,
        // }
      )
      res
      .status(codes.success)
      .json({ message: strings.sucesss });
    }catch {
      serverDown(res);
    }
  }

  //get all pending songs
  async GET_allPendingSongs(req, res) {
    // const {} = req.query
    try {
      const pendingSongs_toBeApproved = await Songs.find({"songApproved" : false})
      res
      .status(codes.success)
      .json({ message: strings.sucesss, data:pendingSongs_toBeApproved });
    }catch {
      serverDown(res);
    }
  }
}
const musicController = new MusicController();
module.exports = musicController;
