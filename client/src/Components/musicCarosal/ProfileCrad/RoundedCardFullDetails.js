import React from "react";
import RoundedCard from "./RoundedCard";
import ProfileCard from "./ProfilesCard";
import { IoMdArrowBack } from "react-icons/io";
import Card1 from "../../../Assets/Assets/CardImages/Card1.png";
import Card2 from "../../../Assets/Assets/CardImages/Card2.png";
import Card3 from "../../../Assets/Assets/CardImages/Card3.png";
import Card4 from "../../../Assets/Assets/CardImages/Card4.png";
import Card5 from "../../../Assets/Assets/CardImages/Card5.png";
import Card6 from "../../../Assets/Assets/CardImages/Card6.png";
import Card7 from "../../../Assets/Assets/CardImages/Card7.png";
import Card8 from "../../../Assets/Assets/CardImages/Card8.png";
import Card9 from "../../../Assets/Assets/CardImages/Card9.png";
import Card10 from "../../../Assets/Assets/CardImages/Card10.png";
import Card11 from "../../../Assets/Assets/CardImages/Card11.png";
import Card12 from "../../../Assets/Assets/CardImages/Card12.png";
import Card13 from "../../../Assets/Assets/CardImages/Card13.png";
import Card14 from "../../../Assets/Assets/CardImages/Card14.png";
import Card15 from "../../../Assets/Assets/CardImages/Card15.png";
import Card16 from "../../../Assets/Assets/CardImages/Card16.png";
import Card17 from "../../../Assets/Assets/CardImages/Card17.png";
import Card18 from "../../../Assets/Assets/CardImages/Card18.png";
import Card19 from "../../../Assets/Assets/CardImages/Card19.png";
import Card20 from "../../../Assets/Assets/CardImages/Card20.png";
import Card21 from "../../../Assets/Assets/CardImages/Card21.png";
import Card22 from "../../../Assets/Assets/CardImages/Card22.png";
import Card23 from "../../../Assets/Assets/CardImages/Card23.png";
import Card24 from "../../../Assets/Assets/CardImages/Card24.png";
import Card25 from "../../../Assets/Assets/CardImages/Card25.png";
import Card26 from "../../../Assets/Assets/CardImages/Card26.png";
import Card27 from "../../../Assets/Assets/CardImages/Card27.png";
import Card28 from "../../../Assets/Assets/CardImages/Card28.png";
import Card29 from "../../../Assets/Assets/CardImages/Card29.png";
import Card30 from "../../../Assets/Assets/CardImages/Card30.png";
import rounded1 from "../../../Assets/Assets/CardImages/Rounded1.png";
import rounded2 from "../../../Assets/Assets/CardImages/Rounded2.png";
import rounded3 from "../../../Assets/Assets/CardImages/Rounded3.png";
import rounded4 from "../../../Assets/Assets/CardImages/Rounded4.png";
import rounded5 from "../../../Assets/Assets/CardImages/Rounded5.png";
import rounded6 from "../../../Assets/Assets/CardImages/Rounded6.png";
import rounded7 from "../../../Assets/Assets/CardImages/Rounded7.png";
import rounded8 from "../../../Assets/Assets/CardImages/Rounded8.png";
import rounded9 from "../../../Assets/Assets/CardImages/Rounded9.png";
import { useNavigate } from "react-router";

function RoundedCardFullDetails() {
  const navigate = useNavigate();
  const data = [
    { id: 1, src: rounded1, artist: "Drake", rank: 1, place: "Mexico" },
    { id: 2, src: rounded2, artist: "Weekend", rank: 2, place: "USA" },
    { id: 3, src: rounded3, artist: "Ariana Grande", rank: 3, place: "UK" },
    { id: 4, src: rounded4, artist: "Taylor Swift", rank: 4, place: "Russia" },
    { id: 5, src: rounded5, artist: "XXXtention", rank: 5, place: "England" },
    { id: 6, src: rounded6, artist: "Drake", rank: 6, place: "USA" },
    { id: 7, src: rounded7, artist: "Ariana Grande", rank: 7, place: "UK" },
    { id: 8, src: rounded8, artist: "Weekend", rank: 8, place: "Russia" },
    { id: 9, src: rounded9, artist: "Taylor Swift", rank: 9, place: "England" },
    { id: 10, src: rounded1, artist: "XXXtention", rank: 10, place: "Mexico" },
  ];
  const dataa = [
    { id: 1, src: Card12,playlist:"Good Music for Bad Days",album:"Weekend"},
    { id: 2, src: Card2,playlist:"STAR BOY",album:"Weekend"},
    { id: 3, src: Card3,playlist:"XXXtention",album:"Weekend"},
    { id: 4, src: Card4,playlist:"Mine",album:"Weekend"},
    { id: 5, src: Card5,playlist:"Top Hits of 2000",album:"Weekend"},
    { id: 6, src: Card6,playlist:"Old School ",album:"Weekend"},
    { id: 7, src: Card7,playlist:"Smile Vol.1",album:"Weekend"},
    { id: 8, src: Card8,playlist:"Dig Out your Soul",album:"Weekend" },
    { id: 9, src: Card11,playlist:"Sunset Days",album:"Weekend"},
    { id: 10, src: Card12,playlist:"Freedom",album:"Weekend"}
  ];
  const data1 = [
    
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
  const data2 = [
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
  ];
  const data3 = [
    { id: 1, src: Card11,playlist:"STAR BOY",album:"Weekend"},
    { id: 2, src: Card30,playlist:"Everything From Drake",album:"Albums"},
    { id: 3, src: Card20,playlist:"Ariana Grande This Side",album:"Trending"},
    { id: 4, src: Card14,playlist:"EveryThing from Taylor",album:"Playlist"},
    { id: 5, src: Card24,playlist:"XXXtention",album:"Albums"},
    { id: 6, src: Card16,playlist:"Trending Playlist",album:"Albums"},
    { id: 7, src: Card17,playlist:"Trending on Tiktok",album:"Albums"},
    { id: 8, src: Card18 ,playlist:"Trending Playlist",album:"Albums"},
    { id: 9, src: Card19,playlist:"All Time Rap's",album:"Albums"},
    { id: 10, src: Card20,playlist:"Good Music for Bad Days",album:"Albums"}
  ];
  const data4 = [
    { id: 1, src: Card8,playlist:"Good Music for Bad Days",album:"Playlists"},
    { id: 2, src: Card15,playlist:"STAR BOY",album:"Playlists"},
    { id: 3, src: Card23,playlist:"XXXtention",album:"Playlists"},
    { id: 4, src: Card24,playlist:"Freedom",album:"Playlists"},
    { id: 5, src: Card25,playlist:"Sunset Days",album:"Playlists"},
    { id: 6, src: Card26,playlist:"Dig Out your Soul",album:"Playlists"},
    { id: 7, src: Card27,playlist:"Smile Vol.1",album:"Playlists"},
    { id: 8, src: Card28,playlist:"Old School",album:"Playlists" },
    { id: 9, src: Card29,playlist:"Top Hits of 2000",album:"Weekend"},
    { id: 10, src: Card30,playlist:"Mine",album:"Weekend"}
  ];
  const data5 = [
    { id: 1, src: Card15 ,playlist:"All Time Rap's",album:"Trending"},
    { id: 2, src: Card2,playlist:"Trending Playlist",album:"Trending"},
    { id: 3, src: Card3,playlist:"Trending on Tiktok",album:"Trending"},
    { id: 4, src: Card4,playlist:"XXXtentio ",album:"Trending"},
    { id: 5, src: Card10,playlist:"EveryThing from Taylor ",album:"Playlist"},
    { id: 6, src: Card6,playlist:" Everything From Drake",album:"Playlist"},
    { id: 7, src: Card5,playlist:"Ariana Grande This Side",album:"Playlist"},
    { id: 8, src: Card7 ,playlist:"STAR BOY",album:"Weekend"},
    { id: 9, src: Card8,playlist:" Good Music for Bad Days",album:"Playlist"},
    { id: 10, src: Card9,playlist:"Trending",album:"Weekend"}
  ];

  const navigateTO=useNavigate();
  const HandelSeeAll=(value)=>{
    const {path, title}=value
    navigateTO(`/see-all/${path}`,{
      state:title
    })
  }

  return (
    <div className="bg-iGray2 w-full pl-[35px] pb-[32px] pt-[66px] pr-7">
      <button type="button" onClick={() => navigate(-1)}>
        <IoMdArrowBack className="w-6 h-6 ml-[35px] " />
      </button>
      <div className="flex flex-row gap-[30px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data.map((item) => {
          return (
            <div>
              <RoundedCard
                data={item}
                src={item.src}
                artist={item.artist}
                rank={item.rank}
                place={item.place}
              />
            </div>
          );
        })}
      </div>{" "}
      <div className="mt-[39px] text-[28px] text-iOrange font-medium">
        {" "}
        Description{" "}
      </div>
      <p className="mt-[16px] text-[20px] text-iBlack font-medium">
        Ariana Grande-Butera (/ˌɑːriˈɑːnə ˈɡrɑːndeɪ/ AR-ee-AH-nə GRAHN-day;[note
        1] born June 26, 1993) is an American singer, songwriter, and actress.
        She is noted for her four-octave vocal range and her signature use of
        the whistle register, which have received critical acclaim by critics
        and media. Her personal life and music have been the subject of
        widespread media attention. Grande has received numerous accolades
        throughout her career, including two Grammy Awards, one Brit Award, one
        Bambi Award, two Billboard Music Awards, three American Music Awards,
        nine MTV Video Music Awards, and 30 Guinness World Records.
      </p>
      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-medium mt-[28px]">
          Recommended for you
        </h1>
      </div>
      <div className="flex flex-row gap-[24px] mt-[28px] p-3 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {dataa?.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-medium mt-[28px]">
          Featured playlists Based on Mood
        </h1>
        <button onClick={()=>HandelSeeAll({path:'recommended-for-you',title:'Recommended for you'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>
      <div className="flex flex-row gap-[24px] mt-[28px] p-3 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data1?.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-medium mt-[28px]">Last Spotlight</h1>
        <button onClick={()=>HandelSeeAll({path:'featured-playlists',title:'Featured playlists Based on Mood'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>
      <div className="flex flex-row gap-[24px] mt-[28px] max-w-[1632px] p-3 overflow-x-scroll hidding-x-scroll">
        {data2?.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-medium mt-[28px]">Radio stations</h1>
        <button onClick={()=>HandelSeeAll({path:'last-spotlight',title:'Last Spotlight'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>
      <div className="flex flex-row gap-[24px] mt-[28px] p-3 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data4?.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-medium mt-[28px]">Your Playlists</h1>
        <button onClick={()=>HandelSeeAll({path:'radio-stations',title:'Radio stations'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>
      <div className="flex flex-row gap-[24px] mt-[28px] p-3 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data5?.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-medium mt-[28px]">Top Playlists</h1>
        <button onClick={()=>HandelSeeAll({path:'your-playlists',title:'Your Playlists'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>
      <div className="flex flex-row gap-[24px] mt-[28px] p-3 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data3?.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-medium"></h1>
          <h5 onClick={()=>HandelSeeAll({path:'top-playlists',title:'Top Playlists'})} className='underline font-medium text-[16px] text-iBlack1 mt-[28px] cursor-pointer'>See All</h5>
        </div>
        
      </div>
    </div>
  );
}

export default RoundedCardFullDetails;
