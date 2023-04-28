import React from 'react'
import RoundedCard from './../musicCarosal/ProfileCrad/RoundedCard';
import ProfileCard from './../musicCarosal/ProfileCrad/ProfilesCard';
import CardImage1 from '../../Assets/CardImage1.png'
import CardImage2 from '../../Assets/CardImage2.png'
import CardImage3 from '../../Assets/CardImage3.png'
import CardImage4 from '../../Assets/CardImage4.png'
import CardImage5 from '../../Assets/CardImage5.png'
import CardImage6 from '../../Assets/CardImage6.png'
import CardImage7 from '../../Assets/CardImage7.png'
import CardImage8 from '../../Assets/CardImage8.png'
import CardImage10 from '../../Assets/CardImage10.png'
import CardImage11 from '../../Assets/CardImage11.png'
import CardImage12 from '../../Assets/CardImage12.png'
import CardImage13 from '../../Assets/CardImage13.png'
import CardImage14 from '../../Assets/CardImage14.png'
import CardImage15 from '../../Assets/CardImage15.png'
import CardImage16 from '../../Assets/CardImage16.png'
import CardImage17 from '../../Assets/CardImage17.png'
import CardImage18 from '../../Assets/CardImage18.png'
import CardImage19 from '../../Assets/CardImage19.png'
import CardImage20 from '../../Assets/CardImage20.png'
import Card1 from '../../Assets/Card1.png'
import Card2 from '../../Assets/Card2.png'
import Card3 from '../../Assets/Card3.png'
import Card4 from '../../Assets/Card4.png'
import Card6 from '../../Assets/Card6.png'
import Card7 from '../../Assets/Card7.png'
import Card8 from '../../Assets/Card8.png'
import Card9 from '../../Assets/Card9.png'
import Card10 from '../../Assets/Card10.png'
import Card11 from '../../Assets/Card11.png'
import Card12 from '../../Assets/Card12.png'
import Card13 from '../../Assets/Card13.png'
import Card14 from '../../Assets/Card14.png'
import Card15 from '../../Assets/Card15.png'
import Card16 from '../../Assets/Card16.png'
import Card17 from '../../Assets/Card17.png'
import Card18 from '../../Assets/Card18.png'
import Card19 from '../../Assets/Card19.png'
import Card20 from '../../Assets/Card20.png'
function Playlist(){
  const data = [
    { id: 1, src: CardImage1},
    { id: 2, src: CardImage2},
    { id: 3, src: CardImage3},
    { id: 4, src: CardImage4},
    { id: 5, src: CardImage5},
    { id: 6, src: CardImage6},
    { id: 7, src: CardImage7},
    { id: 8, src: CardImage8 },
    { id: 9, src: CardImage11},
    { id: 10, src: CardImage12}
  ]
  const data1 = [
    { id: 1, src: CardImage15},
    { id: 2, src: CardImage11},
    { id: 3, src: CardImage14},
    { id: 4, src: CardImage10},
    { id: 5, src: CardImage15},
    { id: 6, src: CardImage8},
    { id: 7, src: CardImage7},
    { id: 8, src: CardImage3 },
    { id: 9, src: CardImage2},
    { id: 10, src: CardImage12}
  ] 
  const data2 = [
    { id: 1, src: CardImage16},
    { id: 2, src: CardImage17},
    { id: 3, src: CardImage18},
    { id: 4, src: CardImage19},
    { id: 5, src: CardImage20},
    { id: 6, src: CardImage11},
    { id: 7, src: CardImage12},
    { id: 8, src: CardImage13 },
    { id: 9, src: CardImage14},
    { id: 10, src: CardImage15}
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
    { id: 1, src: CardImage20},
    { id: 2, src: CardImage17},
    { id: 3, src: CardImage11},
    { id: 4, src: CardImage7},
    { id: 5, src: CardImage14},
    { id: 6, src: CardImage5},
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
    { id: 6, src: CardImage1},
    { id: 7, src: CardImage2},
    { id: 8, src: CardImage3},
    { id: 9, src: CardImage4},
    { id: 10, src: CardImage5},
  ] 
  const data7 = [
    { id: 1, src: CardImage20},
    { id: 2, src: CardImage11},
    { id: 3, src: CardImage12},
    { id: 4, src: CardImage13 },
    { id: 5, src: CardImage14},
    { id: 6, src: CardImage15},
    { id: 7, src: Card6},
    { id: 8, src: Card6},
    { id: 9, src: Card8},
    { id: 10, src: Card9}
  ] 
  const data8 = [
    { id: 1, src: CardImage1},
    { id: 2, src: CardImage2},
    { id: 3, src: CardImage3},
    { id: 4, src: CardImage4},
    { id: 5, src: CardImage5},
    { id: 6, src: CardImage6},
    { id: 7, src: CardImage7},
    { id: 8, src: CardImage8 },
    { id: 9, src: CardImage11},
    { id: 10, src: CardImage12}
  ] 
return(
<>
<div className='bg-iGray2 w-full pl-[34px]'>
<div className='pl-[34px] pb-[32px]'>
    <div className='flex flex-row justify-between'>
    <h1 className='text-[30px] font-semibold pt-[79px]'>New releases</h1>
    <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
    </div>

    <div className='flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
    {data8.map((item)=>{
      return(
        <div>

<ProfileCard data={item} src={item.src}/>
        </div>
      )
    })}
    </div>

    <div className='flex flex-row justify-between'>
    <h1 className='text-[30px] font-semibold mt-[28px]'>Top charts</h1>
    <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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
     <h1 className='text-[30px] font-semibold mt-[28px]'>Recommended for you</h1>
     <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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
  <h1 className='text-[30px] font-semibold mt-[28px]'>Featured playlists Based on Mood</h1>
  <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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
  <h1 className='text-[30px] font-semibold mt-[28px]'>Last Spotlight</h1>
  <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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
  <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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


  <div className='flex flex-row justify-between'>
  <h1 className='text-[30px] font-semibold mt-[28px]'>Your Playlists</h1>
  <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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
  <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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
 <h1 className='text-[30px] font-semibold mt-[28px]'>Top Playlists</h1>
  <h5 className='underline font-semibold text-[16px] text-iBlack1 mt-[28px]'>Sell All</h5>
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
  </div>
  </div>
</>
   
)
}

export default Playlist