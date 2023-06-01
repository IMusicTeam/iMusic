import React, { useEffect, useState } from "react";
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
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import { useLocation, useNavigate } from "react-router";
import { BiLeftArrowAlt } from "react-icons/bi";
import { APIConstants, assetURL } from '../../Services/api-constants';
import axios from 'axios'

function SeeAll({newrelease}) {
  const data1 = [
    { id: 1, src: Card20,playlist:"Trending Playlist ",album:"Weekend"},
    { id: 2, src: Card17,playlist:"Good Music for Bad Days",album:"Weekend"},
    { id: 3, src: Card11,playlist:"Trending Playlist",album:"Weekend"},
    { id: 4, src: Card7,playlist:" Trending on Tiktok",album:"Weekend"},
    { id: 5, src: Card14,playlist:"XXXtention ",album:"Weekend"},
    { id: 6, src: Card5,playlist:" EveryThing from Taylor",album:"Weekend"},
    { id: 7, src: Card4,playlist:" Ariana Grande This Side",album:"Weekend"},
    { id: 8, src: Card59 ,playlist:" EveryThing from Taylor",album:"Weekend"},
    { id: 9, src: Card6,playlist:" Ariana Grande This Side",album:"Weekend"},
    { id: 10, src: Card1,playlist:"Sunset Days",album:"Weekend"}
  ];

  const data2 = [
    { id: 1, src: Card70,playlist:"Mine",album:"Radio"},
    { id: 2, src: Card62,playlist:" Top Hits of 2000",album:"Radio"},
    { id: 3, src: Card58 ,playlist:"Old School",album:"Radio"},
    { id: 4, src: Card8,playlist:"Smile Vol.1",album:"Radio"},
    { id: 5, src: Card9,playlist:"Good Music for Bad Days",album:"Radio"},
    { id: 6, src: Card69,playlist:"Freedom",album:"Radio"},
    { id: 7, src: Card2,playlist:"Everything From Drake",album:"Radio"},
    { id: 8, src: Card3,playlist:"Sunset Days",album:"Weekend"},
    { id: 9, src: Card65,playlist:"XXXtention",album:"Radio"},
    { id: 10, src: Card64,playlist:" EveryThing from Taylor",album:"Weekend"},
  ];
  const data3 = [
    { id: 1, src: Card54,playlist:"Good Music for Bad Days ",album:"Weekend"},
    { id: 2, src: Card55,playlist:"Ariana Grande This Side ",album:"Weekend"},
    { id: 3, src: Card13,playlist:"Everything From Drake",album:"Weekend"},
    { id: 4, src: Card12,playlist:"Trending Playlist",album:"Weekend"},
    { id: 5, src: Card15,playlist:"EveryThing from Taylor",album:"Weekend"},
    { id: 6, src: Card16,playlist:"Everything From Drake",album:"Weekend"},
    { id: 7, src: Card53,playlist:" STAR BOY",album:"Weekend"},
    { id: 8, src: Card18 ,playlist:"XXXtention",album:"Weekend"},
    { id: 9, src: Card19,playlist:"Freedom",album:"Weekend"},
    { id: 10, src: Card53,playlist:"Good Music for Bad Days",album:"Weekend"}
  ];
  const data4= [
    { id: 1, src: Card30,playlist:"All Time Rap's",album:"Trending"},
    { id: 2, src: Card68,playlist:"Trending Playlist",album:"Trending"},
    { id: 3, src: Card67,playlist:"Trending on Tiktok",album:"Trending"},
    { id: 4, src: Card66,playlist:"XXXtentio ",album:"Trending"},
    { id: 5, src: Card10,playlist:"EveryThing from Taylor ",album:"Playlist"},
    { id: 6, src: Card61,playlist:" Everything From Drake",album:"Playlist"},
    { id: 7, src: Card63,playlist:"Ariana Grande This Side",album:"Playlist"},
    { id: 8, src: Card60 ,playlist:"STAR BOY",album:"Weekend"},
    { id: 9, src: Card57,playlist:" Good Music for Bad Days",album:"Playlist"},
    { id: 10, src: Card56,playlist:"Trending",album:"Weekend"}
  ] 
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
    { id: 10, src: Card52,playlist:"Mine",album:"Weekend"}
  ] 
  const [title, setTitle] = useState("");
  const [newData, setNewData]=useState([])
  const data = useLocation();
  debugger
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle(data.state.title);
    if(data.state.newrelease){
      setNewData(data.state.newrelease.musicList)
      debugger
    }
  }, []);

  // useEffect(() => {
    
  //   // axios
  //   //   .get(APIConstants.allsongs)
  //   //   .then((res) => {
  //   //     const data = res.data.data;
  //   //     setNewData(data)
  //   //     setTimeout(() => {
  //   //       setLoading(false);
  //   //     }, 1000);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //     setLoading(false);
  //   //   });
  // }, []);

  const navigateTo = useNavigate();
  const HandelBack = () => {
    navigateTo(-1);
  };
  return (
    <>
      <button onClick={HandelBack}>
        <BiLeftArrowAlt size={38} className="mt-[20px] ml-[35px]" />
      </button>
      <h1 className="text-[30px] font-medium mt-[40px] pl-4 ml-[18px]">{title}</h1>
     
{title === "New releases" ? (
    <>
    <div className="flex flex-row gap-[24px] p-3 mt-[18px] h-[530px] overflow-y-scroll max-w-[1632px] overflow-x-scroll hidding-x-scroll ml-[18px]">
        {newData?.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={assetURL + item.songThumbnail} />
            </div>
          );
        })}
      </div>
    </>)
  :
    (<div>
      <div className="flex flex-row gap-[24px] p-3 mt-[18px] max-w-[1632px] overflow-x-scroll hidding-x-scroll ml-[18px]">
        {data1.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll ml-[18px]">
        {data2.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll ml-[18px]">
        {data3.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll ml-[18px]">
        {data5.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll ml-[18px] mb-[30px]">
        {data4.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
      </div>
      )}
    </>
  );
}
export default SeeAll;
