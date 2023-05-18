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
    { id: 1, src: Card20,playlist:"Trending Playlist ",album:"Weekend"},
    { id: 2, src: Card17,playlist:"Good Music for Bad Days",album:"Weekend"},
    { id: 3, src: Card11,playlist:"Trending Playlist",album:"Weekend"},
    { id: 4, src: Card7,playlist:" Trending on Tiktok",album:"Weekend"},
    { id: 5, src: Card14,playlist:"XXXtention ",album:"Weekend"},
    { id: 6, src: Card5,playlist:" EveryThing from Taylor",album:"Weekend"},
    { id: 7, src: Card4,playlist:" Ariana Grande This Side",album:"Weekend"},
    { id: 8, src: Card7 ,playlist:" EveryThing from Taylor",album:"Weekend"},
    { id: 9, src: Card6,playlist:" Ariana Grande This Side",album:"Weekend"},
    { id: 10, src: Card1,playlist:"Sunset Days",album:"Weekend"}
  ]
  const data4 = [
    { id: 1, src: Card28,playlist:"Good Music for Bad Days",album:"Weekend"},
    { id: 2, src: Card2,playlist:"STAR BOY",album:"Weekend"},
    { id: 3, src: Card3,playlist:"XXXtention",album:"Weekend"},
    { id: 4, src: Card4,playlist:"Mine",album:"Weekend"},
    { id: 5, src: Card5,playlist:"Top Hits of 2000",album:"Weekend"},
    { id: 6, src: Card6,playlist:"Old School ",album:"Weekend"},
    { id: 7, src: Card7,playlist:"Smile Vol.1",album:"Weekend"},
    { id: 8, src: Card8,playlist:"Dig Out your Soul",album:"Weekend" },
    { id: 9, src: Card11,playlist:"Sunset Days",album:"Weekend"},
    { id: 10, src: Card12,playlist:"Freedom",album:"Weekend"}
  ] 
  const data3 = [
    { id: 1, src: Card21,playlist:"Good Music for Bad Days",album:"Playlists"},
    { id: 2, src: Card22,playlist:"STAR BOY",album:"Playlists"},
    { id: 3, src: Card23,playlist:"XXXtention",album:"Playlists"},
    { id: 4, src: Card24,playlist:"Freedom",album:"Playlists"},
    { id: 5, src: Card25,playlist:"Sunset Days",album:"Playlists"},
    { id: 6, src: Card26,playlist:"Dig Out your Soul",album:"Playlists"},
    { id: 7, src: Card27,playlist:"Smile Vol.1",album:"Playlists"},
    { id: 8, src: Card28,playlist:"Old School",album:"Playlists" },
    { id: 9, src: Card29,playlist:"Top Hits of 2000",album:"Weekend"},
    { id: 10, src: Card30,playlist:"Mine",album:"Weekend"}
  ] 
  const data8 = [
    { id: 1, src: Card11,playlist:"STAR BOY",album:"Weekend"},
    { id: 2, src: Card12,playlist:"Everything From Drake",album:"Albums"},
    { id: 3, src: Card13,playlist:"Ariana Grande This Side",album:"Trending"},
    { id: 4, src: Card14,playlist:"EveryThing from Taylor",album:"Playlist"},
    { id: 5, src: Card15,playlist:"XXXtention",album:"Albums"},
    { id: 6, src: Card16,playlist:"Trending Playlist",album:"Albums"},
    { id: 7, src: Card17,playlist:"Trending on Tiktok",album:"Albums"},
    { id: 8, src: Card18 ,playlist:"Trending Playlist",album:"Albums"},
    { id: 9, src: Card19,playlist:"All Time Rap's",album:"Albums"},
    { id: 10, src: Card20,playlist:"Good Music for Bad Days",album:"Albums"}
  ] 
  const data1= [
    { id: 1, src: Card30,playlist:"All Time Rap's",album:"Trending"},
    { id: 2, src: Card2,playlist:"Trending Playlist",album:"Trending"},
    { id: 3, src: Card3,playlist:"Trending on Tiktok",album:"Trending"},
    { id: 4, src: Card4,playlist:"XXXtentio ",album:"Trending"},
    { id: 5, src: Card10,playlist:"EveryThing from Taylor ",album:"Playlist"},
    { id: 6, src: Card6,playlist:" Everything From Drake",album:"Playlist"},
    { id: 7, src: Card5,playlist:"Ariana Grande This Side",album:"Playlist"},
    { id: 8, src: Card7 ,playlist:"STAR BOY",album:"Weekend"},
    { id: 9, src: Card8,playlist:" Good Music for Bad Days",album:"Playlist"},
    { id: 10, src: Card9,playlist:"Trending",album:"Weekend"}
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
    { id: 1, src: Card11,playlist:"Good Music for Bad Days ",album:"Weekend"},
    { id: 2, src: Card9,playlist:"Ariana Grande This Side ",album:"Weekend"},
    { id: 3, src: Card13,playlist:"Everything From Drake",album:"Weekend"},
    { id: 4, src: Card14,playlist:"Trending Playlist",album:"Weekend"},
    { id: 5, src: Card15,playlist:"EveryThing from Taylor",album:"Weekend"},
    { id: 6, src: Card16,playlist:"Everything From Drake",album:"Weekend"},
    { id: 7, src: Card17,playlist:" STAR BOY",album:"Weekend"},
    { id: 8, src: Card18 ,playlist:"XXXtention",album:"Weekend"},
    { id: 9, src: Card19,playlist:"Freedom",album:"Weekend"},
    { id: 10, src: Card20,playlist:"Good Music for Bad Days",album:"Weekend"}
  ] 
  const data7 = [
    { id: 1, src: Card5,playlist:"Trending on Tiktok ",album:"Weekend"},
    { id: 2, src: Card11,playlist:" Trending on Tiktok",album:"Weekend"},
    { id: 3, src: Card2,playlist:"Trending Playlist ",album:"Weekend"},
    { id: 4, src: Card13 ,playlist:"EveryThing from Taylor ",album:"Weekend"},
    { id: 5, src: Card24,playlist:" Ariana Grande This Side",album:"Weekend"},
    { id: 6, src: Card15,playlist:"Good Music for Bad Days",album:"Weekend"},
    { id: 7, src: Card6,playlist:"STAR BOY",album:"Weekend"},
    { id: 8, src: Card19,playlist:"Everything From Drake",album:"Weekend"},
    { id: 9, src: Card8,playlist:"XXXtention",album:"Weekend"},
    { id: 10, src: Card9,playlist:"Dig Out your Soul",album:"Weekend"}
  ] 
  const data2 = [
    { id: 1, src: Card1,playlist:"Mine",album:"Radio"},
    { id: 2, src: Card6,playlist:" Top Hits of 2000",album:"Radio"},
    { id: 3, src: Card7 ,playlist:"Old School",album:"Radio"},
    { id: 4, src: Card8,playlist:"Smile Vol.1",album:"Radio"},
    { id: 5, src: Card9,playlist:"Good Music for Bad Days",album:"Radio"},
    { id: 6, src: Card1,playlist:"Freedom",album:"Radio"},
    { id: 7, src: Card2,playlist:"Everything From Drake",album:"Radio"},
    { id: 8, src: Card3,playlist:"Sunset Days",album:"Weekend"},
    { id: 9, src: Card4,playlist:"XXXtention",album:"Radio"},
    { id: 10, src: Card5,playlist:" EveryThing from Taylor",album:"Weekend"},
  ] 
  const rounded = [
    { id: 1, src: rounded1,artist:"Drake",rank:1,place:"Mexico"},
    { id: 2, src: rounded2,artist:"Weekend",rank:2,place:"USA"},
    { id: 3, src: rounded3,artist:"Ariana Grande",rank:3,place:"UK"},
    { id: 4, src: rounded4,artist:"Taylor Swift",rank:4,place:"Russia"},
    { id: 5, src: rounded5,artist:"XXXtention",rank:5,place:"England"},
    { id: 6, src: rounded6,artist:"Drake",rank:6,place:"USA"},
    { id: 7, src: rounded7,artist:"Ariana Grande",rank:7,place:"UK"},
    { id: 8, src: rounded8 ,artist:"Weekend",rank:8,place:"Russia"},
    { id: 9, src: rounded9,artist:"Taylor Swift",rank:9,place:"England"},
    { id: 10, src: rounded10,artist:"XXXtention",rank:10,place:"Mexico"}
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
          <h1 className="text-[30px] font-medium">New releases</h1>
          <h5 className="underline font-medium text-[16px] text-iBlack1 -mt-[0.5px]">
            
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
          <h1 className="text-[30px] font-medium">Top charts</h1>
          <button onClick={()=>HandelSeeAll({path:'new-release',title:'New releases'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
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
          <h1 className="text-[30px] font-medium">Recommended for you</h1>
          <button onClick={()=>HandelSeeAll({path:'top-chart',title:'Top charts'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
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
          <h1 className="text-[30px] font-medium">
            Featured playlists Based on Mood
          </h1>
          <button onClick={()=>HandelSeeAll({path:'recommended-for-you',title:'Recommended for you'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
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
          <h1 className="text-[30px] font-medium">Last Spotlight</h1>
          <button onClick={()=>HandelSeeAll({path:'featured-playlists',title:'Featured playlists Based on Mood'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
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
                <RoundedCard data={item} src={item.src} artist={item.artist} rank={item.rank} place={item.place}/>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-medium">Radio stations</h1>
          <h5 className="underline font-medium text-[16px] text-iBlack1 -mt-[0.5px]">
            
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
          <h1 className="text-[30px] font-medium">Your Playlists</h1>
          <button onClick={()=>HandelSeeAll({path:'radio-stations',title:'Radio stations'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
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
          <h1 className="text-[30px] font-medium">Top Playlists</h1>
          <button onClick={()=>HandelSeeAll({path:'your-playlists',title:'Your Playlists'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
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
          <h1 className="text-[30px] font-medium"></h1>
          <h5 onClick={()=>HandelSeeAll({path:'top-playlists',title:'Top Playlists'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
        </div>
        
      </div>
    </div>
  );
}

export default Library;
