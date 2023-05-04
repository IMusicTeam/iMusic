import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
// import qala from "./../../Assets/Ori-Vaari.mp3"; // importing the music
import "./Playing.css";
import { useLocation } from "react-router";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import axios from "axios";
function Playing() {
  const location = useLocation();
  const data = location.state;
  const [isLiked, setIsLiked] = useState(true);
  const [player, setPlayer]=useState(data)
  useEffect(()=>{
    setPlayer(data)
  },[data])
const HandelLikeSong =()=>{
  setIsLiked(!isLiked)
  const payload ={
    userID:"Shahul123",
    songId:data._id
  }
axios.post("http://localhost:3000/IMusic/save-as-favourites", payload).then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err.message)
})
}
  return (
    <div className="py-1 pb-[54px] bg-gradient-to-r from-orange-100 via-orange-300 to-orange-300">
      <div className="component flex flex-col justify-center items-center gap-[10px] drop-shadow-xl relative ">
        <div className="text-[28px] text-iWhite pt-5 pb-1 font-bold w-full max-w-[600px] bg-[#295D93] rounded-t-[28px] pb-[192px] text-white flex items-center justify-center">
          Playing Now
        </div>
        <div className="absolute z-1 top-[126px]">
          <img
            className="musicCover max-w-[280px] h-[190px]"
            src={player.songThumbnail}
            alt="image"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-[10px] bg-[#ee8c15] rounded-[28px] w-full max-w-[600px] -mt-[32px] pb-9">
          <div className="mt-[90px]">
            <h3 className="text-iWhite font-bold text-[30px] p-3">
              {player?.songName}
            </h3>
            {/* <p className="subTitle">Qala</p> */}
          </div>
          <div className="relative">
            <div>
            <ReactAudioPlayer
              src={player.tune[0]}
              className="custom-audio-player" // Add your own class name here
              controls
            />
            </div>
            <button onClick={HandelLikeSong} className="absolute top-[43px] left-[16px]">{isLiked ? <FcLikePlaceholder  size={30}/> : <FcLike size={30}/>}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Playing;
