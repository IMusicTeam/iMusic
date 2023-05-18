import React, { useState } from "react";
import player from "./../../Assets/images/player.png";

function AudioPlayer() {
  const data = [
    { id: 1, option: "qwer" },
    { id: 2, option: "bbb" },
    { id: 3, option: "cccc" },
    { id: 4, option: "dddd" },
  ];

  const Value = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];
  const [index, setIndex] = useState("");
  const [visible, setVisible] = useState(false);
  const HandelValue = (item) => {
    if (item.id !== index) {
      setIndex(item.id);
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  return (
    <div className="flex flex-col gap-[10px] justify-center items-center pt-[182px] pl-[44px] pb-[218px] bg-iGray2 shadow-2xl">
      <div>
        <img
          src={player}
          alt="image"
          className="max-w-[783px] max-h-[731px] rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-[20px] ">
        {Value.map((item, i) => {
          return (
            <div className="text-iWhite">
              {i + 1 === index && (
                <div className="bg-iBlue absolute -mt-[120px] z-10 w-[100px] -ml-[15px] h-[100px] flex flex-col p-1">
                  <div>option1</div>
                  <div>option2</div>
                  <div>option3</div>
                </div>
              )}
              <button
                onClick={() => HandelValue(item)}
                className="relative p-1 bg-iOrange z-1"
              >
                ...
              </button>

              
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AudioPlayer;
