const express = require("express");
const router = express.Router();
const musicController = require("../controllers/musicController");

//add routes here
router.post('/upload-song', musicController.POST_song)
router.get('/all-songs', musicController.GET_allSongs)

module.exports = router;
