import React, { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import "./UploadMusic.css";
import image from './../../Assets/images/player.png'

function UploadMusic() {
  const [image, setImage]=useState([])
  const HandelImage =(event)=>{
    debugger
    const myMemoObj = URL.createObjectURL(event.target.files[0]);
		// el.src = URL.createObjectURL(event.target.files[0]);
		URL.revokeObjectURL(myMemoObj); //Manging memo leak
  }
  return (
    <>
      <div className="flex flex-row justify-center my-[100px]">
        <div className="w-[1000px] bg-iWhite shadow-2xl rounded-2xl p-[38px]">
          <BiLeftArrowAlt size={38} className="mb-[33px]" />
          <div className="flex flex-row gap-4">
            <div className="w-[323px] ml-[13px] border-iBlue border-2 rounded-3xl">
              <div className="flex flex-col items-center gap-[15px] ">
                <h1 className="text-[28px] text-iBlue font-bold pt-2.5">
                  Upload Music
                </h1>

                <div className="w-[156px] h-[165px] border-iBlue border-2 rounded-2xl relative">
                  <label
                    className="uploaded-img-label"
                    htmlFor="upload-image-inp"
                    style={"imageUploadState" ? {} : { display: "none" }}
                  >
                    <input
                      type="file"
                      id="upload-image-inp"
                      onChange={""}
                      accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mkv, .ogg, .wmv"
                      className="mt-2 mb-5 upload"
                    />
                    <img src={image} id="uploaded-img" className="w-[154px] h-[163px] rounded-2xl" />
                    <div className="p-1 bg-iWhite absolute top-[144px] left-[140px] " onClick={HandelImage}>
                      <FaEdit size={21} />
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
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border w-[288px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>

            <div className="w-[800px] border-iBlue border-2 rounded-3xl pl-[58px] pt-[26px]">
              <button
                type="button"
                class="flex flex-row items-center py-2.5 px-5 hover:bg-iOrange bg-iBlue text-iWhite text-[20px] rounded-lg"
              >
                <BsUpload size={33} className="px-2 font-bold" />
                Upload Song
              </button>

              <div className="flex flex-col gap-[26px]">
                <div>
                  <p className="font-semibold text-iBlue mt-[32px]">
                    Want to Upload Lyrics
                  </p>
                </div>
                <div>
                  <div class="flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-iOrange bg-iOrange border-iOrange  dark:focus:ring-iOrange dark:border-iOrange"
                    />
                    <label
                      for="default-radio-1"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                     Private Album
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-iOrange bg-iOrange border-iOrange dark:focus:ring-iOrange dark:border-iOrange"
                    />
                    <label
                      for="default-radio-2"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Movie Album
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
                    id="message"
                    rows="4"
                    class="block p-2.5 w-[316px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>

              <button className="py-3 mt-5 w-[305px] hover:bg-iOrange mb-[20px] center bg-iBlue rounded-[30px] text-iWhite text-[20px]">Submit</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadMusic;
