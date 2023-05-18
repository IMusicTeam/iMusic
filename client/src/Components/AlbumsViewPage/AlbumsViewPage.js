import React, { useEffect, useState } from "react";
import likedImage from "../../Assets/images/likedImage.png";
import { BsFillShareFill, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
import { MdDownloadDone } from "react-icons/md";
import "../LikedPlayList/LikedPlayList.css";
import { IoMdArrowBack } from "react-icons/io";
import Loadingforimusic from "./../../Assets/Loadingforimusic.gif"
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import Card1 from "../../Assets/Assets/CardImages/Card1.png";
import Card2 from "../../Assets/Assets/CardImages/Card2.png";
import Card3 from "../../Assets/Assets/CardImages/Card3.png";
import Card4 from "../../Assets/Assets/CardImages/Card4.png";
import Card5 from "../../Assets/Assets/CardImages/Card5.png";
import Card6 from "../../Assets/Assets/CardImages/Card6.png";
import Card7 from "../../Assets/Assets/CardImages/Card7.png";
import Card8 from "../../Assets/Assets/CardImages/Card8.png";
import Card9 from "../../Assets/Assets/CardImages/Card9.png";
import Card10 from "../../Assets/Assets/CardImages/Card10.png";
import rounded1 from "../../Assets/Assets/CardImages/Rounded1.png";
import rounded2 from "../../Assets/Assets/CardImages/Rounded2.png";
import rounded3 from "../../Assets/Assets/CardImages/Rounded3.png";
import rounded4 from "../../Assets/Assets/CardImages/Rounded4.png";
import rounded5 from "../../Assets/Assets/CardImages/Rounded5.png";
import rounded6 from "../../Assets/Assets/CardImages/Rounded6.png";
import rounded7 from "../../Assets/Assets/CardImages/Rounded7.png";
import rounded8 from "../../Assets/Assets/CardImages/Rounded8.png";
import rounded9 from "../../Assets/Assets/CardImages/Rounded9.png";
import rounded10 from "../../Assets/Assets/CardImages/Rounded10.png";
import AlbumView from "../../Assets/Assets/CardImages/AlbumView.png"
import { useNavigate } from "react-router";

function AlbumsViewPage() {
  const [download, setDownload] = useState(false);
  const navigateTo = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  function changeDownload() {
    setDownload((prev) => !prev);
  }
  const datas = [
    {
      image: rounded1,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded2,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded3,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded4,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded5,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded6,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded7,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded8,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded9,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded10,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded1,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded2,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded3,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded4,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded5,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded6,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded7,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded8,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded9,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: rounded10,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
    {
      image: likedImage,
      text1: "Taylor Swift",
      text2: "Shake it off",
      year: 1989,
    },
  ];
  const data = [
    { id: 1, src: Card1,playlist:"Mine",album:"Radio"},
    { id: 2, src: Card6,playlist:" Top Hits of 2000",album:"Radio"},
    { id: 3, src: Card7 ,playlist:"Old School",album:"Radio"},
    { id: 4, src: Card8,playlist:"Smile Vol.1",album:"Radio"},
    { id: 5, src: Card9,playlist:"Good Music for Bad Days",album:"Radio"},
    { id: 6, src: Card1,playlist:"Freedom",album:"Radio"},
    { id: 7, src: Card2,playlist:"Everything From Drake",album:"Radio"},
    { id: 8, src: Card3,playlist:"Sunset Days",album:"Weekend"},
    { id: 9, src: Card4,playlist:"XXXtention",album:"Radio"},
    { id: 10, src: Card5,playlist:" EveryThing from Taylor",album:"Weekend"},
  ];
  const [duration, setDuration] = useState(null);

 

  function formatDuration(duration) {
    const minutes = Math.round(duration / 60);
    const seconds = Math.round(duration % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  return (
    <>
    <div className="bg-iGray2">
    <button type="button" onClick={() => navigateTo(`/`)}>
        <IoMdArrowBack className="w-6 h-6 ml-[35px] " />
      </button>
      <div className="h-[389px] bg-[#DEEEFF] pl-[142px] border-[#EEEEEE] border">
      
        <h3 className="text-iOrange font-medium text-[28px] mb-[28px] mt-12">
          Albums
        </h3>
        <div className="flex">
          <img
            src={AlbumView}
            className="h-[360px] w-[316px] border-iOrange rounded"
            alt="liked"
          />
          <div className="ml-12">
            <h1 className="text-iBlack text-[35px] font-medium">
            Music
            </h1>
            <p className="text-base text-iBlack w-[248px] font-medium ">
            It's Created by you and tune into your hottest songs!!!
            </p>
            <div className="flex gap-5 mb-[40px] mt-12">
              <AiOutlineHeart className="h-7 w-7 text-iOrange"/> 
              <BsFillShareFill className="text-iOrange h-6 w-[21px]" />
              <button type="button" onClick={changeDownload}>
                {!download ? (
                  <AiOutlineDownload className="w-6 h-6 text-iOrange" />
                ) : (
                  <MdDownloadDone className="w-6 h-6 text-iOrange" />
                )}
              </button>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <BsThreeDotsVertical className="h-6 text-iOrange" />
                {showDropdown && (
                  <ul className="dropdown">
                    <li>Add to Queue</li>
                    <li>Add to Profile</li>
                    <li>Add to Playlist</li>
                    <li>Add to Library</li>
                    <li>Report</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="flex gap-6">
            <button className="mt-3 w-[80px] h-[80px] bg-iOrange rounded-full border-indigo-600">
              <BsFillPlayFill className="pl-1 w-[55px] h-[130px] pauseIcon text-iWhite" />
            </button>
              <button className="w-[102px] h-[38px] mt-9 text-iBlue border border-iBlue rounded flex justify-center items-center  bg-iWhite hover:bg-iLightBlue">
                Shuffle <FiShuffle />
              </button>
            </div>
          </div>
        </div>
      </div>
       <div className="pl-[142px] pt-[139px] pr-14">
        <div className="h-[864px] overflow-y-auto musicList mb-5">
          {datas?.map((item, index) => {
            return (
              <div key={index}>
                <div className="w-full listed-rows">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg text-iGray1">{item.text1}</span>
                    <span className="text-xl font-medium text-iBlack">
                      {item.text2}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg text-iGray1">Album</span>
                    <span className="text-xl font-medium text-iBlack">
                      {item.year}
                    </span>
                  </div>
                  <div className="text-xl text-iOrange">
                    3.40 Min
                  </div>
                  <button
                    onClick={() =>
                      navigateTo("/playing-music", {
                        state: item,
                      })
                    }
                  >
                    <BsFillPlayFill className="w-12 h-12 pl-1 hover:duration-500 hover:delay-100 text-iBlue hover:bg-iBlue hover:scale-110 hover:text-iWhite hover:rounded-full" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[142px]">
        <h1 className="text-3xl font-medium text-iBlack mb-7">
          Suggested Videos
        </h1>
        <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {data.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
export default AlbumsViewPage;
