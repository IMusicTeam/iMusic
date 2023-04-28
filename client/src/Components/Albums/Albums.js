import React from "react";
import ListenedCard from "../ListenedCard/ListenedCard";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import Library1 from "../../Assets/library11.png";
import Library2 from "../../Assets/library10.png";
import Library3 from "../../Assets/library8.png";
import Library4 from "../../Assets/library7.png";
import Library5 from "../../Assets/library1.png";
import Library6 from "../../Assets/library17.png";
import Library7 from "../../Assets/library18.png";
import Library8 from "../../Assets/library19.png";
import Library9 from "../../Assets/library20.png";
import Library10 from "../../Assets/library21.png";
import Library11 from "../../Assets/library9.png";
import Library12 from "../../Assets/library8.png";


function Albums() {
  const data1 = [
    { id: 1, src: Library1, text: "Listen to your own music" },
    { id: 2, src: Library2, text: "Listen to your owned music" },
    { id: 3, src: Library3, text: "90's Music" },
    { id: 4, src: Library4, text: "EDM Beats" },
  ];
  const data2 = [
    { id: 1, src: Library5, text: "Listen to your own music" },
    { id: 2, src: Library6, text: "Listen to your owned music" },
    { id: 3, src: Library7, text: "90's Music" },
    { id: 4, src: Library8, text: "EDM Beats" },
  ];
  const data3 = [
    { id: 1, src: Library9, text: "Listen to your own music" },
    { id: 2, src: Library10, text: "Listen to your owned music" },
    { id: 3, src: Library11, text: "90's Music" },
    { id: 4, src: Library12, text: "EDM Beats" },
  ];
  const data4 = [
    { id: 1, src: Library5, text: "Listen to your own music" },
    { id: 2, src: Library6, text: "Listen to your owned music" },
    { id: 3, src: Library12, text: "90's Music" },
    { id: 4, src: Library5, text: "EDM Beats" },
  ];

  const navigate = useNavigate();
  return (
    <div className="bg-iGray2 pt-[31px] pb-[56px]">
      <button type="button" onClick={() => navigate(`/`)}>
        <IoMdArrowBack className="w-6 h-6 ml-[35px] " />
      </button>
      <div className="pl-[160px] mb-[42px]">
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
      <div className="pl-[160px] mb-[42px]">
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
      <div className="pl-[160px] mb-[42px]">
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
      <div className="pl-[160px] mb-[42px]">
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
