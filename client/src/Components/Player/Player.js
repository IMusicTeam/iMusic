import React, { useEffect, useState } from "react";
import "./Player.css";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
// import useSound from "use-sound"; // for handling the sound
import { IoMdPlay } from "react-icons/io";
import { MdVolumeMute } from "react-icons/md";
import { AiOutlineExpand, AiOutlineCompress } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Player() {
    const [visible, setVisible]=useState(true)
  const [play, { pause, duration, sound }] = useState("qala");
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds
  const [seconds, setSeconds] = useState(); // current position of the audio in seconds
  const time = {
    min: "1",
    sec: "2",
  };
  useEffect(() => {
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
      min: 2,
      sec: 4,
    };
  });
const navigateTo =useNavigate()
  const ExpandAudio =()=>{
    setVisible(!visible)
    if(!visible === false){
        navigateTo('/audioPlayer')
    }else{
        navigateTo(-1)
    }
  }
  return (
    <div className="bg-iBlack h-[170px] pt-[17px]">
      <div className="player text-iWhite">
        <div className="pl-[32px] flex flex-row items-center">
          <div>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMgT9KxIrepVpr0DK9DsEUjVFnGql0TrMNT7ZCcJGf9hiiFqQc4eOynAIaOLKU_Jav3c&usqp=CAU"
              }
              alt="image"
              className="w-[75px] h-[70px]"
            />
          </div>
          <div className="pl-[36px]">
            <p className="text-iGray1 text-[18px]">Taylor Swift</p>
            <p className="text-[20px] font-bold">Taylor Swift</p>
          </div>
        </div>
        <div className="text-iWhite flex flex-row items-center gap-[81px]">
          <BiSkipPrevious size={46} />
          <IoMdPlay size={52} className="text-iWhite" />
          <BiSkipNext size={46} />
        </div>
        <div></div>
        <div className="">
          {/* <div className="time">
              <p className="text-black">
                {currTime.min}:{currTime.sec}
              </p>
              <p className="text-black">
                {time.min}:{time.sec}
              </p>
            </div> */}
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="timeline"
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between w-[1920px] text-iWhite">
        <div className="flex flex-row items-center gap-[10px] pl-[90px]">
          <div>
            0:45:00/ <span>2:00:00</span>
          </div>
          <div>
            <MdVolumeMute />
          </div>
          <div>
            <input
              type="range"
              min="0"
              max={duration / 1000}
              default="0"
              value={seconds}
              className=""
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
          </div>
        </div>

        <div className="pr-[50px]" onClick={ExpandAudio}>
            {visible && <AiOutlineExpand size={26}/>}
            {visible === false && <AiOutlineCompress size={26}/>}
          
        </div>
      </div>
    </div>
  );
}
export default Player;
