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
import AlbumsCard16 from "../../Assets/Assets/CardImages/AlbumsCard16.png";
import AlbumsCard18 from "../../Assets/Assets/CardImages/AlbumsCard18.png";
import AlbumsCard19 from "../../Assets/Assets/CardImages/AlbumsCard19.png";
import Album4 from "../../Assets/Assets/CardImages/album4.png";

function Albums() {
  const data1 = [
    { id: 1, src: AlbumsCard4, text: "Listen to your own music" },
    { id: 2, src: AlbumsCard5, text: "Listen to your owned music" },
    { id: 3, src: AlbumsCard16},
    { id: 4, src: Album4},
  ];
  const data2 = [
    { id: 1, src: AlbumsCard14,},
    { id: 2, src: AlbumsCard13,},
    { id: 3, src: AlbumsCard12,},
    { id: 4, src: AlbumsCard11,},
  ];
  const data3 = [
    { id: 1, src: AlbumsCard9,},
    { id: 2, src: AlbumsCard8,},
    { id: 3, src: AlbumsCard7,},
    { id: 4, src: AlbumsCard6,},
  ];
  const data4 = [
    { id: 1, src: AlbumsCard18,},
    { id: 2, src: AlbumsCard19,},
    { id: 3, src: AlbumsCard1,},
    { id: 4, src: AlbumsCard15,},
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
                <ListenedCard image={item.src}  text={item.text} />
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
                <ListenedCard image={item.src}   />
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
                <ListenedCard image={item.src}   />
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
                <ListenedCard image={item.src}   />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Albums;
