import React, { useEffect, useState } from "react";
import likedImage from "../../Assets/images/likedImage.png";
import { BsFillShareFill, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiShuffle } from "react-icons/fi";
import { MdDownloadDone } from "react-icons/md";
import { BiLeftArrowAlt } from "react-icons/bi";
import "../LikedPlayList/LikedPlayList.css";
import Loadingforimusic from "./../../Assets/Loadingforimusic.gif";
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
import defaultImage from "../../Assets/images/imageDefault.png";
import Card10 from "../../Assets/Assets/CardImages/Card10.png";
import axios from "axios";
import { useNavigate } from "react-router";
import { APIConstants, assetURL, baseURL } from "../../Services/api-constants";
import { useSelector } from "react-redux";
import edit from "../../Assets/EditIcon.png";
import images from "../../Assets/images/player.png";
import Success from "../../Assets/Assets/CardImages/Success.png";
import {  uploadImage } from "../../helpers/hooks";

function LikedPlayList() {
  const userId = useSelector((store) => store.ReduxSlice.data.userData._id);

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

  const navigateTO=useNavigate();
  const HandelSeeAll=(value)=>{
    const {path, title}=value
    navigateTO(`/see-all/${path}`,{
      state:title
    })
  }

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
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    axios
      .get(
        baseURL + "get-all-favourites?userID=" + userData._id
      )
      .then(async (res) => {
        const musicWithDurations = await Promise.all(
          res.data.data[0].allSongs.map(async (music) => {
            const audio = new Audio(assetURL + music.tune[0]);
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
  const [payload, setPayload] = useState({
    userId: "",
    songId: "",
    image: "",
    name: "",
    description: "",
  });
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

  const fileUploadHandler = async (event, hook, properties) => {
    const hasFiles = event.target.files
    if (hasFiles.length > 0) {
      Promise.all(
        Object.values(hasFiles)?.map((file) => {
          const formData = new FormData();
          formData.append("file", file);
          return uploadImage(formData);
        })
      )
        .then((values) => {
          const images = values.map(({ data }) => data.link);
           setImage(images[0]);
          if(properties) {
            properties(true)
          }
        })
        .catch((ex) => {})
        .finally(() => {
          setTimeout(() => {
          }, 2000);
        });
    }
  };
  // const fileUploadHandler = async (event) => {
  //   const file = event.target.files;
  //   if (file.length > 0) {
  //     let formData = new FormData();
  //     formData.append("file", file[0]);
  //     const response = await fetch(APIConstants.fileUpload, {
  //       method: "POST",
  //       body: formData,
  //     });
  //     const json = await response.json();
  //     const validateJSON = json && json?.data ? json.data : "";
  //     if (!image) {
  //       setImage(validateJSON);
  //     }
  //   }
  // };
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
      .get(baseURL + "get-all-playlist?userId=" + userId)
      .then((res) => {
        const data = res.data.data[0].allPlaylist;
        setListData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-[705px]">
          <img src={Loadingforimusic} alt="" />
        </div>
      ) : (
        <div className="bg-iGray2">
          <div className="h-[389px] bg-iLightBlue pl-[142px]">
            <h3 className="text-iOrange font-medium text-[28px] mb-[28px]">
             <span>
             <button className="mt-3 -ml-20" type="button" onClick={() => navigateTo("/home")}>
             <BiLeftArrowAlt size={38} className=" text-iBlack" />
              </button>
              </span> 
              <span className="mt-6 ml-6">Liked Songs {duration}</span>
            </h3>
            <div className="flex">
              <img
                src={likedImage}
                className="h-[360px] w-[316px] border-iOrange rounded"
                alt="liked"
              />
              <div className="ml-12">
                <h1 className="text-iBlack text-[35px]">
                  The Weekend
                </h1>
                <p className="text-base text-iBlack w-[248px]">
                  It's Created by you and tune into your hottest songs!!!
                </p>
                <div className="flex gap-5 mb-[40px] mt-12">
                  <BsFillShareFill className="text-iOrange h-6 w-[21px]" />
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
                        src={assetURL + item.songThumbnail}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-lg text-iGray1">
                          {item.songName}
                        </span>
                        <span className="text-xl font-medium text-iBlack">
                          {item.artistName}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg text-iGray1">Album</span>
                        <span className="text-xl font-medium text-iBlack">
                          {item.albumName}
                        </span>
                      </div>
                      <div className="text-xl text-iOrange">
                        {formatDuration(item.duration)} Min
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
                      <div
                        onMouseEnter={() => handleMouseEnter(item._id)}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                      >
                        <BsThreeDotsVertical className="h-6 text-iOrange" />
                        {item._id === storeId && (
                          <ul className="cursor-pointer dropdown">
                            <li onClick={() => AddToPlayList(item)}>
                              Add to Playlist
                            </li>
                            <li>Report</li>
                          </ul>
                        )}
                      </div>
                      {showCard && (
                        <div className="processingCont">
                            {step === 0 && (
                              <>
                          <div className="w-[610px]  bg-iWhite rounded-[20px] shadow-2xl absolute !top-[140px] left-[655px]">
                                <button onClick={BackArrowFunction}>
                                  <BiLeftArrowAlt
                                    size={38}
                                    className="mt-[28px] ml-[32px]"
                                  />
                                </button>
                                <div className="pb-5">
                                  <div className="flex flex-col items-center justify-center gap-8">
                                    <div className="text-iBlue text-[28px] -mt-[28px]">
                                      Add To PlayList
                                    </div>
                                    <div
                                      onClick={UploadPlayList}
                                      className="border-dashed border-4 border-cm2 px-[90px] py-[15px] rounded-lg text-[20px] cursor-pointer hover:bg-ibm8"
                                    >
                                      <span className="text-iBlue mr-1 text-[30px]">
                                        +
                                      </span>{" "}
                                      Create New playlist
                                    </div>
                                  </div>

                                  <p className="text-[18px] text-iBlue mt-8 font-medium px-[51px]">
                                    Your Collections
                                  </p>
                                  <div className="flex flex-col gap-2 mt-[17px] px-[51px] h-[370px] overflow-y-scroll">
                                    {listData.map((item, i) => {
                                      return (
                                        <div
                                          onClick={() => UpdatePlayList(item)}
                                          className="flex flex-row items-center justify-start cursor-pointer gap-7 hover:bg-ibm8 rounded-[12px]"
                                        >
                                          <img
                                            src={assetURL + item.image}
                                            alt=""
                                            className="w-[86px] h-[86px] rounded-[4px]"
                                          />
                                          <p>{item.name}</p>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                                </div>
                              </>
                            )}

                            {step === 1 && (
                          <div className="w-[610px]  bg-iWhite rounded-[20px] shadow-2xl absolute !top-[140px] left-[655px]">
                                 <>
                                  <button onClick={() => setStep(0)}>
                                    <BiLeftArrowAlt
                                      size={38}
                                      className="mt-[28px] ml-[32px]"
                                    />
                                  </button>
                                  <div className="flex flex-col gap-[30px] items-center justify-center">
                                    <div className="text-iBlue text-[28px] -mt-[28px]">
                                      Add To PlayList
                                    </div>
                                    <div className="w-[156px] h-[165px] border-iBlue relative border-2 rounded-2xl flex flex-row items-center justify-center">
                                      {!image ? (
                                        <img
                                          src={defaultImage}
                                          alt=""
                                          className="w-[43px] h-[43px]"
                                        />
                                      ) : (
                                        <img
                                          src={assetURL + image}
                                          alt=""
                                          className="w-[153px] h-[163px] rounded-2xl"
                                        />
                                      )}
                                      <label htmlFor="upload-image-inp">
                                        <div className=" upload-img-div glass_effect glass_effect_border">
                                          <span className="p-1 pl-2  bg-iWhite absolute -bottom-[13px] -right-[17px]">
                                            <img
                                              src={edit}
                                              className="w-[21px] h-[21px]"
                                              alt=""
                                            />
                                          </span>
                                          <input
                                            type="file"
                                            id="upload-image-inp"
                                            onChange={fileUploadHandler}
                                            // accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mp3, .mkv, .ogg, .wmv"
                                            className="mt-2 mb-5 upload_text_inp"
                                          />
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-4 mx-[15px] mt-7 mb-[30px] pl-[51px]">
                                    <div>
                                      <label
                                        for="first_name"
                                        class="block mb-2 text-[20px] text-iBlue"
                                      >
                                        Playlist Name
                                      </label>
                                      <input
                                        value={playListName}
                                        onChange={(e) =>
                                          setPlayListName(e.target.value)
                                        }
                                        type="text"
                                        id="first_name"
                                        class="bg-gray-50 border w-[508px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                                        placeholder="Playlist Name"
                                      />
                                    </div>

                                    <div>
                                      <label
                                        for="first_name"
                                        class="block mb-2 text-[20px] text-iBlue"
                                      >
                                        Description
                                      </label>
                                      <textarea
                                        value={description}
                                        onChange={(e) =>
                                          setDescription(e.target.value)
                                        }
                                        id="message"
                                        rows="4"
                                        class="block p-2.5 w-[508px] h-[130px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                                        placeholder="Description"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <button
                                    onClick={AddNewPlayList}
                                    className="py-3 w-[305px] hover:bg-iOrange mb-[20px] center bg-iBlue rounded-[30px] text-iWhite text-[20px] ml-[165px]"
                                  >
                                    Save
                                  </button>
                                </>
                              </div>
                            )}
                            {step === 2 && (
                              <div className="flex flex-row justify-center mt-56 mb-28 ">
                                <div className="w-[610px] bg-iWhite rounded-[20px] shadow-2xl p-[38px] flex flex-col items-center">
                                  <img
                                    src={Success}
                                    alt="success"
                                    className="w-[88px] h-[88px] mb-[38px]"
                                  />
                                  <span className=" text-[28px] font-bold text-center w-[452px]">
                                    Your Song has been Added successfully
                                  </span>
                                  <button
                                    onClick={Back}
                                    className=" mt-8 py-3 px-10 border border-[#295D93] rounded-md hover:border-iWhite bg-iBlue hover:bg-iOrange text-iWhite"
                                  >
                                    Done
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pr-8">
          <div className="pl-8">
            <h1 className="pl-3 text-3xl font-medium text-iBlack mb-7">
              Suggested For You
            </h1>
            <div className="flex flex-row xl:gap-[41px] p-3 1xl:gap-[74px] 2xl:gap-[24px] 3xl:gap-[34px] 4xl:gap-[26px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
              {data.map((item) => {
                return (
                  <div>
                    <ProfileCard data={item} src={item.src} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-row justify-between mb-5">
            <h1 className="text-[30px] font-medium mt-[28px]">
              
            </h1>
            <h5 onClick={()=>HandelSeeAll({path:'suggested-for-you',title:'Suggested For You'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px] cursor-pointer'>See All</h5>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
export default LikedPlayList;
