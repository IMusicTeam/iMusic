import React, { useEffect, useState } from "react";
import likedImage from "../../Assets/images/likedImage.png";
import { BsFillShareFill, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
import { MdDownloadDone } from "react-icons/md";
import "../LikedPlayList/LikedPlayList.css";
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import Card1 from '../../Assets/Assets/CardImages/Card1.png';
import Card2 from '../../Assets/Assets/CardImages/Card2.png';
import Card3 from '../../Assets/Assets/CardImages/Card3.png';
import Card4 from '../../Assets/Assets/CardImages/Card4.png';
import Card5 from '../../Assets/Assets/CardImages/Card5.png';
import Card6 from '../../Assets/Assets/CardImages/Card6.png';
import Card7 from '../../Assets/Assets/CardImages/Card7.png';
import Card8 from '../../Assets/Assets/CardImages/Card8.png';
import Card9 from '../../Assets/Assets/CardImages/Card9.png';
import Card10 from '../../Assets/Assets/CardImages/Card10.png';
import axios from "axios";
import { useNavigate } from "react-router";

function LikedPlayList() {
  const [download, setDownload] = useState(false);
  const [likedData, setLikedData] = useState();
  const navigateTo = useNavigate();
  function changeDownload() {
    setDownload((prev) => !prev);
  }
  const datas = [
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
  const data = [
    { id: 1, src: Card1},
    { id: 2, src: Card2},
    { id: 3, src: Card3},
    { id: 4, src: Card4},
    { id: 5, src: Card5},
    { id: 6, src: Card6},
    { id: 7, src: Card7},
    { id: 8, src: Card8 },
    { id: 9, src: Card9},
    { id: 10, src: Card10}
  ]
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/IMusic/liked-songs")
      .then(async (res) => {
        const musicWithDurations = await Promise.all(
          res.data.data.map(async (music) => {
            const audio = new Audio(music.audio);
            const duration = await new Promise((resolve) => {
              audio.addEventListener("loadedmetadata", () => {
                resolve(audio.duration);
              });
            });
            return { ...music, duration };
          })
        );
        setLikedData(musicWithDurations);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function formatDuration(duration) {
    const minutes = Math.round(duration / 60);
    const seconds = Math.round(duration % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  return (
    <div className="bg-iGray2">
      <div className="h-[389px] bg-iLightBlue pl-[142px] border-iGray4 border">
        <h3 className="text-iOrange font-semibold text-[28px] mb-[28px] mt-12">
          Liked Songs {duration}
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
          {likedData?.map((item, index) => {
            return (
              <div key={index}>
                <div className="listed-rows w-[1477px]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg text-iGray1">{item.songName}</span>
                    <span className="text-xl font-semibold text-iBlack">
                      {item.artistName}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg text-iGray1">Album</span>
                    <span className="text-xl font-semibold text-iBlack">
                      {item.albumName}
                    </span>
                  </div>
                  <div className="text-xl text-iOrange">
                    {formatDuration(item.duration)} Min
                  </div>
                  <button
                    onClick={() =>
                      navigateTo("/playing-music", {
                        state: item
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
        <h1 className="text-3xl font-semibold text-iBlack mb-7">
          Suggested Videos
        </h1>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
export default LikedPlayList;
