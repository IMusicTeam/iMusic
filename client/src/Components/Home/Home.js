import React from "react";
import RecentlyPlayed from "../RecentlyPlayed/RecentlyPlayed";
import MusicCarousel from "../musicCarosal/MusicCarousel";

function Home() {
  return (
    <div className="bg-iGray2">
      <RecentlyPlayed />
      <MusicCarousel />
    </div>
  );
}

export default Home;
