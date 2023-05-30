const { codes, strings } = require("../../../constants");
const { serverDown, noUserFound } = require("../../../helpers/hooks");
const Songs = require("../../../models/music");
const { default: mongoose, ObjectId } = require("mongoose");
const Playlist = require("../../../models/playlist");

class PlaylistController {
  async POST_Playlist(req, res) {
    const { userId, songId, image, name, description } = req.body;
    if (!userId || !songId) {
      return noUserFound(res);
    }
    try {
      const findCollections = await Playlist.find({ userId: userId });
      const findSongById = await Songs.find({ _id: songId });
      const available = !findCollections.length > 0 && findCollections !== null;
      const allPlaylist = [
        {
          image,
          name,
          description,
          songs: findSongById,
        },
      ];
      if (available) {
        const save = new Playlist({
          userId,
          allPlaylist,
        });
        await save.save();
        const json = save.toObject();
        res
          .status(codes.created)
          .json({ message: strings.sucesss, data: json });
      } else {
        const data = await Playlist.findOneAndUpdate(
          { userId: userId },
          { $push: { allPlaylist: allPlaylist[0] } },
          { returnOriginal: false }
        );
        res
          .status(codes.created)
          .json({ message: strings.sucesss, data: data });
      }
    } catch {
      serverDown(res);
    }
  }

  //get playlist by id
  async GET_playlistById(req, res) {
    const { userId } = req.query;
    if (!userId) {
      return noUserFound(res);
    }
    try {
      const getAlPlaylistsByID = await Playlist.aggregate([
        { $match: { userId: userId } },
      ]);
      if (getAlPlaylistsByID) {
        res
          .status(codes.success)
          .json({ message: strings.sucesss, data: getAlPlaylistsByID ?? [0] });
      } else {
        res.status(codes.notFound).json({ message: strings.sucesss, data: [] });
      }
    } catch {
      serverDown(res);
    }
  }

  ////updateplaylist adding the song
  async UPDATE_playlist(req, res) {
    const { userId, songId, name } = req.body;
    if (!userId || !songId) {
      return noUserFound(res);
    }
    try {
      const newId = new mongoose.Types.ObjectId(songId);
      const findSong = await Playlist.find({
        $and: [
          { allPlaylist: { $elemMatch: { name: name } } },
          { "allPlaylist.songs": { $elemMatch: { _id: newId } } },
        ],
      });
      if (findSong?.length > 0) {
        return res.status(codes.success).json({ message: strings.playlisted });
      } else {
        const findSongById = await Songs.findOne({ _id: songId });
        await Playlist.findOneAndUpdate(
          { userId: userId, "allPlaylist.name": name },
          { $push: { "allPlaylist.$.songs": findSongById } }
        );
        res
          .status(codes.success)
          .json({ message: strings.AddedToYourWishlist });
      }
    } catch {
      serverDown(res);
    }
  }
  //getPlaylistByIdName
  async GET_playlistByUserIDName(req, res) {
    const { userId, name } = req.query;
    if (!userId || !name) {
      return noUserFound(res);
    }
    try {
      const findSong = await Playlist.findOne({
        "allPlaylist.name": {
          $in: [
            name
          ]
        }
      },
      )
      if (Object.keys(findSong).length > 0) {
        return res.status(codes.success).json({ message: strings.sucesss, data: findSong.allPlaylist[0] });
      } else {
        res
          .status(codes.badRequest)
          .json({ message: strings.notFoundUser });
      }
    } catch {
      serverDown(res);
    }
  }
}

const playlistController = new PlaylistController();
module.exports = playlistController;
