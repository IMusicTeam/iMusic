const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");
const cors = require("cors")
const { uploadImage } = require("../helpers/upload");
const upload = require("../middleWare/uploads");
var bodyParser = require('body-parser');
const authController = require("../controllers/AuthController");
const transactionController = require("../controllers/TransactionController");

//add routes here
router.post("/upload-song", musicController.POST_song);
router.get("/all-songs", musicController.GET_allSongs);
router.put("/update-song", musicController.UPDATE_song);
router.post("/upload-audio", upload.single("file"), cors(), uploadImage);
router.get("/get-song", musicController.GET_song)
router.get("/all-charts", musicController.GET_allCharts)
router.post("/save-as-favourites", musicController.POST_likedSong)
router.get("/get-all-favourites?:userID", musicController.GET_allFavourites)
router.post("/save-as-playlist", musicController.POST_Playlist)
router.get("/get-all-playlist", musicController.GEt_allPlaylist)
router.delete("/remove-from-favourites", musicController.DeleteFromFavourites)
router.post("/signup", authController.ON_SINGNUP)
router.put("/verify-email", authController.VERIFY_email)
router.post("/save-transaction", transactionController.SaveTransaction)
router.get("/get-transaction?:userId", transactionController.getTransactionById)

module.exports = router;
