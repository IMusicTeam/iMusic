import axios from "axios";
import Mp3 from "../mp3/Mp3";
// import "./App.css";
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { songsdata } from "./audios";

const Music = () => {
    const [songs, setSongs] = useState(songsdata);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songsdata[1]);
  
    const audioElem = useRef();
  
    useEffect(() => {
      if (isplaying) {
        audioElem.current.play();
      }
      else {
        audioElem.current.pause();
      }
    }, [isplaying])
  
    const onPlaying = () => {
      const duration = audioElem.current.duration;
      const ct = audioElem.current.currentTime;
  
      setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
  
    }
  
  
    return (
      <div className="App">
        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
        <Mp3 songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      </div>
    );
  }

export default Music;
