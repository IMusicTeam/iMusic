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
const playlist = require("../models/playlist");
const { uploader, uploadController } = require("../middleWare/localUploader");

//add routes here
router.post("/upload-song", musicController.POST_song);
router.get("/all-songs", musicController.GET_allSongs);
router.put("/update-song", musicController.UPDATE_song);
router.get("/get-song", musicController.GET_song);
//uploads
router.post("/upload-audio", upload.single("file"), cors(), uploadImage);
router.post("/upload", uploader.single("file"), uploadController)
//al charts
router.get("/all-charts", musicController.GET_allCharts);
//favourites
router.post("/save-as-favourites", favController.POST_likedSong);
router.get("/get-all-favourites?:userID", favController.GET_allFavourites);
router.delete("/remove-from-favourites", favController.DeleteFromFavourites);
//playlist
router.post("/save-as-playlist", playlistController.POST_Playlist);
router.get("/get-all-playlist?:userId", playlistController.GET_playlistById);
router.put("/update-playlist", playlistController.UPDATE_playlist);
router.get('/get-playlist-by-id-name?:userId?:name', playlistController.GET_playlistByUserIDName)
// router.delete("/remove-from-playlist", playlistController.DELETE_FromPlaylist);
//authenticate
router.post("/signup", authController.ON_SINGNUP);
router.put("/verify-email", authController.VERIFY_email);
router.post("/save-transaction", transactionController.SaveTransaction);
router.get(
  "/get-transaction?:userId",
  transactionController.getTransactionById
);
router.post('/approve-song?:songId?:adminWalletId', musicController.ApproveSong)
router.get("/get-all-pending-songs", musicController.GET_allPendingSongs)

module.exports = router;
