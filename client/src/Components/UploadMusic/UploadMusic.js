import React, { useState } from "react";
import axios from "axios";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import "./UploadMusic.css";
import images from "./../../Assets/images/player.png";
import { APIConstants } from "../../Services/api-constants";
import { useNavigate } from "react-router";
import verified from "../../Assets/Assets/CardImages/Verified.png";
import edit from "./../../Assets/EditIcon.png";
import Web3 from "web3";
import { useSelector } from "react-redux";
import uploadaudio from "../../Assets/images/uploadaudio.png"
import uploadaudio1 from "../../Assets/images/uploadaudio1.png"
import successaudio from "../../Assets/images/successaudio.png"
// require("dotenv").config();
const httpUrlKey = "HTTP://127.0.0.1:7545";

const web3 = new Web3(new Web3.providers.HttpProvider(httpUrlKey));

function UploadMusic() {
  const { metaMaskDetails, adminDetails, userData } = useSelector(
    (store) => store.ReduxSlice.data
  );
  const walletId = adminDetails?.adminWalletAddress;
  const privateKey = adminDetails?.adminPrivateKey;
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState();
  const [albumName, setAlbumName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("No");
  const [songName, setSongName] = useState("");
  const [songDes, setSongDes] = useState("");
  const [step, setStep] = useState(0);
  const [audioupload, setAudioUpload] = useState(false);

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
      } else {
        setSucces(true)
        setAudio(validateJSON);
      }
    }
  };

  const handleMouseEnter = () =>{
    setAudioUpload(true)
  }

  const handleMouseLeave = () => {
    setAudioUpload(false)
  }

  // const AudioUpload = async (event) => {
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
  //     setAudio(validateJSON);
  //   }
  // };

  

  const UploadAudio = async () => {
    const reqBody = {
      albumName: albumName,
      artistName: artistName,
      price: price,
      lyrics: selectedOption,
      songName: songName,
      songDescription: songDes,
      tune: audio,
      songThumbnail: image,
      userId: userData._id,
    };
    axios
      .post(APIConstants.formUpload, reqBody)
      .then((res) => {
        console.log(res);
        setStep(1);
      })
      .catch((err) => {
        alert("Please fill all the fields");
        console.log(err.message);
      });
  };
  const navigateTo = useNavigate();
  const HandelBack = () => {
    navigateTo(-1);
  };
  const UploadAgain = () => {
    setStep(0);
    setImage("");
    setAudio("");
    setAlbumName("");
    setArtistName("");
    setPrice("");
    setSelectedOption("");
    setSongName("");
    setSongDes("");
  };
  const [albumerr, setAlbumErr] = useState(false);
  const [artisterr, setArtistErr] = useState(false);
  const [priceerr, setPriceErr] = useState(false);
  const [songerr, setSongErr] = useState(false);
  const [descriptionerr, setDescriptionErr] = useState(false);
 const [sucess, setSucces]=useState(false)

  const handleOptionChange = (event) =>{
    setSelectedOption(event.target.value)
  }
 

  const HandelAlbumName = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    // alert(JSON.stringify(trimmedValue))

    if (name === "albumName") {
      const regex = /^[a-zA-Z]+$/;
      const albumname = !regex.test(trimmedValue)
        ? setAlbumErr(true)
        : setAlbumErr(false);
      setAlbumName(value);
    } 

    else if (name === "artistName") {
      const regex = /^[a-zA-Z]+$/;
      const artistname = !regex.test(trimmedValue)
        ? setArtistErr(true)
        : setArtistErr(false);
      setArtistName(value);
    }
    else if(name === "price"){
      const price = !/^\d+$/.test(trimmedValue)
      ? setPriceErr(true)
      : setPriceErr(false);
      const value =Number(trimmedValue)
      setPrice(value);
    }
    else if(name === 'songName'){
      const regex = /^[a-zA-Z]+$/;
      const songName = !regex.test(trimmedValue)
      ? setSongErr(true)
      : setSongErr(false);
      setSongName(value)
    }
    else if(name === "description"){
      const regex = /^[a-zA-Z]+$/;
      const description = !regex.test(trimmedValue)
      ? setDescriptionErr(true)
      : setDescriptionErr(false)
      setSongDes(value)
    }
  };
  return (
    <>
      {step === 0 && (
        <div className="flex flex-row justify-center my-[75px]">
          <div className="w-[1000px] bg-iWhite shadow-2xl rounded-2xl p-[38px]">
            <button onClick={HandelBack}>
              <BiLeftArrowAlt size={38} className="mb-[33px]" />
            </button>
            <div className="flex flex-row gap-4">
              <div className="w-[323px] ml-[13px] border-iBlue border-2 rounded-3xl">
                <div className="flex flex-col items-center gap-[15px] ">
                  <h1 className="text-[28px] text-iBlue font-bold pt-2.5">
                    Upload Music
                  </h1>

                  <div className="w-[156px] h-[165px] border-iBlue relative border-2 rounded-2xl">
                    {!image ? (
                      <img
                        src={images}
                        alt=""
                        className="w-[153px] h-[162px] rounded-2xl"
                      />
                    ) : (
                      <img
                        src={image}
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
                <div className="flex flex-col gap-4 mx-[15px] mt-10 mb-[40px] ">
                  <div className="h-[109px]">
                    <label
                      for="first_name"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Album Name
                    </label>
                    <input
                      name="albumName"
                      value={albumName}
                      onChange={(e) => HandelAlbumName(e)}
                      type="text"
                      autoComplete="off"
                      id="first_name"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Album Name"
                    />
                    {albumerr && (
                      <span className="text-ibrd3 text-[15px] z-10">
                        Field should only contain alphabets.
                      </span>
                    )}
                  </div>

                  <div className="h-[109px]">
                    <label
                      for="first_name"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Artist Name
                    </label>
                    <input
                      name="artistName"
                      value={artistName}
                      onChange={(e) => HandelAlbumName(e)}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Artist Name"
                    />
                    {artisterr && (
                      <span className="text-ibrd3 text-[15px]">
                        Field should only contain alphabets.
                      </span>
                    )}
                  </div>

                  <div className="h-[109px]">
                    <label
                      for="first_name"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Price
                    </label>
                    <input
                      name ='price' 
                      value={price}
                      onChange={(e) => HandelAlbumName(e)}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Price"
                    />
                    {priceerr && (
                      <span className="text-ibrd3 text-[15px]">
                      Field should only contain numbers.
                    </span>
                    )}
                    
                  </div>
                </div>
              </div>

              <div className="w-[589px] border-iBlue border-2 rounded-3xl pl-[55px] pt-[26px]">
                <label htmlFor="upload-image-inp">
                  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="upload-img-div glass_effect glass_effect_border">
                   <>
                   {!sucess ?  audioupload ? <img src={uploadaudio1} /> : <img src={uploadaudio} /> : <img src={successaudio} />              }
                   </>
                    
                    <input
                      type="file"
                      id="upload-image-inp"
                      onChange={fileUploadHandler}
                      accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mkv, .ogg, .wmv"
                      className="mt-2 mb-5 upload_text_inp"
                    />
                  </div>
                </label>
                {/* <button
                type="button"
                className="flex flex-row items-center py-2.5 px-5 hover:bg-iOrange bg-iBlue text-iWhite text-[20px] rounded-lg"
              >
                <BsUpload size={33} className="px-2 font-bold" />            
              </button> */}

                <div className="flex flex-col gap-[26px]">
                  <div>
                    <p className="font-medium text-iBlue mt-[32px]">
                      Want to Upload Lyrics
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <input
                        checked={selectedOption === "Yes"}
                        onChange={handleOptionChange}
                        id="default-radio-1"
                        type="radio"
                        value="Yes"
                        name="default-radio"
                        className="w-4 h-4 text-iOrange bg-iOrange border-iOrange  dark:focus:ring-iOrange dark:border-iOrange"
                      />
                      <label
                        for="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Yes
                      </label>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        checked={selectedOption === "No"}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        id="default-radio-1"
                        type="radio"
                        value="No"
                        name="default-radio"
                        className="w-4 h-4 text-iOrange bg-iOrange border-iOrange  dark:focus:ring-iOrange dark:border-iOrange"
                      />
                      <label
                        for="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        No
                      </label>
                    </div>
                  </div>

                  <div className="h-[109px]">
                    <label
                      for="first_name"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Song Name
                    </label>
                    <input
                    name="songName"
                      value={songName}
                      onChange={(e) => HandelAlbumName(e)}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 w-[288px] border border-iGray4 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Song Name"
                    />
                    {songerr && (<span className="text-ibrd3 text-[15px]">
                    Field should only contain alphabets.
                    </span>)}
                    
                  </div>

                  <div className="h-[180px]">
                    <label
                      for="message"
                      className="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                      Song Description
                    </label>
                    <textarea
                      name="description"
                      value={songDes}
                      onChange={(e) => HandelAlbumName(e)}
                      id="message"
                      rows="4"
                      className="block p-2.5 w-[480px] h-[118px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-iGray4 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                    {descriptionerr && (<span className="text-ibrd3 text-[15px]">
                    Field should only contain alphabets.
                    </span>)}
                    
                  </div>
                </div>

                <button
                  onClick={UploadAudio}
                  className="py-3 mt-5 w-[305px] hover:bg-iOrange mb-[20px] center bg-iBlue rounded-[30px] text-iWhite text-[20px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-row justify-center mt-56 mb-28">
          <div className="w-[610px] bg-iWhite shadow-2xl rounded-2xl p-[38px] flex flex-col items-center">
            <img
              src={verified}
              alt="success"
              className="w-[88px] h-[88px] mb-[38px]"
            />
            <span className=" text-[28px] font-medium text-center w-[452px]">
              Your Song has been Uploaded successfully
            </span>
            <button
              onClick={UploadAgain}
              className=" mt-8 py-2 px-2 border border-[#295D93] rounded-md hover:border-iWhite hover:bg-iBlue text-iBlue hover:text-iWhite"
            >
              Upload New Song
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UploadMusic;
