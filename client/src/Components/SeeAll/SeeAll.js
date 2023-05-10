import React, { useEffect, useState } from "react";
import Card1 from "./../../Assets/Assets/CardImages/Card1.png";
import Card2 from "./../../Assets/Assets/CardImages/Card2.png";
import Card3 from "./../../Assets/Assets/CardImages/Card3.png";
import Card4 from "./../../Assets/Assets/CardImages/Card4.png";
import Card5 from "./../../Assets/Assets/CardImages/Card5.png";
import Card6 from "./../../Assets/Assets/CardImages/Card6.png";
import Card7 from "./../../Assets/Assets/CardImages/Card7.png";
import Card8 from "./../../Assets/Assets/CardImages/Card8.png";
import Card9 from "./../../Assets/Assets/CardImages/Card9.png";
import Card10 from "./../../Assets/Assets/CardImages/Card10.png";
import Card11 from "./../../Assets/Assets/CardImages/Card11.png";
import Card12 from "./../../Assets/Assets/CardImages/Card12.png";
import Card13 from "./../../Assets/Assets/CardImages/Card13.png";
import Card14 from "./../../Assets/Assets/CardImages/Card14.png";
import Card15 from "./../../Assets/Assets/CardImages/Card15.png";
import Card16 from "./../../Assets/Assets/CardImages/Card16.png";
import Card17 from "./../../Assets/Assets/CardImages/Card17.png";
import Card18 from "./../../Assets/Assets/CardImages/Card18.png";
import Card19 from "./../../Assets/Assets/CardImages/Card19.png";
import Card20 from "./../../Assets/Assets/CardImages/Card20.png";
import Card21 from "./../../Assets/Assets/CardImages/Card21.png";
import Card22 from "./../../Assets/Assets/CardImages/Card22.png";
import Card23 from "./../../Assets/Assets/CardImages/Card23.png";
import Card24 from "./../../Assets/Assets/CardImages/Card24.png";
import Card25 from "./../../Assets/Assets/CardImages/Card25.png";
import Card26 from "./../../Assets/Assets/CardImages/Card26.png";
import Card27 from "./../../Assets/Assets/CardImages/Card27.png";
import Card28 from "./../../Assets/Assets/CardImages/Card28.png";
import Card29 from "./../../Assets/Assets/CardImages/Card29.png";
import Card30 from "./../../Assets/Assets/CardImages/Card30.png";
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import { useLocation, useNavigate } from "react-router";
import { BiLeftArrowAlt } from "react-icons/bi";

function SeeAll() {
  const data1 = [
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
  ];

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
  ];
  const data3 = [
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
  ];
  const data4= [
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
  const [title, setTitle] = useState("");
  const data = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle(data.state);
    debugger;
  }, []);

  const navigateTo = useNavigate();
  const HandelBack = () => {
    navigateTo(-1);
  };
  return (
    <>
      <button onClick={HandelBack}>
        <BiLeftArrowAlt size={38} className="mt-[20px] ml-[17px]" />
      </button>
      <h1 className="text-[30px] font-semibold mt-[40px] pl-4">{title}</h1>
      <div className="flex flex-row gap-[24px] p-3 mt-[18px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data1.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data2.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data3.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data5.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data4.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SeeAll;
