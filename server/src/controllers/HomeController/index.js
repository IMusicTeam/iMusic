// const { codes, strings } = require("../../Constants");
// const { verifyOtp } = require("../../helpers/otp");
// const { serverDown, sendOTP } = require("../../helpers/hooks");
// const User = require("../../models/user");

const Playlist = require("../../models/playlist");
const RecentlyPlayed = require("../../models/recentlyPlayed");

class AuthController {
  async saveRecentSongs(req, res) {
    const { userId, songId} = req.body;
    if (!userId || !songId) {
      return noUserFound(res);
    }
    try {
      const findSongById = await Songs.find({ _id: songId });
      console.log(findSongById,"findSongById")
        const save = new RecentlyPlayed({
          userId,
          recentPlayedSongs: findSongById[0],
        });
        await save.save();
        const json = save.toObject();
        res
          .status(codes.created)
          .json({ message: strings.sucesss, data: json });
        // const data = await Playlist.findOneAndUpdate(
        //   { userId: userId },
        //   { $push: { allPlaylist: allPlaylist[0] } },
        //   { returnOriginal: false }
        // );
        // res
        //   .status(codes.created)
        //   .json({ message: strings.sucesss, data: data });
    } catch {
      serverDown(res);
    }
  }
}
const authController = new AuthController();
module.exports = authController;
