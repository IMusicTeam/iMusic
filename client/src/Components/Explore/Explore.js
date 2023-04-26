import React, { useState } from "react";
import RoundedCard from "./../musicCarosal/ProfileCrad/RoundedCard";
import ProfileCard from "./../musicCarosal/ProfileCrad/ProfilesCard";

function Explore() {
  const [isHovered, setIsHovered] = useState(false);
  const [indexValue, setIndexValue] = useState("");
  const MouseEnter = (index) => {
    setIndexValue(index);
    setIsHovered(true);
  };
  const MouseLeave = () => {
    setIsHovered(false);
    setIndexValue("");
  };
  const data = [
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
  const short = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];
  return (
    <>
      <div className="bg-iGray2 w-full pl-[34px] pt-[42px]">
        <div className="text-[30px] text-iBlack1 font-semibold">
          Top Artists this Month
        </div>

        <div className="flex flex-row gap-[24px] pl-[35px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {data.map((item) => {
            return (
              <div>
                <RoundedCard data={item} />
              </div>
            );
          })}
        </div>

        <div className="pt-[28px]">
          <div className="text-[30px] text-iBlack1 font-semibold">
            Top Music Radio For You
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-row flex-wrap max-w-[624px] gap-6 mt-[28px]" >
          {short.map((item)=>{
          return(
            <div>

              <ProfileCard data={item}/>
            </div>
          )
        })}
          </div>

          <div className="flex ml-[97px] mt-[45px] h-fit">
            <div className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                src={
                  "https://www.mmppicture.co.in/wp-content/uploads/2020/09/Background-1-802x1080.jpg"
                }
                alt="image"
                className="w-[387px] h-[492px] rounded-2xl"
              />
              <p className="text-[63px] px-[14px] absolute top-[200px] text-iWhite shadow-[12px] drop-shadow-2xl font-bold">
                Listen to your owned Music
              </p>
            </div>
          </div>

          <div className="flex ml-[97px] mt-[45px]">
            <div className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                src={
                  "https://www.mmppicture.co.in/wp-content/uploads/2020/09/Background-1-802x1080.jpg"
                }
                alt="image"
                className="w-[387px] h-[492px] rounded-2xl"
              />
              <p className="text-[63px] px-[14px] absolute top-[200px] text-iWhite shadow-[12px] drop-shadow-2xl font-bold">
                Listen to your own Music
              </p>
            </div>
          </div>
        </div>

        <div className="pb-[32px]">
          <div className="flex flex-row justify-between pt-[28px]">
            <h1 className="text-[30px] font-semibold">New releases</h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>

          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">Top charts</h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>

          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">
              Recommended for you
            </h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>

          <div className="flex flex-row p-3 gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">
              Featured playlists Based on Mood
            </h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>
          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">
              Last Spotlight
            </h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>
          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">
              Radio stations
            </h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>

          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">
              Your Playlists
            </h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>

          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">
              Top Playlists
            </h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>

          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>

          <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-semibold mt-[28px]">
              Top Playlists
            </h1>
            <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
              Sell All
            </h5>
          </div>

          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
