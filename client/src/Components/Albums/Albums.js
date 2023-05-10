import React from "react";
import ListenedCard from "../ListenedCard/ListenedCard";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import AlbumsCard1 from "../../Assets/Assets/CardImages/AlbumsCard1.png";
import AlbumsCard2 from "../../Assets/Assets/CardImages/AlbumsCard2.png";
import AlbumsCard3 from "../../Assets/Assets/CardImages/AlbumsCard3.png";
import AlbumsCard4 from "../../Assets/Assets/CardImages/AlbumsCard4.png";
import AlbumsCard5 from "../../Assets/Assets/CardImages/AlbumsCard5.png";
import AlbumsCard6 from "../../Assets/Assets/CardImages/AlbumsCard6.png";
import AlbumsCard7 from "../../Assets/Assets/CardImages/AlbumsCard7.png";
import AlbumsCard8 from "../../Assets/Assets/CardImages/AlbumsCard8.png";
import AlbumsCard9 from "../../Assets/Assets/CardImages/AlbumsCard9.png";
import AlbumsCard10 from "../../Assets/Assets/CardImages/AlbumsCard10.png";
import AlbumsCard11 from "../../Assets/Assets/CardImages/AlbumsCard11.png";
import AlbumsCard12 from "../../Assets/Assets/CardImages/AlbumsCard12.png";
import AlbumsCard13 from "../../Assets/Assets/CardImages/AlbumsCard13.png";
import AlbumsCard14 from "../../Assets/Assets/CardImages/AlbumsCard14.png";
import AlbumsCard15 from "../../Assets/Assets/CardImages/AlbumsCard15.png";

function Albums() {
  const data1 = [
    { id: 1, src: AlbumsCard1, text: "Listen to your own music" },
    { id: 2, src: AlbumsCard2, text: "Listen to your owned music" },
    { id: 3, src: AlbumsCard3, text: "90's Music" },
    { id: 4, src: AlbumsCard4, text: "EDM Beats" },
  ];
  const data2 = [
    { id: 1, src: AlbumsCard5, text: "Listen to your own music" },
    { id: 2, src: AlbumsCard6, text: "Listen to your owned music" },
    { id: 3, src: AlbumsCard7, text: "90's Music" },
    { id: 4, src: AlbumsCard8, text: "EDM Beats" },
  ];
  const data3 = [
    { id: 1, src: AlbumsCard9, text: "Listen to your own music" },
    { id: 2, src: AlbumsCard10, text: "Listen to your owned music" },
    { id: 3, src: AlbumsCard11, text: "90's Music" },
    { id: 4, src: AlbumsCard12, text: "EDM Beats" },
  ];
  const data4 = [
    { id: 1, src: AlbumsCard13, text: "Listen to your own music" },
    { id: 2, src: AlbumsCard14, text: "Listen to your owned music" },
    { id: 3, src: AlbumsCard15, text: "90's Music" },
    { id: 4, src: AlbumsCard1, text: "EDM Beats" },
  ];

  const navigate = useNavigate();
  return (
    <div className="bg-iGray2 pt-[31px] pb-[56px]">
      <button type="button" onClick={() => navigate(`/`)}>
        <IoMdArrowBack className="w-6 h-6 ml-[35px] " />
      </button>
      <div className="pl-[90px] mb-[42px]">
        <div className="flex gap-7">
          {data1?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.src} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[90px] mb-[42px]">
        <div className="flex gap-7">
          {data2?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.src} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[90px] mb-[42px]">
        <div className="flex gap-7">
          {data3?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.src} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[90px] mb-[42px]">
        <div className="flex gap-7">
          {data4?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.src} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Albums;
