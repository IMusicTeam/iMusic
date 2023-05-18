import React from "react";
import { useNavigate } from "react-router";

function ListenedCard(data) {
  const navigateTo =useNavigate();

  return (
    <div onClick = {()=>navigateTo("/albumsView")}className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 min-w-[360px] min-h-[360px] ">
      <img
        src={data.image}
        alt="card"
        className='rounded-2xl'
      />
      <p className="text-[45px] w-[261px] h-[220px] absolute bottom-14 text-iWhite font-medium left-[60px]">
        {data.text}
      </p>
    </div>
  );
}

export default ListenedCard;
