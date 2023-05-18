import React, { useRef } from 'react';
import './Mp3.css';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';
import {MdSkipPrevious, MdSkipNext} from 'react-icons/md'
import {AiOutlinePause} from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'

const Mp3 = ({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=> {

const clickRef = useRef();

const PlayPause = ()=>
{
  setisplaying(!isplaying);

}


const checkWidth = (e)=>
{
  let width = clickRef.current.clientWidth;
  const offset = e.nativeEvent.offsetX;

  const divprogress = offset / width * 100;
  audioElem.current.currentTime = divprogress / 100 * currentSong.length;

}

const skipBack = ()=>
{
  const index = songs.findIndex(x=>x.title == currentSong.title);
  if (index == 0)
  {
    setCurrentSong(songs[songs.length - 1])
  }
  else
  {
    setCurrentSong(songs[index - 1])
  }
  audioElem.current.currentTime = 0;
  
}


const skiptoNext = ()=>
{
  const index = songs.findIndex(x=>x.title == currentSong.title);

  if (index == songs.length-1)
  {
    setCurrentSong(songs[0])
  }
  else
  {
    setCurrentSong(songs[index + 1])
  }
  audioElem.current.currentTime = 0;
  
}

return (
  <div className='player_container w-full max-w-[1920px]'>
        <div className='col-auto ArrangeItems'>
        <div className="">
        <p className='text-iWhite text-start'>{currentSong.title}</p>
        </div>
        <div className="controls">
      <MdSkipPrevious size={45} className='btn_action' onClick={skipBack}/>
      {isplaying ? <AiOutlinePause size={52} className='btn_action pp' onClick={PlayPause}/> : <FaPlay size={52}  className='btn_action pp' onClick={PlayPause}/>}
      <MdSkipNext size={45} className='btn_action' onClick={skiptoNext}/>        
         </div>
        </div>
    <div className="navigation">
      <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
        <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
      </div>
    </div>
    <p className='text-iWhite'>{`${Math.floor(audioElem.current?.currentTime / 60)} :${Math.floor(audioElem.current?.currentTime%60) < 10 ? '0' : ''}${Math.floor(audioElem.current?.currentTime%60)}/ ${Math.floor(currentSong.length/60)}` }</p>
  </div>

)
}

export default Mp3
