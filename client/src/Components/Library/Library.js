import React from "react";
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import RoundedCard from "../musicCarosal/ProfileCrad/RoundedCard";

function Library() {
  const cardData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
  ];

  return (
    <div className="bg-iGray2 pt-[52px] pl-9 pb-[114px]">
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">New releases</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Top charts</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Recommended for you</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">
            Featured playlists Based on Mood
          </h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Last Spotlight</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex gap-6 max-w-[1632px] pl-[13px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <RoundedCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Radio stations</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Your Playlists</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Top Playlists</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-between my-7">
          <h1 className="text-[30px] font-semibold">Top Playlists</h1>
          <h5 className="underline font-semibold text-[16px] text-iBlack1 mt-[28px]">
            Sell All
          </h5>
        </div>
        <div className="flex gap-6 max-w-[1632px] overflow-x-scroll hidding-x-scroll">
          {cardData?.map((item) => {
            return (
              <div>
                <ProfileCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Library;
