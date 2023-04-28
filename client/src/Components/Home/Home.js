import React from "react";
import RecentlyPlayed from "../RecentlyPlayed/RecentlyPlayed";
import MusicCarousel from "../musicCarosal/MusicCarousel";
import TopBar from "../TopBar/TopBar";

function Home() {
  return (
    <div className="bg-iGray2">
      <TopBar/>
      <RecentlyPlayed />
      <MusicCarousel />
    </div>
  );
}

export default Home;
