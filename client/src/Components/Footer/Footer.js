import React from "react";
import iMusic from "../../Assets/logo.png";

function Footer() {
  return (
    <div className="flex flex-row items-center justify-center h-[100px] w-full bg-iWhite bottom-0">
      <div className="flex gap-[50px] text-iBlue font-medium text-base">
        <img src={iMusic} alt="imusic" className="h-[50px] -mt-3" />
        <div className="flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between gap-[60px] text-[20px] text-iBlack1 font-medium">
        <span>FAQ</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Help Center</span>
        <span>Subscription Plans</span>
        <span>Cookie Policy</span>
        </div>
            <div className="flex flex-row justify-center text-center -ml-[250px] font-medium text-iBlue">
               &#169;iMusic
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
