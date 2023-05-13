const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");
const cors = require("cors");
const { uploadImage } = require("../helpers/upload");
const upload = require("../middleWare/uploads");
var bodyParser = require("body-parser");
const authController = require("../controllers/AuthController");
const transactionController = require("../controllers/TransactionController");
const favController = require("../controllers/musicController/Favourites");
const playlistController = require("../controllers/musicController/Playlist");

//add routes here
router.post("/upload-song", musicController.POST_song);
router.get("/all-songs", musicController.GET_allSongs);
router.put("/update-song", musicController.UPDATE_song);
router.get("/get-song", musicController.GET_song);
//uploads
router.post("/upload-audio", upload.single("file"), cors(), uploadImage);
//al charts
router.get("/all-charts", musicController.GET_allCharts);
//favourites
router.post("/save-as-favourites", favController.POST_likedSong);
router.get("/get-all-favourites?:userID", favController.GET_allFavourites);
router.delete("/remove-from-favourites", favController.DeleteFromFavourites);
//playlist
router.post("/save-as-playlist", playlistController.POST_Playlist);
router.get("/get-all-playlist", playlistController.GET_allPlaylist);
router.delete("/remove-from-playlist", playlistController.DELETE_FromPlaylist);
//authenticate
router.post("/signup", authController.ON_SINGNUP);
router.put("/verify-email", authController.VERIFY_email);
router.post("/save-transaction", transactionController.SaveTransaction);
router.get(
  "/get-transaction?:userId",
  transactionController.getTransactionById
);

module.exports = router;
