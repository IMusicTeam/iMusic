import React, { useState } from "react";
import axios from 'axios'
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import "./UploadMusic.css";
import images from "./../../Assets/images/player.png";
import { APIConstants } from "../../Services/api-constants";

function UploadMusic() {
  const [image, setImage] = useState();
  const [audio, setAudio]=useState()
  const [albumName, setAlbumName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [songName, setSongName]=useState('')
  const [songDes, setSongDes]=useState('')

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
      if(!image){

        setImage(validateJSON);
      }
      else{
        setAudio(validateJSON)
      }
    }
  }


  const AudioUpload = async (event) => {
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
      setAudio(validateJSON);
    }
  }

  const UploadAudio = async () => {
    const reqBody = {
      albumName: albumName,
      artistName: artistName,
      price: price,
      selectedOption: selectedOption,
      songName: songName,
      songDes: songDes,
      audio: audio,
      image: image,
    };
    axios.post(APIConstants.formUpload, reqBody)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert("Failed"));
  };

  return (
    <>
      <div className="flex flex-row justify-center my-[75px]">
        <div className="w-[1000px] bg-iWhite shadow-2xl rounded-2xl p-[38px]">
          <BiLeftArrowAlt size={38} className="mb-[33px]" />
          <div className="flex flex-row gap-4">
            <div className="w-[323px] ml-[13px] border-iBlue border-2 rounded-3xl">
              <div className="flex flex-col items-center gap-[15px] ">
                <h1 className="text-[28px] text-iBlue font-bold pt-2.5">
                  Upload Music
                </h1>

                <div className="w-[156px] h-[165px] border-iBlue relative border-2 rounded-2xl">
                {!image ? <img src={images} className="w-[153px] h-[162px] rounded-2xl"/> : <img src={image} className="w-[153px] h-[163px] rounded-2xl"/> }
                  <label htmlFor="upload-image-inp">
                    <div className=" upload-img-div glass_effect glass_effect_border">
                      
                    <span className="p-1 pl-2  bg-iWhite absolute -bottom-[13px] -right-[17px]" >
                      <FaEdit size={21} />
                    </span>
                       <input
                        type="file"
                        id="upload-image-inp"
                        onChange={fileUploadHandler}
                        accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mp3, .mkv, .ogg, .wmv"
                        className="mt-2 mb-5 upload_text_inp"
                      />
                    </div>
                  </label>
                
                </div>

              </div>
              <div className="flex flex-col gap-4 mx-[15px] mt-10 mb-[40px] ">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-[20px] font-medium text-iBlue"
                  >
                    Album Name
                  </label>
                  <input
                    value={albumName} onChange={(e)=> setAlbumName(e.target.value)}
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border w-[288px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Album Name"
                  />
                </div>

                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-[20px] font-medium text-iBlue"
                  >
                    Artist Name
                  </label>
                  <input
                  value={artistName} onChange={(e)=> setArtistName(e.target.value)}
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border w-[288px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Artist Name"
                  />
                </div>

                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-[20px] font-medium text-iBlue"
                  >
                    Price
                  </label>
                  <input
                    value={price} onChange={(e)=> setPrice(e.target.value)}
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border w-[288px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>

            <div className="w-[589px] border-iBlue border-2 rounded-3xl pl-[55px] pt-[26px]">
            <label htmlFor="upload-image-inp">
                    <div className=" upload-img-div glass_effect glass_effect_border">
                      
                    <span className="flex w-[212px] py-2.5 px-5 hover:bg-iOrange bg-iBlue text-iWhite text-[20px] rounded-lg" >                    <BsUpload size={33} className="px-2 font-bold" />
                Upload Audio
                   </span>
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
                class="flex flex-row items-center py-2.5 px-5 hover:bg-iOrange bg-iBlue text-iWhite text-[20px] rounded-lg"
              >
                <BsUpload size={33} className="px-2 font-bold" />            
              </button> */}

              <div className="flex flex-col gap-[26px]">
                <div>
                  <p className="font-semibold text-iBlue mt-[32px]">
                    Want to Upload Lyrics
                  </p>
                </div>
                <div>
                  <div class="flex items-center mb-4">
                    <input
                     checked={selectedOption === 'Yes'}
                     onChange={(e) => setSelectedOption(e.target.value)}
                      id="default-radio-1"
                      type="radio"
                      value="Yes"
                      name="default-radio"
                      class="w-4 h-4 text-iOrange bg-iOrange border-iOrange  dark:focus:ring-iOrange dark:border-iOrange"
                    />
                    <label
                      for="default-radio-1"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                    checked={selectedOption === 'No'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                      id="default-radio-2"
                      type="radio"
                      value="No"
                      name="default-radio"
                      class="w-4 h-4 text-iOrange bg-iOrange border-iOrange dark:focus:ring-iOrange dark:border-iOrange"
                    />
                    <label
                      for="default-radio-2"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-[20px] font-medium text-iBlue"
                  >
                    Song Name
                  </label>
                  <input
                   value={songName} onChange={(e)=> setSongName(e.target.value)}
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border w-[288px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Song Name"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block mb-2 text-[20px] font-medium text-iBlue"
                  >
                    Song Description
                  </label>
                  <textarea
                    value={songDes} onChange={(e)=> setSongDes(e.target.value)}
                    id="message"
                    rows="4"
                    class="block p-2.5 w-[480px] h-[118px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              <button
              onClick={UploadAudio}
              className="py-3 mt-5 w-[305px] hover:bg-iOrange mb-[20px] center bg-iBlue rounded-[30px] text-iWhite text-[20px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadMusic;
