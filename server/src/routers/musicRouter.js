const { Router } = require("express");
const userController = require("../controllers/musicController");

const userRouter = Router();

userRouter.post('/uploadsong', userController.UploadSong)
userRouter.get('/musicList', userController.GetSongs)
userRouter.get('/images', userController.GetImagesList)

module.exports = userRouter;
