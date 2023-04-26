import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./ProfileCard.css";

function ProfileCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);
  const [indexValue, setIndexValue] = useState("");
  const MouseEnter = (index) => {
    setIndexValue(index);
    setIsHovered(true);
  };
  const MouseLeave = () => {
    setIsHovered(false);
    setIndexValue("");
  };
  return (
    <div
      className=""
      onMouseEnter={() => MouseEnter(data.id)}
      onMouseLeave={MouseLeave}
    >
      <div className="w-[300px] h-[270px] rounded-[20px] relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-400">
        <div className="w-[300px]">
          <img
            className="rounded-t-[20px]"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />

          {isHovered && indexValue === data.id && (
            <button className="z-10 absolute !left-[200px] !top-[150px] start-0 w-[80px] h-[80px] bg-iOrange rounded-full border-indigo-600 hover:border-2 hover:border-iWhite">
              <BsFillPlayFill className="pl-1 w-[32px] h-[100px] pauseIcon text-iWhite" />
            </button>
          )}
        </div>
        <div className="absolute bg-iNavyBlue  w-[300px] h-[71px] rounded-b-2xl">
          <div className="text-[15px] font-semibold text-iWhite mt-3 ml-[6px]">
            Trending Playlist
          </div>
          <div className="text-[12px] font-semibold text-iGray3 ml-[6px]">
            Album
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
