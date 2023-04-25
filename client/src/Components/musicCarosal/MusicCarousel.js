import React from 'react'
import RoundedCard from './ProfileCrad/RoundedCard';
import ProfileCard from './ProfileCrad/ProfilesCard'
function MusicCarousel() {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }];
  return (
    <div>
        <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-semibold'>New releases</h1>
        <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
        </div>
        <ProfileCard data={data}/>

        <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-semibold mt-[28px]'>Top charts</h1>
        <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
        </div>
      <ProfileCard data={data}/>

      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Recommended for you</h1>
        <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
        </div>           
      <ProfileCard data={data}/>

      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Featured playlists Based on Mood</h1>
      <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
    </div>
      <ProfileCard data={data}/>

      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Last Spotlight</h1>
      <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
    </div>
      <ProfileCard data={data}/>


      <RoundedCard data={data}/>


      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Radio stations</h1>
      <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
    </div>
      <ProfileCard data={data}/>


      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Your Playlists</h1>
      <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
    </div>
      <ProfileCard data={data}/>


      <div className='flex flex-row justify-between'>
      <h1 className='text-[30px] font-semibold mt-[28px]'>Top Playlists</h1>
      <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
    </div>
      <ProfileCard data={data}/>

     <div className='flex flex-row justify-between'>
     <h1 className='text-[30px] font-semibold mt-[28px]'>Top Playlists</h1>
      <h5 className='underline font-semibold text-[16px] text-[#060D14] mt-[28px]'>Sell All</h5>
    </div>
      
      <ProfileCard data={data}/>
    </div>

    
  )
}

export default MusicCarousel
