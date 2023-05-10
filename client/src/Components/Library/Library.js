import React from "react";
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import RoundedCard from "../musicCarosal/ProfileCrad/RoundedCard";
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
import rounded1 from "../../Assets/Assets/CardImages/Rounded1.png";
import rounded2 from "../../Assets/Assets/CardImages/Rounded2.png";
import rounded3 from "../../Assets/Assets/CardImages/Rounded3.png";
import rounded4 from "../../Assets/Assets/CardImages/Rounded4.png";
import rounded5 from "../../Assets/Assets/CardImages/Rounded5.png";
import rounded6 from "../../Assets/Assets/CardImages/Rounded6.png";
import rounded7 from "../../Assets/Assets/CardImages/Rounded7.png";
import rounded8 from "../../Assets/Assets/CardImages/Rounded8.png";
import rounded9 from "../../Assets/Assets/CardImages/Rounded9.png";
import rounded10 from "../../Assets/Assets/CardImages/Rounded10.png";
import { useNavigate } from "react-router";

function Library() {
  const data6 = [
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
  const data4 = [
    { id: 1, src: Card15},
    { id: 2, src: Card11},
    { id: 3, src: Card14},
    { id: 4, src: Card10},
    { id: 5, src: Card15},
    { id: 6, src: Card8},
    { id: 7, src: Card7},
    { id: 8, src: Card3 },
    { id: 9, src: Card2},
    { id: 10, src: Card12}
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
    { id: 5, src: Card10},
    { id: 6, src: Card6},
    { id: 7, src: Card6},
    { id: 8, src: Card7 },
    { id: 9, src: Card8},
    { id: 10, src: Card9}
  ] 
  const data1= [
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
  const data = [
    { id: 1, src: Card6},
    { id: 2, src: Card11},
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
    { id: 1, src: Card21},
    { id: 2, src: Card22},
    { id: 3, src: Card23},
    { id: 4, src: Card24 },
    { id: 5, src: Card25},
    { id: 6, src: Card26},
    { id: 7, src: Card27},
    { id: 8, src: Card28},
    { id: 9, src: Card29},
    { id: 10, src: Card30}
  ] 
  const data2 = [
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
  const rounded = [
    { id: 1, src: rounded1},
    { id: 2, src: rounded2},
    { id: 3, src: rounded3},
    { id: 4, src: rounded4},
    { id: 5, src: rounded5},
    { id: 6, src: rounded6},
    { id: 7, src: rounded7},
    { id: 8, src: rounded8 },
    { id: 9, src: rounded9},
    { id: 10, src: rounded10}
  ]
const navigateTO=useNavigate();
  const HandelSeeAll=(value)=>{
    const {path, title}=value
    navigateTO(`/see-all/${path}`,{
      state:title
    })
  }
  return (
    <div className="bg-iGray2 pt-[52px] pl-9 pb-[114px]">
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">New releases</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 -mt-[0.5px]">
            
          </h5>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Top charts</h1>
          <button onClick={()=>HandelSeeAll({path:'new-release',title:'New releases'})} className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</button>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data1?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Recommended for you</h1>
          <button onClick={()=>HandelSeeAll({path:'top-chart',title:'Top charts'})} className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</button>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data2?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">
            Featured playlists Based on Mood
          </h1>
          <button onClick={()=>HandelSeeAll({path:'recommended-for-you',title:'Recommended for you'})} className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</button>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data3?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Last Spotlight</h1>
          <button onClick={()=>HandelSeeAll({path:'featured-playlists',title:'Featured playlists Based on Mood'})} className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</button>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data4?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex gap-6 max-w-[1632px] pl-[13px] overflow-x-scroll hidding-x-scroll">
          {rounded?.map((item) => {
            return (
              <div>
                <RoundedCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Radio stations</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 -mt-[0.5px]">
            
          </h5>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data6?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Your Playlists</h1>
          <button onClick={()=>HandelSeeAll({path:'radio-stations',title:'Radio stations'})} className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</button>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data7?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Top Playlists</h1>
          <button onClick={()=>HandelSeeAll({path:'your-playlists',title:'Your Playlists'})} className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</button>
        </div>
        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data8?.map((item) => {
            return (
              <div>
              <ProfileCard data={item} src={item.src}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold"></h1>
          <h5 onClick={()=>HandelSeeAll({path:'top-playlists',title:'Top Playlists'})} className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
        </div>
        
      </div>
    </div>
  );
}

export default Library;
