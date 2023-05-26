import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
// import qala from "./../../Assets/Ori-Vaari.mp3"; // importing the music
import "./Playing.css";
// import Loadingforimusic from "../../Assets/Loadingforimusic.gif"
import Loadingforimusic from "./../../../Assets/Loadingforimusic.gif"
import { useLocation } from "react-router";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import axios from "axios";
import { useSelector } from "react-redux";
import { APIConstants } from "../../../Services/api-constants";
function Playing() {
  const location = useLocation();
  const userId = useSelector((store)=>store.ReduxSlice.data.userData._id)

  const data = location.state;
  const [isLiked, setIsLiked] = useState(false);
  const [loader, setLoader] = useState(true);
  const [music, setMusic]=useState([])
  
const HandelLikeSong =()=>{
  const payload ={
    userID:userId,
    songId:data._id
  }
  if(music.show){
    axios.delete(APIConstants.removeFromFavourites, {data:payload}).then((res)=>{
    setIsLiked(false)
    const result = { ...music, show: false};
    setMusic(result)
      console.log(res)
    }).catch((err)=>{
      console.log(err.message)
    }) 
  }else{
    axios.post(APIConstants.saveasfavourites, payload).then((res)=>{
      console.log(res)
      setIsLiked(true)
      const result = { ...music, show: true};
      setMusic(result)
    }).catch((err)=>{
      console.log(err.message)
    }) 
  }

}

useEffect(()=>{
  const payload ={
    userId:userId,
    _id:data._id
  }
  const queryParams = new URLSearchParams(payload).toString();
  axios.get(`http://localhost:3000/IMusic/get-song?${queryParams}`).then((res)=>{
    setMusic({show:res.data.favourited, data:[res.data.data]})
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.message)
    }) 
  setLoader(false)
},[])
  return (<>
    {loader ? <div className="flex justify-center items-center h-[705px]"><img src={Loadingforimusic}/></div> :
    <div className="h-[639px]">
      {music?.data?.map((item)=>{
      return(
        <div className="pb-[69px] mt-10 flex flex-row justify-center items-center bg-gradient-to-r from-orange-100 via-orange-300 to-orange-300">
      <div className="component m-0 flex flex-col justify-center items-center gap-[10px] drop-shadow-xl relative ">
        <div className="text-[28px] text-iWhite pt-5 pb-1 font-bold w-[500px] bg-[#295D93] rounded-t-[28px] pb-[192px] text-white flex items-center justify-center">
          Playing Now
        </div>
        <div className="absolute z-1 top-[126px]">
          <img
            className="musicCover w-[280px] h-[190px]"
            src={item.songThumbnail}
            alt="image"
          />
        </div>
  
        <div className="flex flex-col justify-center items-center gap-[10px] bg-[#ee8c15] rounded-[28px] w-[500px] -mt-[32px] pb-9">
          <div className="mt-[90px]">
            <h3 className="text-iWhite font-bold text-[30px] p-3">
              {item?.songName}
            </h3>
            {/* <p className="subTitle">Qala</p> */}
          </div>
          <div className="relative">
            <div>
            <ReactAudioPlayer
              src={item.tune[0]}
              className="custom-audio-player" // Add your own class name here
              autoPlay={true}
            />
            </div>
            <button onClick={HandelLikeSong} className="absolute top-[43px] left-[16px]">{music.show || isLiked?  <FcLike size={30}/>: <FcLikePlaceholder  size={30}/>}</button>
          </div>
        </div>
      </div>
    </div>
      )
    })}
    </div>
    }
    
  </>);
}
export default Playing;
