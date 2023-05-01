import React from "react";
import sideprofileImage from "./../../Assets/profile.png";
import foxImage from "./../../Assets/Card1.png";
import styles from "./WalletDashboard.module.scss";
function WalletDashboard() {
  return (
    <>
      <div
        className={`${styles.walletdashboardContent} max-w-[1592px] h-[434px] rounded-[12px] bg-iWhite mt-[55px] ml-[38px]`}
      >
        <div className="flex flex-col gap-[18px] pl-[25px]">
          <div>
            <img src={sideprofileImage} className="w-[177px] pt-[75px]" />
          </div>
          <div className="text-[28px] font-semibold text-cgy4">
            Jane William
          </div>
          <div className="font-semibold text-[20px] -mt-[12px] text-igray1">
            Account ID: p-1234
          </div>
        </div>

        <div className="flex flex-col gap-[52px]">
          <div className="walletContent mt-[41px]">
            <div className="text-cgy4 text-[18px] font-semibold">Email</div>
            <div className="text-[16px] font-semibold text-iBlue mt-2">
              Janewilliam123@gmail.com
            </div>
          </div>
          <div>
            <div className="text-cgy4 text-[18px] font-semibold">
              Phone Number
            </div>
            <div className="text-[16px] font-semibold text-iBlue mt-2">
              +1 94)0-763-2207
            </div>
          </div>
          <div>
            <div className="text-cgy4 text-[18px] font-semibold">Address</div>
            <div className="text-[16px] font-semibold text-iBlue mt-2">
              Street: 4480 Elk Creek Road.
            </div>
            <div className="text-[16px] font-semibold text-iBlue">
              City: Norcross.
            </div>
            <div className="text-[16px] font-semibold text-iBlue">
              State/province/area: Georgia.
            </div>
            <div className="text-[16px] font-semibold text-iBlue">
              Zip code 30071
            </div>
          </div>
        </div>

        <div className="max-w-[305px] h-[248px] rounded-[15px] bg-iWhite border border-iBlue mt-[65px]">
            <div className="flex flex-col gap-[37px]">
                <div className="text-igray1 text-[22px] font-semibold pt-[36px] pl-[19px] w-[225px] h-[63px]">
                Wallet ID: XXXX XXXX XXXX XX39
                </div>
                <div className="mt-[37px] text-cgy4 text-[54px] font-semibold pl-[57px]">
                $180.00
                </div>
            </div>
        </div>

        <div className="pt-[20px] w-[143px] h-[143px]">
            <div><img src={foxImage}/></div>
        </div>

      </div>
    </>
  );
}

export default WalletDashboard;
