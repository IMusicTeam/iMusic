import React from "react";
import { FiShuffle } from "react-icons/fi";
import image from "./../../Assets/image1.png";
import { BsFillPlayFill } from "react-icons/bs";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";


function RecentlyPlayed() {
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <div className="px-[34px] py-[42px] bg-iGray2">
      <div className="flex flex-row gap-[28px]">
        <div className="max-w-[752px] p-[23px] bg-iWhite rounded-2xl">
        <div className="flex flex-row items-center justify-between pb-[28px]">
          <h1 className="text-[28px] font-bold">Recently Played</h1>
          <div className="flex flex-row gap-[22px]">
            <div>
              <button class="bg-transparent hover:bg-iLightBlue text-iBlue font-semibold py-2 px-4 border border-iBlue hover:border- hover:text-iDarkBlue hover:border-transparent rounded">
                Play All
              </button>
            </div>
            <div>
              <button class="flex flex-row items-center bg-transparent hover:bg-iLightBlue text-iBlue font-semibold py-2 px-4 border border-iBlue hover:border- hover:text-iDarkBlue hover:border-transparent rounded">
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
              <div className="flex flex-row items-center gap-[255px]">
                <div className="w-[204px] flex flex-row items-center gap-5 p-1">
                  <div>
                    <img
                      src={image}
                      alt="image"
                      className="w-[64px] h-[64px]"
                    />
                  </div>
                  <div>
                    <p className="text-iGray1 text-[18px]">Taylor Swift</p>
                    <p className="text-[20px] font-bold">Taylor Swift</p>
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
        <div className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <img src={image3} alt="owned" className="w-[387px] h-[492px] rounded-2xl"/>
       <p className="text-[63px] px-[14px] absolute bottom-0 text-iWhite shadow-[12px] drop-shadow-2xl font-bold">Listen to your owned Music</p>
        </div>

        <div className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            <img src={image2} alt="owned" className="w-[387px] h-[492px] rounded-2xl"/>
       <p className="text-[63px] px-[14px] absolute bottom-[40px] text-iWhite shadow-[12px] drop-shadow-2xl font-bold">Listen to your own Music</p>
        </div>
      </div>
    </div>
  );
}

export default RecentlyPlayed;
