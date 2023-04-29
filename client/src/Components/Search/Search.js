import React from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import RoundedCard from "../musicCarosal/ProfileCrad/RoundedCard";
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import {BiLeftArrowAlt} from 'react-icons/bi'
import { useNavigate } from "react-router";
function Search() {
  const rounded = [{ id: 1 }, { id: 2 }];
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
const navigateTo=useNavigate();
  const HandelBack =()=>{
    navigateTo(-1)
  }

  return (
    <div className="pt-[24px] pl-[36px] pb-[136px]">
      <button onClick={HandelBack}>
      <BiLeftArrowAlt size={38} className="mb-[33px] -ml-[9px]" />
      </button>
      <div className="flex flex-row items-center pr-[272px] pl-[197px] pb-[87px]">
        <input
          type="text"
          className="w-full p-2 border-b-4 outline-none bg-iGray2 searchSong border-iOrange focus:border-iOrange"
          placeholder="Search Song"
        />
        <FiSearch size={49} className="-ml-[50px] pb-2 text-iBlue text-bold" />
      </div>
      <div className="flex flex-row gap-[30px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {rounded.map((item) => {
          return (
            <div>
              <RoundedCard data={item} title={"Recommended for you"} />
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
      <div className="flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
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

      <div className="flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data.map((item) => {
          return (
            <div>
              <ProfileCard data={item} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-semibold mt-[28px]">Last Spotlight</h1>
        <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
          Sell All
        </h5>
      </div>

      <div className="flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data.map((item) => {
          return (
            <div>
              <ProfileCard data={item} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-semibold mt-[28px]">Radio stations</h1>
        <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
          Sell All
        </h5>
      </div>

      <div className="flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data.map((item) => {
          return (
            <div>
              <ProfileCard data={item} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-semibold mt-[28px]">Your Playlists</h1>
        <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
          Sell All
        </h5>
      </div>

      <div className="flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data.map((item) => {
          return (
            <div>
              <ProfileCard data={item} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-semibold mt-[28px]">Top Playlists</h1>
        <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
          Sell All
        </h5>
      </div>

      <div className="flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data.map((item) => {
          return (
            <div>
              <ProfileCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Search;
