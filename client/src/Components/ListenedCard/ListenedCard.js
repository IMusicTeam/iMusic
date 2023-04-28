import React from "react";

function ListenedCard(data) {
  return (
    <div className="relative transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
      <img
        src={data.image}
        alt="card"
        className='h-[360px] w-[316px] rounded-2xl'
      />
      <p className="text-[54px] absolute bottom-0 text-iWhite shadow-[12px] drop-shadow-2xl font-bold ml-2 mb-3 ">
        {data.text}
      </p>
    </div>
  );
}

export default ListenedCard;
