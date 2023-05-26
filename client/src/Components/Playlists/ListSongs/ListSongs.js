import React, { useEffect, useState } from "react";
import likedImage from "../../../Assets/images/likedImage.png";
import { BsFillShareFill, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
import { MdDownloadDone } from "react-icons/md";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./ListSongs.js";
import Loader from "../../../Assets/Loadingforimusic.gif";
import Card1 from "../../../Assets/Assets/CardImages/Card1.png";
import Card2 from "../../../Assets/Assets/CardImages/Card2.png";
import Card3 from "../../../Assets/Assets/CardImages/Card3.png";
import Card4 from "../../../Assets/Assets/CardImages/Card4.png";
import Card5 from "../../../Assets/Assets/CardImages/Card5.png";
import Card6 from "../../../Assets/Assets/CardImages/Card6.png";
import Card7 from "../../../Assets/Assets/CardImages/Card7.png";
import Card8 from "../../../Assets/Assets/CardImages/Card8.png";
import Card9 from "../../../Assets/Assets/CardImages/Card9.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import edit from "../../../Assets/EditIcon.png";
import images from "../../../Assets/images/player.png";
import verified from "../../../Assets/Assets/CardImages/Verified.png";
import ProfileCard from "../../musicCarosal/ProfileCrad/ProfilesCard";
import { APIConstants } from "../../../Services/api-constants";
import contractInstance from "../../../web3";
import { ethers } from "ethers";

function ListSongs() {
  const userId = useSelector((store) => store.ReduxSlice.data.userData._id);
  const isAdmin = useSelector((store) => store.ReduxSlice.data.userData.isAdmin);
  const {metaMaskDetails} = useSelector((store) => store.ReduxSlice.data);

  const list = useLocation()
  const details = list.state
  const [download, setDownload] = useState(false);
  const [likedData, setLikedData] = useState();
  const navigateTo = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [loader, setLoader] = useState(false);
  const [storeId, setStoreID] = useState("");
  const { userData } = useSelector((store) => store.ReduxSlice.data);
  const [showCard, setShowCard] = useState(false);

  const handleMouseEnter = (id) => {
    if (id?.bubbles) {
      setShowDropdown(true);
    } else {
      setStoreID(id);
    }
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setStoreID("");
  };

  function changeDownload() {
    setDownload((prev) => !prev);
  }

  const [duration, setDuration] = useState(null);
  const [payload, setPayload] = useState({
    userId: "",
    songId: "",
    image: "",
    name: "",
    description: "",
  });
  const getDuration = async () => {
    const musicWithDurations = await Promise.all(
      details.songs.map(async (music) => {
        const audio = new Audio(music.tune[0]);
        const duration = await new Promise((resolve) => {
          audio.addEventListener("loadedmetadata", () => {
            resolve(audio.duration);
          });
        });
        return { ...music, duration };
      })
    );
    setLikedData(musicWithDurations);
    setLoader(false);
  }
  useEffect(() => {
    getDuration()
  }, []);

  function formatDuration(duration) {
    const minutes = Math.round(duration / 60);
    const seconds = Math.round(duration % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  const AddToPlayList = (song) => {
    setStep(0)
    const result = { ...payload, songId: song._id, userId: userId };
    setPayload(result);
    setShowCard(!showCard);
  };
  const BackArrowFunction = () => {
    setShowCard(false);
  };
  // const [uploadList, setUploadList] =useState(false)
  const [step, setStep] = useState(0);
  const [image, setImage] = useState();
  const [playListName, setPlayListName] = useState("");
  const [description, setDescription] = useState("");

  const UploadPlayList = () => {
    setStep(1);
  };
  const fileUploadHandler = async (event) => {
    const file = event.target.files;
    if (file.length > 0) {
      let formData = new FormData();
      formData.append("file", file[0]);
      const response = await fetch(APIConstants.fileUpload, {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      const validateJSON = json && json?.data ? json.data : "";
      if (!image) {
        setImage(validateJSON);
      }
    }
  };
  const AddNewPlayList = () => {
    const result = {
      ...payload,
      name: playListName,
      description: description,
      image: image,
    };
    axios
      .post(APIConstants.saveasplaylist, result)
      .then((res) => {
        console.log(res);
        setStep(2);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [listData, setListData] = useState([]);

  useEffect(() => {
    axios
      .get(APIConstants.getAllPendingSongs)
      .then((res) => {
        // debugger
        const data = res.data.data;
        setLikedData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleTransfer = async (walletId) => {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      try {
        const value = ethers.utils.parseEther("2");
        const res = await contractInstance.methods
          .sendMoney(walletId)
          .send({
            from: accounts[0],
            value: value,
          });
        console.log(res);
      } catch (err) {
        alert(err);
      }
    }

  const UpdatePlayList = (item) => {
    const { songId, userId } = payload;
    const result = {
      name: item.name,
      userId: userId,
      songId: songId,
    };
    axios
      .put(APIConstants.updatePlaylist, result)
      .then((res) => {
        if(res.data.message){
        }
        const data = res.data.data[0].allPlaylist;
        setListData(data);
        setStep(2);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const Back = () => {
    setShowCard(false);
  };
  const ApproveSong =(item)=>{
    axios
      .post(`${APIConstants.approveSong}${item._id}&adminWalletId=${metaMaskDetails.account}`)
      .then((res) => {
        handleTransfer(item.userWalletId)
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-[705px]">
          <img src={Loader} alt="" />
        </div>
      ) : (
        <div className="bg-iGray2 pt-9">
          <div className="h-[389px] bg-iLightBlue pl-[142px] border-iGray4 border">
            <h3 className="text-iOrange font-semibold text-[28px] mb-[28px] mt-12">
              {details.name}
            </h3>
            <div className="flex">
              <img
                src={details.image}
                className="h-[360px] w-[316px] border-iOrange rounded-2xl border-2"
                alt="liked"
              />
              <div className="ml-12">
                <h1 className="text-iBlack text-[35px] font-semibold">
                  The Weekend
                </h1>
                <p className="text-base text-iBlack w-[248px] font-semibold ">
                  {details.description}
                </p>
                <div className="flex gap-5 mb-[40px] mt-12">
                  <BsFillShareFill className="text-iOrange h-6 w-[21px]" />
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <BsThreeDotsVertical size={30} className="h-6 text-iOrange" />
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
            <div className="h-[400px] flex flex-col gap-4 overflow-y-scroll musicList mb-5">
              {likedData?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="w-full listed-rows">
                      <img
                        src={item.songThumbnail}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-lg text-iGray1">
                          {item.songName}
                        </span>
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
                        {/* {formatDuration(item.duration)} Min */}
                      </div>

                      <div>
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

                     {item.userWalletId !== metaMaskDetails?.account &&<div>
                      <button onClick={() => ApproveSong(item)} className="py-2.5 bg-iBlue text-iWhite px-4 rounded-[17px] tracking-wide hover:bg-iOrange">APPROVE</button>
                      </div>}
                    
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
      )}
    </>
  );
}
export default ListSongs;


const data = [
  { id: 1, src: Card1, playlist: "Mine", album: "Radio" },
  { id: 2, src: Card6, playlist: " Top Hits of 2000", album: "Radio" },
  { id: 3, src: Card7, playlist: "Old School", album: "Radio" },
  { id: 4, src: Card8, playlist: "Smile Vol.1", album: "Radio" },
  { id: 5, src: Card9, playlist: "Good Music for Bad Days", album: "Radio" },
  { id: 6, src: Card1, playlist: "Freedom", album: "Radio" },
  { id: 7, src: Card2, playlist: "Everything From Drake", album: "Radio" },
  { id: 8, src: Card3, playlist: "Sunset Days", album: "Weekend" },
  { id: 9, src: Card4, playlist: "XXXtention", album: "Radio" },
  {
    id: 10,
    src: Card5,
    playlist: " EveryThing from Taylor",
    album: "Weekend",
  },
];