import React from "react";
import { FiShuffle } from "react-icons/fi";
import image from "./../../Assets/image1.png";
import { BsFillPlayFill } from "react-icons/bs";
import HomeCard1 from "../../Assets/Assets/CardImages/HomeCard1.png"
import HomeCard2 from "../../Assets/Assets/CardImages/HomeCard2.png"
import rounded1 from "../../Assets/Assets/CardImages/Rounded1.png";
import rounded2 from "../../Assets/Assets/CardImages/Rounded2.png";
import rounded3 from "../../Assets/Assets/CardImages/Rounded3.png";
import rounded4 from "../../Assets/Assets/CardImages/Rounded4.png";
import rounded5 from "../../Assets/Assets/CardImages/Rounded5.png";
import AlbumsCard1 from "../../Assets/Assets/CardImages/AlbumsCard6.png";

import "./RecentlyPlayed.css"

function RecentlyPlayed() {
  const data = [
    { id: 1, src: rounded1,smallTitle : "Taylor Swift",
    title:"Shake it Off"},
    { id: 2, src: rounded2,smallTitle : "Weekend",
    title:"Play Boy"},
    { id: 3, src: rounded3,smallTitle : "Sam Fisher",
    title:"Willow"},
    { id: 4, src: rounded4,smallTitle : "Ariana Grande",
    title:"This City"},
    { id: 5, src: rounded5,smallTitle : "Taylor Swift",
    title:"Side to Side"},
   
  ]
  
  return (
    <div className="px-[34px] py-[42px] bg-iGray2">
      <div className="flex flex-col gap-[28px] 3.5xl:flex-row">
        <div className="w-full p-[17px] bg-iWhite rounded-2xl 3.5xl:max-w-[752px] border-solid border-iOrange border-[0.5px]">
        <div className="flex flex-row items-center justify-between pb-[28px]">
          <h1 className="text-[28px]">Recently Played</h1>
          <div className="flex flex-row gap-[22px]">
            <div>
              <button class="bg-transparent hover:bg-iLightBlue text-iBlue font-medium py-2 px-4 border border-iBlue hover:border- hover:text-iDarkBlue hover:border-transparent rounded">
                Play All
              </button>
            </div>
            <div>
              <button class="flex flex-row items-center bg-transparent hover:bg-iLightBlue text-iBlue font-medium py-2 px-4 border border-iBlue hover:border- hover:text-iDarkBlue hover:border-transparent rounded">
                <div>Shuffle </div>
                <div>
                  <FiShuffle />{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
        {data.map((item) => {
          return (
            <div className="px-[23px]">
              <hr className="text-iLightBlue" />
              <div className="flex flex-row justify-between gap-[255px]">
                <div className="w-[204px] flex flex-row items-center gap-5 p-1">
                  <div>
                    <img
                      src={item.src}
                      alt=""
                      className="w-[64px] h-[64px]"
                    />
                  </div>
                  <div>
                    <p className="text-iGray1 text-[18px]">{item.smallTitle}</p>
                    <p className="text-[20px]">{item.title}</p>
                  </div>
                </div>
                <div className=" flex flex-row gap-[64px] items-center">
                  <p className="text-iOrange">3:40 Min</p>
                  <button>
                    <BsFillPlayFill className="w-12 h-12 pl-1 hover:duration-500 hover:delay-100 text-iBlue hover:bg-iBlue hover:scale-110 hover:text-iWhite hover:rounded-full" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        <div className="flex gap-[30px] 3xl:gap-[70px] 3.5xl:gap-[30px]">
        <div className="relative transition duration-300 ease-in-out delay-150 hover:translate-x-1 hover:scale-80">
            <img src={HomeCard1} alt="owned" className="w-[387px] h-[492px] rounded-2xl"/>
       <p className="4xl:text-[55px] leading-[70px] px-[65px] absolute top-[107px] text-iWhite shadow-[12px] drop-shadow-2xl transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-shadow 2xl:text-[45px] 1.5xl:text-[40px] 1xl:text-[38px] 5xl:text-[50px] xl:text-[50px]">Listen to your Purchased Music</p>
        </div>
        <div className="relative transition duration-300 ease-in-out delay-150 hover:translate-x-1 hover:scale-80">
            <img src={HomeCard2} alt="owned" className="w-[387px] h-[492px] rounded-2xl"/>
       <p className="4xl:text-[55px] leading-[70px] px-[85px] absolute top-[107px] text-iWhite shadow-[12px] drop-shadow-2xl  transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-shadow 2xl:text-[45px] 1.5xl:text-[40px] 1xl:text-[38px] 5xl:text-[50px] xl:text-[50px]">Listen to your Owned Music</p>
        </div>
        <div className="relative transition duration-300 ease-in-out delay-150 hover:translate-x-1 hover:scale-80 hidden 1xl:block 3.5xl:hidden">
            <img src={AlbumsCard1} alt="owned" className="w-[387px] h-[492px] rounded-2xl"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyPlayed;
