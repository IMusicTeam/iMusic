import React from "react";
import RecentlyPlayed from "../RecentlyPlayed/RecentlyPlayed";
import MusicCarousel from "../musicCarosal/MusicCarousel";
import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";

function Home() {
  return (
    <div className="bg-iGray2">
      <RecentlyPlayed />
      <MusicCarousel />
    </div>
  );
}

export default Home;
