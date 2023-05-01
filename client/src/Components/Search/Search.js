import React from "react";
import "./Search.css";
import { FiSearch } from "react-icons/fi";
import RoundedCard from "../musicCarosal/ProfileCrad/RoundedCard";
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
import Card11 from '../../Assets/Assets/CardImages/Card11.png';
import Card12 from '../../Assets/Assets/CardImages/Card12.png';
import Card13 from '../../Assets/Assets/CardImages/Card13.png';
import Card14 from '../../Assets/Assets/CardImages/Card14.png';
import Card15 from '../../Assets/Assets/CardImages/Card15.png';
import Card16 from '../../Assets/Assets/CardImages/Card16.png';
import Card17 from '../../Assets/Assets/CardImages/Card17.png';
import Card18 from '../../Assets/Assets/CardImages/Card18.png';
import Card19 from '../../Assets/Assets/CardImages/Card19.png';
import Card20 from '../../Assets/Assets/CardImages/Card20.png';
import Card21 from '../../Assets/Assets/CardImages/Card21.png';
import Card22 from '../../Assets/Assets/CardImages/Card22.png';
import Card23 from '../../Assets/Assets/CardImages/Card23.png';
import Card24 from '../../Assets/Assets/CardImages/Card24.png';
import Card25 from '../../Assets/Assets/CardImages/Card25.png';
import Card26 from '../../Assets/Assets/CardImages/Card26.png';
import Card27 from '../../Assets/Assets/CardImages/Card27.png';
import Card28 from '../../Assets/Assets/CardImages/Card28.png';
import Card29 from '../../Assets/Assets/CardImages/Card29.png';
import Card30 from '../../Assets/Assets/CardImages/Card30.png';
import {BiLeftArrowAlt} from 'react-icons/bi'
import { useNavigate } from "react-router";
function Search() {
  const rounded1 = [{ id: 1,src:Card2}, { id: 2,src:Card3}];

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
  const data1 = [
    { id: 1, src: Card11},
    { id: 2, src: Card12},
    { id: 3, src: Card13},
    { id: 4, src: Card14},
    { id: 5, src: Card15},
    { id: 6, src: Card16},
    { id: 7, src: Card17},
    { id: 8, src: Card18 },
    { id: 9, src: Card19},
    { id: 10, src: Card20}
  ] 
  const data2 = [
    { id: 1, src: Card21},
    { id: 2, src: Card22},
    { id: 3, src: Card23},
    { id: 4, src: Card24},
    { id: 5, src: Card25},
    { id: 6, src: Card26},
    { id: 7, src: Card27},
    { id: 8, src: Card28 },
    { id: 9, src: Card29},
    { id: 10, src: Card30}
  ] 
  const data3 = [
    { id: 1, src: Card5},
    { id: 2, src: Card6},
    { id: 3, src: Card7},
    { id: 4, src: Card8},
    { id: 5, src: Card9},
    { id: 6, src: Card10},
    { id: 7, src: Card1},
    { id: 8, src: Card2},
    { id: 9, src: Card3},
    { id: 10, src: Card4}
  ] 
  const data4= [
    { id: 1, src: Card15},
    { id: 2, src: Card16},
    { id: 3, src: Card17},
    { id: 4, src: Card18},
    { id: 5, src: Card19},
    { id: 6, src: Card20},
    { id: 7, src: Card11},
    { id: 8, src: Card12 },
    { id: 9, src: Card13},
    { id: 10, src: Card14}
  ] 
  const data5= [
    { id: 1, src: Card26},
    { id: 2, src: Card27},
    { id: 3, src: Card28},
    { id: 4, src: Card29},
    { id: 5, src: Card25},
    { id: 6, src: Card21},
    { id: 7, src: Card22},
    { id: 8, src: Card23 },
    { id: 9, src: Card24},
    { id: 10, src: Card25}
  ] 

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
        {rounded1.map((item) => {
          return (
            <div>
              <RoundedCard data={item} title={"Recommended for you"} src={item.src}/>
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
              <ProfileCard data={item} src={item.src}/>
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
        {data1.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src}/>
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
        {data2.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src}/>
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
        {data3.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src}/>
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
        {data4.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src}/>
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
        {data5.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Search;
