import React, { useEffect, useState } from 'react'
import RoundedCard from './ProfileCrad/RoundedCard';
import ProfileCard from './ProfileCrad/ProfilesCard'
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

import axios from 'axios'

function MusicCarousel() {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = [
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
  const data4= [
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


  useEffect(() => {
    axios
      .get("http://localhost:3000/IMusic/all-songs")
      .then((res) => {
        const data = res.data.data;
        setMusicList(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  
   return (
    <div className='pl-[34px] pb-[32px]'>
        <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-semibold'>New releases</h1>
        <h5 className='underline font-semibold text-[16px] text-iBlack1 -mt-[0.5px]'>See All</h5>
        </div>

      <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {musicList.map((item)=>{
          return(
            <div>
              <ProfileCard data={item} src={item.src} newRelease={true}/>
            </div>
          )
        })}
        </div>

        <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-semibold mt-[28px]'>Top charts</h1>
        <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
        </div>

        <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data1.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>

      <div className='flex flex-row justify-between'>
         <h1 className='text-[30px] font-semibold mt-[28px]'>Recommended for you</h1>
         <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
      </div>   

      <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data2.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>

      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Featured playlists Based on Mood</h1>
      <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
    </div>
    <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data3.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>

      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Last Spotlight</h1>
      <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
    </div>
    <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data4.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>

        <div className='flex flex-row gap-[30px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data.map((item)=>{
              return (
                <div>
                  <RoundedCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>


      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Radio stations</h1>
      <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
    </div>

    <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data5.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>


      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Your Playlists</h1>
      <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
    </div>

    <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data6.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>


      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Top Playlists</h1>
      <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
    </div>

    <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data7.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>

     <div className='flex flex-row justify-between'>
     <h1 className='text-[30px] font-semibold mt-[28px]'>Top Playlists</h1>
      <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>See All</h5>
    </div>
      
    <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            data8.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item} src={item.src}/>
                </div>
              )
            })
          }
        </div>
    </div>

    
  )
}

export default MusicCarousel
