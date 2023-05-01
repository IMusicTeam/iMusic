import React, { useState } from "react";
import RoundedCard from "./../musicCarosal/ProfileCrad/RoundedCard";
import ProfileCard from "./../musicCarosal/ProfileCrad/ProfilesCard";
import HomeCard1 from "../../Assets/Assets/CardImages/HomeCard1.png";
import HomeCard2 from "../../Assets/Assets/CardImages/HomeCard2.png";
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
    { id: 1, src: Card16},
    { id: 2, src: Card17},
    { id: 3, src: Card18},
    { id: 4, src: Card19},
    { id: 5, src: Card20},
    { id: 6, src: Card11},
    { id: 7, src: Card12},
    { id: 8, src: Card13 },
    { id: 9, src: Card14},
    { id: 10, src: Card15}
  ] 
  const data8 = [
    { id: 1, src: Card1},
    { id: 2, src: Card2},
    { id: 3, src: Card3},
    { id: 4, src: Card4},
    { id: 5, src: Card5},
    { id: 6, src: Card6},
    { id: 7, src: Card7},
    { id: 8, src: Card8 },
    { id: 9, src: Card11},
    { id: 10, src: Card12}
  ] 
  const data5 = [
    { id: 1, src: Card20},
    { id: 2, src: Card17},
    { id: 3, src: Card11},
    { id: 4, src: Card7},
    { id: 5, src: Card14},
    { id: 6, src: Card5},
    { id: 7, src: Card4},
    { id: 8, src: Card7 },
    { id: 9, src: Card6},
    { id: 10, src: Card1}
  ] 
  const data6 = [
    { id: 1, src: Card6},
    { id: 2, src: Card6},
    { id: 3, src: Card7 },
    { id: 4, src: Card8},
    { id: 5, src: Card9},
    { id: 6, src: Card1},
    { id: 7, src: Card2},
    { id: 8, src: Card3},
    { id: 9, src: Card4},
    { id: 10, src: Card5},
  ] 
  const data7 = [
    { id: 1, src: Card20},
    { id: 2, src: Card11},
    { id: 3, src: Card12},
    { id: 4, src: Card13 },
    { id: 5, src: Card14},
    { id: 6, src: Card15},
    { id: 7, src: Card6},
    { id: 8, src: Card6},
    { id: 9, src: Card8},
    { id: 10, src: Card9}
  ] 
  const short = [
    { id: 1, src: Card11},
    { id: 2, src: Card12},
    { id: 3, src: Card13},
    { id: 4, src: Card14}
  ];
  return (
    <>
      <div className="bg-iGray2 w-full pl-[34px] pt-[42px]">
        <div className="text-[30px] text-iBlack1 font-semibold">
          Top Artists this Month
        </div>

        <div className="flex flex-row gap-[24px] pl-[35px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {data8.map((item) => {
            return (
              <div>
                <RoundedCard data={item} src={item.src} />
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
              <ProfileCard data={item} src={item.src}/>
            </div>
          )
        })}
          </div>

          <div className="flex ml-[97px] mt-[45px] h-fit">
            <div className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                src=
                  {HomeCard1}
                
                alt="own"
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
                src=
                  {HomeCard2}
                
                alt="owned"
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
            {data1.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} src={item.src}/>
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
            {data3.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} src={item.src}/>
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
            {data2.map((item) => {
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
          <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
            {data5.map((item) => {
              return (
                <div>
                  <ProfileCard data={item}  src={item.src}/>
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
            {data6.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} src={item.src}/>
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
            {data7.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} src={item.src}/>
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
            {data8.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} src={item.src}/>
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
            {data5.map((item) => {
              return (
                <div>
                  <ProfileCard data={item} src={item.src}/>
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
                  <ProfileCard data={item} src={item.src} />
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
