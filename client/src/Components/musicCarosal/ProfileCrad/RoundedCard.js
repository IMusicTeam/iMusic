import React from "react";
import { useHistory, useNavigate } from "react-router-dom";

function RoundedCard({ data,src}) {

  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/RoundedCradFullDetails/${data.id}`)}
        className="flex flex-col mt-[28px] w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400"
      >
        <div className="w-[140px] h-[140px]">
          <img
            className="w-[140px] h-[140px] rounded-full"
            src={src}
            alt="ui/ux review check"
          />
        </div>
        <div className="ml-[8px]">
          <h5 className="text-[18px] font-semibold text-iBlack1 mt-[4px]">
            Rico Verhoeven
          </h5>
          <p className="text-[12px] font-semibold text-iBlack1 ml-[36px]">
            Rank - #1
          </p>
          <p className="text-[14px] font-semibold text-iBlack1 ml-[36px]">
            Mexico
          </p>
        </div>
      </div>
    </>
  );
}

export default RoundedCard;
