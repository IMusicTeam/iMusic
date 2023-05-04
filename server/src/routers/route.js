const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");
const cors = require("cors")
const { uploadImage } = require("../helpers/upload");
const upload = require("../middleWare/uploads");
var bodyParser = require('body-parser');

//add routes here
router.post("/upload-song", musicController.POST_song);
router.get("/all-songs", musicController.GET_allSongs);
router.put("/update-song", musicController.UPDATE_song);
router.post("/upload-audio", upload.single("file"), cors(), uploadImage);
router.get("/get-song?:id", musicController.GET_song)
router.get("/all-charts", musicController.GET_allCharts)
router.post("/save-as-favourites", musicController.POST_likedSong)
router.get("/get-all-favourites?:userID", musicController.GET_allFavourites)

module.exports = router;
