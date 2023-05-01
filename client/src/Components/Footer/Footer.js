import React from "react";
import iMusic from "../../Assets/images/logo.png";

function Footer() {
  return (
    <div className="flex flex-row items-center justify-center h-[100px] w-full bg-iWhite bottom-0">
      <div className="flex gap-[50px] text-iBlue font-semibold text-base">
        <img src={iMusic} alt="imusic" className="h-[50px] -mt-3" />
        <span>FAQ</span>
        <span>Terms & condition</span>
        <span>Privacy Policy</span>
        <span>Help Center</span>
        <span>Subscription Plan</span>
        <span>Cockies Policy</span>
      </div>
    </div>
  );
}

export default Footer;
