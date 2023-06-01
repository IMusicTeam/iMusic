import React, { useEffect, useState } from "react";
import RoundedCard from "./../musicCarosal/ProfileCrad/RoundedCard";
import ProfileCard from "./../musicCarosal/ProfileCrad/ProfilesCard";
import Loadingforimusic from "../../Assets/Loadingforimusic.gif"
import Card1 from "../../Assets/Assets/CardImages/Card1.png";
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
import Card31 from "../../Assets/Assets/CardImages/Card31.png";
import Card32 from "../../Assets/Assets/CardImages/Card32.png";
import Card33 from "../../Assets/Assets/CardImages/Card33.png";
import Card34 from "../../Assets/Assets/CardImages/Card34.png";
import Card35 from "../../Assets/Assets/CardImages/Card35.png";
import Card36 from "../../Assets/Assets/CardImages/Card36.png";
import Card37 from "../../Assets/Assets/CardImages/Card37.png";
import Card38 from "../../Assets/Assets/CardImages/Card38.png";
import Card39 from "../../Assets/Assets/CardImages/Card39.png";
import Card40 from "../../Assets/Assets/CardImages/Card40.png";
import Card41 from "../../Assets/Assets/CardImages/Card41.png";
import Card42 from "../../Assets/Assets/CardImages/Card42.png";
import Card43 from "../../Assets/Assets/CardImages/Card43.png";
import Card44 from "../../Assets/Assets/CardImages/Card44.png";
import Card45 from "../../Assets/Assets/CardImages/Card45.png";
import Card46 from "../../Assets/Assets/CardImages/Card46.png";
import Card47 from "../../Assets/Assets/CardImages/Card47.png";
import Card48 from "../../Assets/Assets/CardImages/Card48.png";
import Card49 from "../../Assets/Assets/CardImages/Card49.png";
import Card50 from "../../Assets/Assets/CardImages/Card50.png";
import Card51 from "../../Assets/Assets/CardImages/Card51.png";
import Card52 from "../../Assets/Assets/CardImages/Card52.png";
import Card53 from "../../Assets/Assets/CardImages/Card53.png";
import Card54 from "../../Assets/Assets/CardImages/Card54.png";
import Card55 from "../../Assets/Assets/CardImages/Card55.png";
import Card56 from "../../Assets/Assets/CardImages/Card56.png";
import Card57 from "../../Assets/Assets/CardImages/Card57.png";
import Card58 from "../../Assets/Assets/CardImages/Card58.png";
import Card59 from "../../Assets/Assets/CardImages/Card59.png";
import Card60 from "../../Assets/Assets/CardImages/Card60.png";
import Card61 from "../../Assets/Assets/CardImages/Card61.png";
import Card62 from "../../Assets/Assets/CardImages/Card62.png";
import Card63 from "../../Assets/Assets/CardImages/Card63.png";
import Card64 from "../../Assets/Assets/CardImages/Card64.png";
import Card65 from "../../Assets/Assets/CardImages/Card65.png";
import Card66 from "../../Assets/Assets/CardImages/Card66.png";
import Card67 from "../../Assets/Assets/CardImages/Card67.png";
import Card68 from "../../Assets/Assets/CardImages/Card68.png";
import Card69 from "../../Assets/Assets/CardImages/Card69.png";
import Card70 from "../../Assets/Assets/CardImages/Card70.png";
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
import axios from "axios";
import { useNavigate } from "react-router";
import { assetURL, baseURL } from "../../Services/api-constants";
import { useSelector } from "react-redux";
import { BiLeftArrowAlt } from "react-icons/bi";
function Playlist() {
  const [listData, setListData]=useState([])
  const[isLoading, setIsLoading]=useState(true)
  const userId = useSelector((store)=>store.ReduxSlice.data.userData._id)

 
  useEffect(() => {
    axios
      .get(baseURL + "get-all-playlist?userId=" + userId)
      .then((res) => {
        const data=res.data.data[0].allPlaylist
        setListData(data)
          setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);
  const navigateTO=useNavigate();
  const HandelSeeAll=(value)=>{
    const {path, title}=value
    navigateTO(`/see-all/${path}`,{
      state:title
    })
  }
  return (
    <>
     <div>
    <button type="button" onClick={() => navigateTO("/home")}>
        <BiLeftArrowAlt size={38} className="ml-[30px] text-iBlack" />
    </button>
    </div>
    {isLoading ? <div className="flex justify-center items-center h-[690px]"><img src={Loadingforimusic}/></div> :
      <div className="bg-iGray2 pt-[52px] pl-9 pb-[114px] pr-7">
      <div className="flex flex-row justify-between">
            <h1 className="text-[30px] font-medium">
              Newly Added
            </h1>
            <h5 className="underline font-medium text-[16px] text-iBlack1">
             
            </h5>
          </div>
          <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
            {listData.map((item) => {
              return (
                <div>
                  <ProfileCard
                    data={item}
                    src={assetURL + item.image}
                    playList={true}
                  />
                </div>
              );
            })}
          </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-medium">Top charts</h1>
          <button onClick={()=>HandelSeeAll({path:'new-release',title:'New releases'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
        </div>
        <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
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
        <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
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
        <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
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
        <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
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
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-medium">Radio stations</h1>
          <h5 className="underline font-medium text-[16px] text-iBlack1 -mt-[0.5px]">
          <button onClick={()=>HandelSeeAll({path:'last-spotlight',title:'Last Spotlight'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
          </h5>
        </div>
        <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
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
        <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
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
        <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 13mac:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data5?.map((item) => {
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
    </div>}
    </>
  );
}

export default Playlist;


const data = [
  {id: 1, src: rounded1,artist:"Drake",rank:1,place:"Mexico"},
  { id: 2, src: rounded2,artist:"Weekend",rank:2,place:"USA"},
  { id: 3, src: rounded3,artist:"Ariana Grande",rank:3,place:"UK"},
  { id: 4, src: rounded4,artist:"Taylor Swift",rank:4,place:"Russia"},
  { id: 5, src: rounded5,artist:"XXXtention",rank:5,place:"England"},
  { id: 6, src: rounded6,artist:"Drake",rank:6,place:"USA"},
  { id: 7, src: rounded7,artist:"Ariana Grande",rank:7,place:"UK"},
  { id: 8, src: rounded8 ,artist:"Weekend",rank:8,place:"Russia"},
  { id: 9, src: rounded9,artist:"Taylor Swift",rank:9,place:"England"},
  { id: 10, src: rounded10,artist:"XXXtention",rank:10,place:"Mexico"}
];
const data1 = [
  { id: 1, src: Card20,playlist:"Trending on Tiktok ",album:"Weekend"},
  { id: 2, src: Card52,playlist:" Trending on Tiktok",album:"Weekend"},
  { id: 3, src: Card2,playlist:"Trending Playlist ",album:"Weekend"},
  { id: 4, src: Card47 ,playlist:"EveryThing from Taylor ",album:"Weekend"},
  { id: 5, src: Card14,playlist:" Ariana Grande This Side",album:"Weekend"},
  { id: 6, src: Card15,playlist:"Good Music for Bad Days",album:"Weekend"},
  { id: 7, src: Card6,playlist:"STAR BOY",album:"Weekend"},
  { id: 8, src: Card62,playlist:"Everything From Drake",album:"Weekend"},
  { id: 9, src: Card8,playlist:"XXXtention",album:"Weekend"},
  { id: 10, src: Card9,playlist:"Dig Out your Soul",album:"Weekend"}
];
const data2 = [
  { id: 1, src: Card11,playlist:"Good Music for Bad Days ",album:"Weekend"},
  { id: 2, src: Card53,playlist:"Ariana Grande This Side ",album:"Weekend"},
  { id: 3, src: Card46,playlist:"Everything From Drake",album:"Weekend"},
  { id: 4, src: Card1,playlist:"Trending Playlist",album:"Weekend"},
  { id: 5, src: Card43,playlist:"EveryThing from Taylor",album:"Weekend"},
  { id: 6, src: Card16,playlist:"Everything From Drake",album:"Weekend"},
  { id: 7, src: Card17,playlist:" STAR BOY",album:"Weekend"},
  { id: 8, src: Card18 ,playlist:"XXXtention",album:"Weekend"},
  { id: 9, src: Card19,playlist:"Freedom",album:"Weekend"},
  { id: 10, src: Card36,playlist:"Good Music for Bad Days",album:"Weekend"}
];
const data3 = [
  { id: 1, src: Card30,playlist:"All Time Rap's",album:"Trending"},
  { id: 2, src: Card69,playlist:"Trending Playlist",album:"Trending"},
  { id: 3, src: Card3,playlist:"Trending on Tiktok",album:"Trending"},
  { id: 4, src: Card4,playlist:"XXXtentio ",album:"Trending"},
  { id: 5, src: Card10,playlist:"EveryThing from Taylor ",album:"Playlist"},
  { id: 6, src: Card61,playlist:" Everything From Drake",album:"Playlist"},
  { id: 7, src: Card5,playlist:"Ariana Grande This Side",album:"Playlist"},
  { id: 8, src: Card7 ,playlist:"STAR BOY",album:"Weekend"},
  { id: 9, src: Card55,playlist:" Good Music for Bad Days",album:"Playlist"},
  { id: 10, src: Card35,playlist:"Trending",album:"Weekend"}
];
const data4 = [
  { id: 1, src: Card51,playlist:"STAR BOY",album:"Weekend"},
  { id: 2, src: Card12,playlist:"Everything From Drake",album:"Albums"},
  { id: 3, src: Card13,playlist:"Ariana Grande This Side",album:"Trending"},
  { id: 4, src: Card45,playlist:"EveryThing from Taylor",album:"Playlist"},
  { id: 5, src: Card42,playlist:"XXXtention",album:"Albums"},
  { id: 6, src: Card41,playlist:"Trending Playlist",album:"Albums"},
  { id: 7, src: Card40,playlist:"Trending on Tiktok",album:"Albums"},
  { id: 8, src: Card38,playlist:"Trending Playlist",album:"Albums"},
  { id: 9, src: Card37,playlist:"All Time Rap's",album:"Albums"},
  { id: 10, src: Card34,playlist:"Good Music for Bad Days",album:"Albums"}
];
const data5 = [
  { id: 1, src: Card21,playlist:"Good Music for Bad Days",album:"Playlists"},
  { id: 2, src: Card22,playlist:"STAR BOY",album:"Playlists"},
  { id: 3, src: Card23,playlist:"XXXtention",album:"Playlists"},
  { id: 4, src: Card24,playlist:"Freedom",album:"Playlists"},
  { id: 5, src: Card25,playlist:"Sunset Days",album:"Playlists"},
  { id: 6, src: Card26,playlist:"Dig Out your Soul",album:"Playlists"},
  { id: 7, src: Card27,playlist:"Smile Vol.1",album:"Playlists"},
  { id: 8, src: Card28,playlist:"Old School",album:"Playlists" },
  { id: 9, src: Card29,playlist:"Top Hits of 2000",album:"Weekend"},
  { id: 10, src: Card31,playlist:"Mine",album:"Weekend"}
];
const data6 = [
  { id: 1, src: Card32,playlist:"Good Music for Bad Days",album:"Weekend"},
  { id: 2, src: Card68,playlist:"STAR BOY",album:"Weekend"},
  { id: 3, src: Card67,playlist:"XXXtention",album:"Weekend"},
  { id: 4, src: Card66,playlist:"Mine",album:"Weekend"},
  { id: 5, src: Card64,playlist:"Top Hits of 2000",album:"Weekend"},
  { id: 6, src: Card60,playlist:"Old School ",album:"Weekend"},
  { id: 7, src: Card58,playlist:"Smile Vol.1",album:"Weekend"},
  { id: 8, src: Card54,playlist:"Dig Out your Soul",album:"Weekend" },
  { id: 9, src: Card50,playlist:"Sunset Days",album:"Weekend"},
  { id: 10, src: Card48,playlist:"Freedom",album:"Weekend"}
] 
const data7 = [
  { id: 1, src: Card33,playlist:"Trending Playlist ",album:"Weekend"},
  { id: 2, src: Card39,playlist:"Good Music for Bad Days",album:"Weekend"},
  { id: 3, src: Card49,playlist:"Trending Playlist",album:"Weekend"},
  { id: 4, src: Card57,playlist:" Trending on Tiktok",album:"Weekend"},
  { id: 5, src: Card44,playlist:"XXXtention ",album:"Weekend"},
  { id: 6, src: Card63,playlist:" EveryThing from Taylor",album:"Weekend"},
  { id: 7, src: Card65,playlist:" Ariana Grande This Side",album:"Weekend"},
  { id: 8, src: Card56 ,playlist:" EveryThing from Taylor",album:"Weekend"},
  { id: 9, src: Card59,playlist:" Ariana Grande This Side",album:"Weekend"},
  { id: 10, src: Card70,playlist:"Sunset Days",album:"Weekend"}
];
