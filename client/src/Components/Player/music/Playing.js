import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
// import qala from "./../../Assets/Ori-Vaari.mp3"; // importing the music
import "./Playing.css";
import { useLocation } from "react-router";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Playing() {
  const location = useLocation();
  const data = location.state;
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound('qala');
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };
  return (
    <div className="py-1 pb-[54px] bg-gradient-to-r from-orange-100 via-orange-300 to-orange-300">
      <div className="component flex flex-col justify-center items-center gap-[10px] drop-shadow-xl relative ">
        <div className="text-[28px] text-iWhite pt-5 pb-1 font-bold w-full max-w-[600px] bg-[#295D93] rounded-t-[28px] pb-[192px] text-white flex items-center justify-center">
          Playing Now
        </div>
        <div className="absolute z-1 top-[126px]">
          <img
            className="musicCover max-w-[280px] h-[190px]"
            src={data.image}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-[10px] bg-[#ee8c15] rounded-[28px] w-full max-w-[600px] -mt-[32px] pb-9">
          <div className="mt-[90px]">
            <h3 className="text-iWhite font-bold text-[30px] p-3">
              {data?.songName}
            </h3>
            {/* <p className="subTitle">Qala</p> */}
          </div>
          {/* <div className="max-w-[320px] w-full">
            <div className="time">
              <p className="text-black">
                {currTime.min}:{currTime.sec}
              </p>
              <p className="text-black">
                {time.min}:{time.sec}
              </p>
            </div>
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
          </div> */}
          <div>
            <ReactAudioPlayer
              src={data.audio}
              className="custom-audio-player" // Add your own class name here
              controls
            />
          </div>
          {/* <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#7e48b4" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#7e48b4" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#7e48b4" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#7e48b4" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div> */}
        </div>
      </div>
    </div>
  );
}
export default Playing;
