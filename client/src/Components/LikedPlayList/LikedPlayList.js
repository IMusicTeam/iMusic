import React from "react";
import likedImage from "../../Assets/images/likedImage.png";
import { AiFillHeart } from "react-icons/ai";
import { BsFillShareFill, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
import "../LikedPlayList/LikedPlayList.css";

function LikedPlayList() {
  const data = [
    {
      image: { likedImage },
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: { likedImage },
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: { likedImage },
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: { likedImage },
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: { likedImage },
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: { likedImage },
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: { likedImage },
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
  ];
  return (
    <div className="bg-[#EEEEEE] h-screen">
      <div className="h-[389px] bg-[#DEEEFF] pl-[142px] border-[#707070] border">
        <h3 className="text-[#EA7525] font-semibold text-[28px] mb-[28px]">
          Liked Songs
        </h3>
        <div className="flex">
          <img
            src={likedImage}
            className="h-[360px] w-[316px] border-[#EA7525] rounded"
            alt="liked"
          />
          <div className="ml-12">
            <h1 className="text-[#242424] text-[35px] font-semibold">
              The Weekend
            </h1>
            <p className="text-base text-[#242424] w-[248px] font-semibold ">
              It's Created by you and tune into your hottest songs!!!
            </p>
            <div className="flex gap-5 mb-[40px] mt-12">
              <AiFillHeart className="text-[#D45858] h-6 w-7" />
              <BsFillShareFill className="text-[#EA7525] h-6 w-[21px]" />
              <AiOutlineDownload className="text-[#EA7525] h-6 w-6" />
              <BsThreeDotsVertical className="text-[#EA7525] h-6" />
            </div>
            <div className="flex gap-6">
              <button className="w-[102px] h-[38px] text-[#295D93] border border-[#295D93] rounded bg-[#FFFFFF] hover:bg-[#DEEEFF]">
                Play All
              </button>
              <button className="w-[102px] h-[38px] text-[#295D93] border border-[#295D93] rounded flex justify-center items-center  bg-[#FFFFFF] hover:bg-[#DEEEFF]">
                Shuffle <FiShuffle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[142px] pt-[139px] pr-14">
        <div className="h-[300px] overflow-y-auto musicList">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="listed-rows">
                  <img
                    src={likedImage}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-[#767676] text-lg">Taylor Swift</span>
                    <span className="text-[#242424] text-xl font-semibold">
                      Shake it Off!
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#767676] text-lg">Album</span>
                    <span className="text-[#242424] text-xl font-semibold">
                      1989
                    </span>
                  </div>
                  <div className="text-[#EA7525] text-xl">3:40 Min</div>
                  <BsFillPlayFill className="w-12 h-12 pl-1 hover:duration-500 hover:delay-100 text-iBlue hover:bg-iBlue hover:scale-110 hover:text-iWhite hover:rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default LikedPlayList;
