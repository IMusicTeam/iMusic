import React from "react";
import ListenedCard from "../ListenedCard/ListenedCard";
import { useNavigate } from "react-router";
import AlbumsCard1 from "../../Assets/Assets/CardImages/AlbumsCard1.png";
import AlbumsCard4 from "../../Assets/Assets/CardImages/AlbumsCard4.png";
import AlbumsCard5 from "../../Assets/Assets/CardImages/AlbumsCard5.png";
import AlbumsCard6 from "../../Assets/Assets/CardImages/AlbumsCard6.png";
import AlbumsCard7 from "../../Assets/Assets/CardImages/AlbumsCard7.png";
import AlbumsCard8 from "../../Assets/Assets/CardImages/AlbumsCard8.png";
import AlbumsCard9 from "../../Assets/Assets/CardImages/AlbumsCard9.png";
import AlbumsCard11 from "../../Assets/Assets/CardImages/AlbumsCard11.png";
import AlbumsCard12 from "../../Assets/Assets/CardImages/AlbumsCard12.png";
import AlbumsCard13 from "../../Assets/Assets/CardImages/AlbumsCard13.png";
import AlbumsCard14 from "../../Assets/Assets/CardImages/AlbumsCard14.png";
import AlbumsCard15 from "../../Assets/Assets/CardImages/AlbumsCard15.png";
import AlbumsCard18 from "../../Assets/Assets/CardImages/AlbumsCard18.png";
import AlbumsCard19 from "../../Assets/Assets/CardImages/AlbumsCard19.png";
import Album4 from "../../Assets/Assets/CardImages/album4.png";
import { BiLeftArrowAlt } from "react-icons/bi";

function Albums() {
  const data1 = [
    { id: 1, src: AlbumsCard4, text: "Listen to your own music" },
    { id: 2, src: AlbumsCard5, text: "Listen to your owned music" },
    { id: 3, src: AlbumsCard1},
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
      <BiLeftArrowAlt size={38} className="ml-[30px] text-iBlack" />
      </button>
      <div className="pl-[30px] mb-[42px] 13mac:pl-[30px] 3xl:pl-[30px]">
      <div className='flex flex-row gap-[28px] 13mac:gap-[24px] 3xl:gap-[28px] p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data1?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.src}  text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[30px] mb-[42px] 13mac:pl-[30px] 3xl:pl-[30px]">
      <div className='flex flex-row gap-[28px] 13mac:gap-[24px] 3xl:gap-[28px] p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data2?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.src}   />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[30px] mb-[42px] 13mac:pl-[30px] 3xl:pl-[30px]">
      <div className='flex flex-row gap-[28px] 13mac:gap-[24px] 3xl:gap-[28px] p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
          {data3?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.src}   />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[30px] mb-[42px] 13mac:pl-[30px] 3xl:pl-[30px]">
      <div className='flex flex-row gap-[28px] 13mac:gap-[24px] 3xl:gap-[28px] p-5 mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
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
