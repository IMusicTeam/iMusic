import React from "react";
import player from './../../Assets/images/player.png'

function AudioPlayer() {
  return <div className="flex flex-row items-center pt-[102px] pl-[44px] pb-[77px] bg-iGray2 shadow-2xl shadow-solid shadow-iBlack">
    <img  src={player} alt="image" className="max-w-[783px] max-h-[731px] rounded-2xl"/>
  </div>;
}
export default AudioPlayer;
