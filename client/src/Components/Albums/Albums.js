import React from "react";
import ListenedCard from "../ListenedCard/ListenedCard";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

function Albums() {
  const cardData1 = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGQyi90lFXPfl7mu3UGKvzFPnqdxwof5jrKsjvzzb9Q&s",
      text: "Listen to your own music",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9jk8pKT_DOxZ_i18nWjmTM8kP1b1gf4AM1RKoCb8fQ&s",
      text: "Listen to your owned music",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmu8tSiRWZ1IhuElHbFxwSAqLNZsQ0voL-Y3-VQUkn9Q&s",
      text: "90's                Music",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVzel9oDiKkgQdMHJa7V3xqGstlTUcRAEcAr_3XLEusA&s",
      text: "EDM Beats",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="bg-iGray2 pt-[31px] pb-[56px]">
      <button type= "button" onClick={() => navigate(`/`)}
>
      <IoMdArrowBack className="w-6 h-6 ml-[35px] " />

      </button>
      <div className="pl-[160px] mb-[42px]">
        <div className="flex gap-7">
          {cardData1?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.image} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[160px] mb-[42px]">
        <div className="flex gap-7">
          {cardData1?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.image} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[160px] mb-[42px]">
        <div className="flex gap-7">
          {cardData1?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.image} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pl-[160px] mb-[42px]">
        <div className="flex gap-7">
          {cardData1?.map((item) => {
            return (
              <div>
                <ListenedCard image={item.image} text={item.text} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Albums;
