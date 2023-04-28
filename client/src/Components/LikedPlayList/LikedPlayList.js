import React, { useState } from "react";
import likedImage from "../../Assets/images/likedImage.png";
import { BsFillShareFill, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
import { MdDownloadDone } from "react-icons/md";
import "../LikedPlayList/LikedPlayList.css";
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";

function LikedPlayList() {
  const [download, setDownload] = useState(false);

  function changeDownload() {
    setDownload((prev) => !prev);
  }
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
  const cardData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];
  return (
    <div className="bg-iGray2">
      <div className="h-[389px] bg-iLightBlue pl-[142px] border-iGray4 border">
        <h3 className="text-iOrange font-semibold text-[28px] mb-[28px] mt-12">
          Liked Songs
        </h3>
        <div className="flex">
          <img
            src={likedImage}
            className="h-[360px] w-[316px] border-iOrange rounded"
            alt="liked"
          />
          <div className="ml-12">
            <h1 className="text-iBlack text-[35px] font-semibold">
              The Weekend
            </h1>
            <p className="text-base text-iBlack w-[248px] font-semibold ">
              It's Created by you and tune into your hottest songs!!!
            </p>
            <div className="flex gap-5 mb-[40px] mt-12">
              <BsFillShareFill className="text-iOrange h-6 w-[21px]" />
              <button type="button" onClick={changeDownload}>
                {!download ? (
                  <AiOutlineDownload className="w-6 h-6 text-iOrange" />
                ) : (
                  <MdDownloadDone className="w-6 h-6 text-iOrange" />
                )}
              </button>
              <BsThreeDotsVertical className="h-6 text-iOrange" />
            </div>
            <div className="flex gap-6">
              <button className="w-[102px] h-[38px] text-iBlue border border-iBlue rounded bg-iWhite hover:bg-iLightBlue">
                Play All
              </button>
              <button className="w-[102px] h-[38px] text-iBlue border border-iBlue rounded flex justify-center items-center  bg-iWhite hover:bg-iLightBlue">
                Shuffle <FiShuffle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[142px] pt-[139px] pr-14">
        <div className="h-[864px] overflow-y-auto musicList mb-5">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="listed-rows w-[1477px]">
                  <img
                    src={likedImage}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg text-iGray1">Taylor Swift</span>
                    <span className="text-xl font-semibold text-iBlack">
                      Shake it Off!
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg text-iGray1">Album</span>
                    <span className="text-xl font-semibold text-iBlack">
                      1989
                    </span>
                  </div>
                  <div className="text-xl text-iOrange">3:40 Min</div>
                  <BsFillPlayFill className="w-12 h-12 pl-1 hover:duration-500 hover:delay-100 text-iBlue hover:bg-iBlue hover:scale-110 hover:text-iWhite hover:rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[142px]">
        <h1 className="text-3xl font-semibold text-iBlack mb-7">
          Suggested Videos
        </h1>
        <div>
          <ProfileCard data={cardData} />
        </div>
      </div>
    </div>
  );
}
export default LikedPlayList;
