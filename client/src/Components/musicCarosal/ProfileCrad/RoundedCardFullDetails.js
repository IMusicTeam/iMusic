import React from 'react';
import RoundedCard from './RoundedCard';
import ProfileCard from './ProfilesCard';
function RoundedCardFullDetails({data}){
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }];
    return (
        <div className="bg-iGray2 w-full pl-[35px] pb-[32px] pt-[66px]">
            <RoundedCard data={data}/>
            
                <div className='mt-[39px] text-[28px] text-iOrange font-semibold'> Description </div>
                <p className='mt-[16px] text-[20px] text-iBlack font-semibold'>Ariana Grande-Butera (/ˌɑːriˈɑːnə ˈɡrɑːndeɪ/ AR-ee-AH-nə GRAHN-day;[note 1] born June 26, 1993) 
                is an American singer, songwriter, and actress. She is noted for her four-octave vocal range and her 
                signature use of the whistle register, which have received critical acclaim by critics and media.
                Her personal life and music have been the subject of widespread media attention. Grande has 
                received numerous accolades throughout her career, including two Grammy Awards, one Brit Award, one Bambi
                 Award, two Billboard Music Awards, three American Music Awards, nine MTV Video Music Awards, and 30 
                 Guinness World Records.</p>

        <div className='flex flex-row justify-between'>
          <h1 className='text-[30px] font-semibold mt-[28px]'>Recommended for you</h1>
          <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
        </div>
        <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            items?.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item}/>
                </div>
              )
            })
          }
        </div>

        <div className='flex flex-row justify-between'>
            <h1 className='text-[30px] font-semibold mt-[28px]'>Featured playlists Based on Mood</h1>
            <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
        </div>
        <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            items?.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item}/>
                </div>
              )
            })
          }
        </div>

        <div className='flex flex-row justify-between'>
          <h1 className='text-[30px] font-semibold mt-[28px]'>Last Spotlight</h1>
          <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
        </div>
        <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            items?.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item}/>
                </div>
              )
            })
          }
        </div>
        
        <div className='flex flex-row justify-between'>
            <h1 className='text-[30px] font-semibold mt-[28px]'>Radio stations</h1>
            <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
        </div>
        <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            items?.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item}/>
                </div>
              )
            })
          }
        </div>

        <div className='flex flex-row justify-between'>
            <h1 className='text-[30px] font-semibold mt-[28px]'>Your Playlists</h1>
            <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
        </div>
        <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            items?.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item}/>
                </div>
              )
            })
          }
        </div>

        <div className='flex flex-row justify-between'>
            <h1 className='text-[30px] font-semibold mt-[28px]'>Top Playlists</h1>
            <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
        </div>
        <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            items?.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item}/>
                </div>
              )
            })
          }
        </div>

        <div className='flex flex-row justify-between'>
            <h1 className='text-[30px] font-semibold mt-[28px]'>Top Playlists</h1>
            <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
        </div>
        <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {
            items?.map((item)=>{
              return(
                <div>
                   <ProfileCard data={item}/>
                </div>
              )
            })
          }
        </div>

        </div>
    )
}

export default RoundedCardFullDetails