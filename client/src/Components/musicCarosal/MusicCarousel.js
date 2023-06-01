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
import AlbumsCard4 from "../../Assets/Assets/CardImages/AlbumsCard4.png";
import AlbumsCard5 from "../../Assets/Assets/CardImages/AlbumsCard5.png";
import AlbumsCard8 from "../../Assets/Assets/CardImages/AlbumsCard8.png";
import AlbumsCard14 from "../../Assets/Assets/CardImages/AlbumsCard14.png"
import AlbumsCard13 from "../../Assets/Assets/CardImages/AlbumsCard13.png"
import AlbumsCard19 from "../../Assets/Assets/CardImages/AlbumsCard19.png";
import AlbumsCard20 from "../../Assets/Assets/CardImages/AlbumsCard20.png";
import AlbumsCard21 from "../../Assets/Assets/CardImages/AlbumsCard21.png";
import AlbumsCard18 from "../../Assets/Assets/CardImages/AlbumsCard18.png";
import axios from 'axios'
import { useNavigate } from 'react-router';
import ListenedCard from '../ListenedCard/ListenedCard';
import { APIConstants, assetURL } from '../../Services/api-constants';
import contractInstance from '../../web3';
import { useDispatch } from 'react-redux';
import { checkApproveSongs, checkBanner } from '../../Redux/Redux';

function MusicCarousel() {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

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
    { id: 10, src: rounded10, artist: "XXXtention", rank: 10, place: "Mexico" }
  ]
  const data1 = [
    { id: 1, src: Card1, playlist: "Trending Playlist", album: "Album" },
    { id: 2, src: Card2, playlist: "Trending on Tiktok", album: "Playlists" },
    { id: 3, src: Card3, playlist: "Trending Playlist", album: "Playlists" },
    { id: 4, src: Card4, playlist: "All Time Rap's", album: "Playlists" },
    { id: 5, src: Card5, playlist: "Good Music for Bad Days", album: "Playlist" },
    { id: 6, src: Card6, playlist: "Nineties Playlists", album: "Playlist" },
    { id: 7, src: Card7, playlist: "Trending on Tiktok", album: "Albums" },
    { id: 8, src: Card8, playlist: "Trending Playlist", album: "Albums" },
    { id: 9, src: Card9, playlist: "All Time Rap's", album: "Albums" },
    { id: 10, src: Card10, playlist: "Good Music for Bad Days", album: "Albums" }
  ]
  const data2 = [
    { id: 1, src: Card11, playlist: "Mine", album: "Playlist" },
    { id: 2, src: Card12, playlist: "Top Hits of 2000", album: "Playlists" },
    { id: 3, src: Card13, playlist: "Trending Playlist", album: "Playlist" },
    { id: 4, src: Card14, playlist: "Old School", album: "Playlist" },
    { id: 5, src: Card15, playlist: "Smile VoL1", album: "Playlist" },
    { id: 6, src: Card16, playlist: "Switch", album: "Playlist" },
    { id: 7, src: Card17, playlist: "Smile Vol.1", album: "Playlists" },
    { id: 8, src: Card18, playlist: "Old School", album: "Playlists" },
    { id: 9, src: Card19, playlist: "Top Hits of 2000", album: "Weekend" },
    { id: 10, src: Card20, playlist: "Mine", album: "Weekend" }
  ]
  const data3 = [
    { id: 1, src: Card21, playlist: "Dig Out Your Soul", album: "Playlist" },
    { id: 2, src: Card22, playlist: "Sunset Days", album: "Playlist" },
    { id: 3, src: Card23, playlist: "Freedom", album: "Playlist" },
    { id: 4, src: Card24, playlist: "Loud(ish)", album: "Playlist" },
    { id: 5, src: Card25, playlist: "Dance Groove", album: "Playlist" },
    { id: 6, src: Card26, playlist: "All Mix", album: "Playlist" },
    { id: 7, src: Card27, playlist: "Ariana Grande This Side", album: "Playlist" },
    { id: 8, src: Card28, playlist: "STAR BOY", album: "Weekend" },
    { id: 9, src: Card29, playlist: " Good Music for Bad Days", album: "Playlist" },
    { id: 10, src: Card30, playlist: "Trending", album: "Weekend" }
  ]
  const data4 = [
    { id: 1, src: Card31, playlist: "Space Out", album: "Playlist" },
    { id: 2, src: Card32, playlist: "Vibe", album: "Playlist" },
    { id: 3, src: Card33, playlist: "In My Zone", album: "Playlist" },
    { id: 4, src: Card34, playlist: "Utopia", album: "Playlist" },
    { id: 5, src: Card35, playlist: "Sad Bitch", album: "Playlist" },
    { id: 6, src: Card36, playlist: "Trending Playlist", album: "Album" },
    { id: 7, src: Card37, playlist: " STAR BOY", album: "Weekend" },
    { id: 8, src: Card38, playlist: "XXXtention", album: "Weekend" },
    { id: 9, src: Card39, playlist: "Freedom", album: "Weekend" },
    { id: 10, src: Card40, playlist: "Good Music for Bad Days", album: "Weekend" }
  ]
  const data5 = [
    { id: 1, src: Card41, playlist: "Remix Radio", album: "Radio" },
    { id: 2, src: Card42, playlist: "Jay - Jay Johanason", album: "Radio" },
    { id: 3, src: Card43, playlist: "Discography", album: "Radio" },
    { id: 4, src: Card44, playlist: "Disco", album: "Radio" },
    { id: 5, src: Card45, playlist: "Remix Radio", album: "Radio" },
    { id: 6, src: Card46, playlist: " EveryThing from Taylor", album: "Weekend" },
    { id: 7, src: Card47, playlist: " Ariana Grande This Side", album: "Weekend" },
    { id: 8, src: Card48, playlist: " EveryThing from Taylor", album: "Weekend" },
    { id: 9, src: Card49, playlist: " Ariana Grande This Side", album: "Weekend" },
    { id: 10, src: Card50, playlist: "Sunset Days", album: "Weekend" }
  ]
  const data6 = [
    { id: 1, src: Card51, playlist: "Silence", album: "Own Playlist" },
    { id: 2, src: Card52, playlist: "Journey Playlist", album: "Own Playlist" },
    { id: 3, src: Card53, playlist: "Love", album: "Own Playlist" },
    { id: 4, src: Card54, playlist: "Never lies", album: "Own Playlist" },
    { id: 5, src: Card55, playlist: "Indie Covers", album: "Own Playlist" },
    { id: 6, src: Card56, playlist: "Workout Session", album: "Own Playlist" },
    { id: 7, src: Card57, playlist: "Everything From Drake", album: "Radio" },
    { id: 8, src: Card58, playlist: "Sunset Days", album: "Weekend" },
    { id: 9, src: Card59, playlist: "XXXtention", album: "Radio" },
    { id: 10, src: Card60, playlist: " EveryThing from Taylor", album: "Weekend" },
  ]
  const data7 = [
    { id: 1, src: Card61, playlist: "Trending on Tiktok ", album: "Weekend" },
    { id: 2, src: Card62, playlist: " Trending on Tiktok", album: "Weekend" },
    { id: 3, src: Card63, playlist: "Trending Playlist ", album: "Weekend" },
    { id: 4, src: Card64, playlist: "EveryThing from Taylor ", album: "Weekend" },
    { id: 5, src: Card65, playlist: " Ariana Grande This Side", album: "Weekend" },
    { id: 6, src: Card66, playlist: "Good Music for Bad Days", album: "Weekend" },
    { id: 7, src: Card67, playlist: "STAR BOY", album: "Weekend" },
    { id: 8, src: Card68, playlist: "Everything From Drake", album: "Weekend" },
    { id: 9, src: Card69, playlist: "XXXtention", album: "Weekend" },
    { id: 10, src: Card70, playlist: "Dig Out your Soul", album: "Weekend" }
  ]
  const albumsData = [
    { id: 1, src: AlbumsCard5, text: "Listen to your own Music" },
    { id: 2, src: AlbumsCard4, text: "Listen to your owned Music" },
    { id: 3, src: AlbumsCard8 },
    { id: 4, src: AlbumsCard18 },
    { id: 5, src: AlbumsCard14 },
    { id: 6, src: AlbumsCard13 },
    { id: 7, src: AlbumsCard19 },
    { id: 8, src: AlbumsCard20 },
    { id: 9, src: AlbumsCard21 },
  ]
  const navigateTO = useNavigate();


  useEffect(() => {
    getApprovedSongs()
  }, [])

  const dispatch = useDispatch();

  const getApprovedSongs = async () => {
    dispatch(checkBanner());
    let tempArray = []
    try {
      const getContractSongs = await contractInstance.methods.getAllSongs().call()
      if (getContractSongs !== null && getContractSongs && getContractSongs.length > 0) {
        getContractSongs.filter(Boolean).map(({userWalletId,songId, adminWalletId,albumName, artistName, createdAt, depositAddress, favourited, lyrics, price, songDescription, songName, songThumbnail, tune, updatedAt, userId }, i) => {
          if (albumName || artistName|| adminWalletId|| songId || userWalletId || createdAt || depositAddress || favourited || price || songDescription || songName || songThumbnail || tune || updatedAt || userId) {
            tempArray.push({
              albumName: albumName,
              artistName: artistName,
              createdAt: createdAt,
              userWalletId:userWalletId,
              adminWalletId:adminWalletId,
              price: price,
              songDescription: songDescription,
              songName: songName,
              songThumbnail: songThumbnail,
              tune: tune,
              updatedAt: updatedAt,
              userId: userId,
              _id:songId
            })
          }
        })
      }
      setMusicList(tempArray)
    } catch {
      console.log("Contracts: Failed to get all new releases")
    }
  }

  const HandelSeeAll = (value) => {
    const { path, title ,newrelease} = value
    navigateTO(`/see-all/${path}`, {
      state: {title,newrelease}
    })
  }

  return (
    <div className='pl-[34px] pb-[32px] pr-7'>
      {musicList.length > 0 && (<div className='flex flex-row justify-between'>
        <h1 className='text-[30px]'>New releases</h1>
      </div>)}

      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {musicList.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={assetURL + item.songThumbnail} newRelease={true} />
            </div>
          )
        })}
      </div>

      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium '>New uploaded</h1>
        <button onClick={() => HandelSeeAll({ path: 'new-release', title: 'New releases', newrelease:{musicList} })} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>

      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          data1.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            )
          })
        }
      </div>


      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium mt-[28px]'>Top charts</h1>
        <button onClick={() => HandelSeeAll({ path: 'new-uploaded', title: 'New uploaded' })} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>

      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          data2.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            )
          })
        }
      </div>

      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium mt-[28px]'>Recommended for you</h1>
        <button onClick={() => HandelSeeAll({ path: 'top-chart', title: 'Top charts' })} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>

      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          data3.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            )
          })
        }
      </div>

      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium mt-[28px]'>Featured playlists Based on Mood</h1>
        <button onClick={() => HandelSeeAll({ path: 'recommended-for-you', title: 'Recommended for you' })} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>
      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          data4.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            )
          })
        }
      </div>

      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium mt-[28px]'>Last Spotlight</h1>
        <button onClick={() => HandelSeeAll({ path: 'featured-playlists', title: 'Featured playlists Based on Mood' })} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>
      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          data5.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            )
          })
        }
      </div>

      <div className="flex flex-row justify-between">
        <h1 className="text-[30px] font-medium"></h1>
        <h5 onClick={() => HandelSeeAll({ path: 'last-spotlight', title: 'Last Spotlight' })} className='underline font-medium text-[16px] text-iBlack1 cursor-pointer'>See All</h5>
      </div>

      <div className="flex flex-row gap-[29px]  1xl:gap-[42px] 2xl:gap-[20px] 13mac:gap-[25px] 4xl:gap-[23px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {
          data.map((item) => {
            return (
              <div>
                <RoundedCard data={item} src={item.src} artist={item.artist} rank={item.rank} place={item.place} />
              </div>
            )
          })
        }
      </div>


      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium mt-[28px]'>Radio stations</h1>
      </div>

      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          data6.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            )
          })
        }
      </div>


      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium mt-[28px]'>Your Playlists</h1>
        <button onClick={() => HandelSeeAll({ path: 'radio-stations', title: 'Radio stations' })} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>

      <div className='flex flex-row xl:gap-[33px] gap-[24px] 1xl:gap-[66px] 2xl:gap-[29px] 4xl:gap-[22px]  p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          data7.map((item) => {
            return (
              <div>
                <ProfileCard data={item} src={item.src} />
              </div>
            )
          })
        }
      </div>


      <div className='flex flex-row justify-between'>
        <h1 className='text-[30px] font-medium mt-[28px]'>Top Albums</h1>
        <button onClick={() => HandelSeeAll({ path: 'your-playlists', title: 'Your Playlists' })} className='underline font-medium text-[16px] text-iBlack1 mt-[28px]'>See All</button>
      </div>

      <div className='flex flex-row gap-[24px] p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
        {
          albumsData.map((item) => {
            return (
              <div className='w-[360px] h-[360px]'>
                <ListenedCard image={item.src} text={item.text} />
              </div>
            )
          })
        }
      </div>

      <div>
        <div className="flex flex-row justify-between">
          <h1 className="text-[30px] font-medium"></h1>
          <h5 onClick={() => HandelSeeAll({ path: 'top-albums', title: 'Top Albums' })} className='underline font-medium text-[16px] text-iBlack1 cursor-pointer'>See All</h5>
        </div>
      </div>
    </div>


  )
}

export default MusicCarousel
