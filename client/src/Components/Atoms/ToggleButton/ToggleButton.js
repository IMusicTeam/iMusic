// import { AccountTypeEnum } from "Enums";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./ToggleButton.module.scss";

export default function ToggleButton({
  labelOne,
  labelTwo,
  transition,
  selected,
  onChange,
  className,
}) {
  const [activeBtn, setActiveBtn] = useState(selected ? selected : labelOne);
  const userDetails = useSelector((store) => store.userDetails);
  const accountType = userDetails?.data?.accountType;

  useEffect(() => {
    setActiveBtn(selected);
  }, [selected]);

  const handleBtnClick = (label) => {
    if (typeof onChange === "function") {
      onChange(label);
    } else {
      setActiveBtn(label);
    }
  };

  return (
    <div className={`relative rounded-full ${style.toggle} ${className}`}>
      <button
        className={`rounded-l-full outline-none z-10 h-full font-[500] ${
          activeBtn === labelOne && "text-cwhite"
        } ${activeBtn === labelOne ? "" : "hover:text-cgy3"}`}
        // onClick={() => handleBtnClick(labelOne)}
      >
        <button
          onClick={() => handleBtnClick(labelOne)}
          className="w-full h-full rounded-full"
        >
          {labelOne}
        </button>
      </button>
      {/* {accountType == AccountTypeEnum.Personal && (
        <div
          className={`rounded-r-full z-10 outline-none w-1/2 h-full font-[500] ${
            activeBtn === labelTwo && 'text-cwhite'
          }  ${activeBtn === labelTwo ? '' : 'hover:text-cgy3'}`}
          // onClick={() => handleBtnClick(labelTwo)}
        >
          <button
            onClick={() => handleBtnClick(labelTwo)}
            className="w-full h-full rounded-full"
          >
            {labelTwo}
          </button>
        </div>
      )} */}
      <div
        className={`absolute top-0 bottom-0 h-full bg-cm3 rounded-full ${
          activeBtn === labelOne ? "left-0" : "left-1/2"
        } ${transition && "transition-all duration-200 ease-in-out"}`}
      ></div>
    </div>
  );
}

ToggleButton.propTypes = {
  labelOne: propTypes.string,
  labelTwo: propTypes.string,
  transition: propTypes.bool,
  selected: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string,
};
