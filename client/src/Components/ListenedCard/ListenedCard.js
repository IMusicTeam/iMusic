import React from "react";

function ListenedCard(data) {
  return (
    <div className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 min-w-[360px] min-h-[360px] ">
      <img
        src={data.image}
        alt="card"
        className='rounded-2xl '
      />
      <p className="text-[45px] w-[313px] absolute bottom-0 text-iWhite font-semibold  mb-10  ml-7 mr-0.5">
        {data.text}
      </p>
    </div>
  );
}

export default ListenedCard;
