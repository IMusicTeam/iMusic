import React, { useEffect, useState } from "react";
import Card1 from "./../../Assets/Assets/CardImages/Card1.png";
import Card2 from "./../../Assets/Assets/CardImages/Card2.png";
import Card3 from "./../../Assets/Assets/CardImages/Card3.png";
import Card4 from "./../../Assets/Assets/CardImages/Card4.png";
import Card5 from "./../../Assets/Assets/CardImages/Card5.png";
import Card6 from "./../../Assets/Assets/CardImages/Card6.png";
import Card7 from "./../../Assets/Assets/CardImages/Card7.png";
import Card8 from "./../../Assets/Assets/CardImages/Card8.png";
import Card9 from "./../../Assets/Assets/CardImages/Card9.png";
import Card10 from "./../../Assets/Assets/CardImages/Card10.png";
import Card11 from "./../../Assets/Assets/CardImages/Card11.png";
import Card12 from "./../../Assets/Assets/CardImages/Card12.png";
import Card13 from "./../../Assets/Assets/CardImages/Card13.png";
import Card14 from "./../../Assets/Assets/CardImages/Card14.png";
import Card15 from "./../../Assets/Assets/CardImages/Card15.png";
import Card16 from "./../../Assets/Assets/CardImages/Card16.png";
import Card17 from "./../../Assets/Assets/CardImages/Card17.png";
import Card18 from "./../../Assets/Assets/CardImages/Card18.png";
import Card19 from "./../../Assets/Assets/CardImages/Card19.png";
import Card20 from "./../../Assets/Assets/CardImages/Card20.png";
import Card21 from "./../../Assets/Assets/CardImages/Card21.png";
import Card22 from "./../../Assets/Assets/CardImages/Card22.png";
import Card23 from "./../../Assets/Assets/CardImages/Card23.png";
import Card24 from "./../../Assets/Assets/CardImages/Card24.png";
import Card25 from "./../../Assets/Assets/CardImages/Card25.png";
import Card26 from "./../../Assets/Assets/CardImages/Card26.png";
import Card27 from "./../../Assets/Assets/CardImages/Card27.png";
import Card28 from "./../../Assets/Assets/CardImages/Card28.png";
import Card29 from "./../../Assets/Assets/CardImages/Card29.png";
import Card30 from "./../../Assets/Assets/CardImages/Card30.png";
import ProfileCard from "../musicCarosal/ProfileCrad/ProfilesCard";
import { useLocation, useNavigate } from "react-router";
import { BiLeftArrowAlt } from "react-icons/bi";

function SeeAll() {
  const data1 = [
    { id: 1, src: Card1 },
    { id: 2, src: Card2 },
    { id: 3, src: Card3 },
    { id: 4, src: Card4 },
    { id: 5, src: Card10 },
    { id: 6, src: Card6 },
    { id: 7, src: Card6 },
    { id: 8, src: Card7 },
    { id: 9, src: Card8 },
    { id: 10, src: Card9 },
  ];

  const data2 = [
    { id: 1, src: Card11 },
    { id: 2, src: Card12 },
    { id: 3, src: Card13 },
    { id: 4, src: Card14 },
    { id: 5, src: Card15 },
    { id: 6, src: Card16 },
    { id: 7, src: Card17 },
    { id: 8, src: Card18 },
    { id: 9, src: Card19 },
    { id: 10, src: Card20 },
  ];
  const data3 = [
    { id: 1, src: Card21 },
    { id: 2, src: Card22 },
    { id: 3, src: Card23 },
    { id: 4, src: Card24 },
    { id: 5, src: Card25 },
    { id: 6, src: Card26 },
    { id: 7, src: Card27 },
    { id: 8, src: Card28 },
    { id: 9, src: Card29 },
    { id: 10, src: Card30 },
  ];
  const [title, setTitle] = useState("");
  const data = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle(data.state);
    debugger;
  }, []);

  const navigateTo = useNavigate();
  const HandelBack = () => {
    navigateTo(-1);
  };
  return (
    <>
      <button onClick={HandelBack}>
        <BiLeftArrowAlt size={38} className="mt-[20px] ml-[17px]" />
      </button>
      <h1 className="text-[30px] font-semibold mt-[40px] pl-4">{title}</h1>
      <div className="flex flex-row gap-[24px] p-3 mt-[18px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data1.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data2.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data3.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data1.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row gap-[24px] p-3 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll">
        {data2.map((item) => {
          return (
            <div>
              <ProfileCard data={item} src={item.src} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SeeAll;
