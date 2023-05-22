import React, { useEffect, useState } from "react";
import sideprofileImage from "./../../Assets/profile.png";
import MetaMask from "./../../Assets/MetaMask.png";
import styles from "./WalletDashboard.module.scss";
import image2 from "./../../Assets/Assets/CardImages/HomeCard1.png";
import image3 from "./../../Assets/Assets/CardImages/HomeCard2.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { APIConstants } from "../../Services/api-constants";
function WalletDashboard() {
  const wallet = useSelector((state) => state.ReduxSlice.data.metaMaskDetails);
  const { userData } = useSelector((store) => store.ReduxSlice.data);
  const isWalletConnected = Object.keys(wallet).length === 0;

  const [transectionData, setTransactionData] = useState([]);
  const [date, setDate] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/IMusic/get-transaction?userId=" + userData._id
      )
      .then((res) => {
        console.log(res);
        const dateString = res.data.data[0].updatedAt;
        const options = { day: "numeric", month: "long", year: "numeric" };
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString(undefined, options);
        setDate(formattedDate);
        const data = res.data.data[0].transactionDetails;
        setTransactionData(data);
      })
      .catch((err) => {
         alert("Please fill all the fields");
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row gap-4">
        <div
          className={`w-[810px] h-[434px] rounded-[12px] bg-iWhite mt-[55px] ml-[38px]`}
        >
          <div className="flex flex-row gap-[42px]">
            <div className="flex flex-col gap-[18px]">
                <div>
                  <img
                    src={sideprofileImage}
                    className="w-[264px] h-[248px] pt-[38px] pl-[28px]"
                  />
                </div>
                <div className="pl-[37px]">
                  <div className="text-[35px] text-cgy4">Jane William</div>
                  <div className="text-[25px] text-igray1">
                    Account ID: P-1234
                  </div>
                </div>
            </div>
            <div className="flex flex-col mt-[63px]">
                <div className="text-[18px] text-cgy4">Email</div>
                <div className="text-[22px] text-iBlue">
                  Janewilliam123@gmail.com
                </div>

              <div className="mt-[48px]">
                <div className="text-[18px] text-cgy4">Phone Number</div>
                <div className="text-[22px] text-iBlue">+1 94)0-763-2207</div>
              </div>

              <div className="mt-[48px]">
                <div className="text-[18px] text-cgy4">Address</div>
                <div className="text-[22px] text-iBlue">
                  Street: 4480 Elk Creek Road. City: Norcross. <br />{" "}
                  State/province/area: Georgia., <br />
                  Zip code 30071
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[760px] h-[434px] rounded-[12px] bg-iWhite mt-[55px]">
          <div className="flex flex-row gap-[36px]">

            <div className="flex flex-col">
              <div className="w-[434px] h-[353px] rounded-[15px] bg-iWhite border-2 border-iBlue mt-[45px] ml-[30px]">
                <div className="flex flex-col gap-[55px]">
                  <div className="text-igray1 text-[22px] font-medium pt-[36px] pl-[19px] truncate w-[280px] h-[63px]">
                    Wallet ID: {wallet.account}
                  </div>
                  <div className="flex flex-row items-center gap-[4] mt-[37px] text-cgy4 text-[54px] pl-[81px]">
                    <div className="text-[76px]"> {Number(wallet.balanceInEther).toFixed(2)}</div>
                    <div>
                      <p className="text-[25px] mt-1 ml-2">ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mt-[121px]">  
                    <img src={MetaMask} className="w-[143px] h-[143px] ml-[40px]"/>
             </div>
             <div className="text-iBlue text-[21px] underline mt-[22px]">Know More about Wallet</div>

            </div>

          </div>
        </div>
      </div>

      <div
        className={`${styles.walletdashboardTableContent} overflow-x-scroll`}
      >
        <div className="bg-iWhite rounded-[12px] max-w-[816px] h-[434px] mt-[16px] ml-[32px]">
          <div
            className={`${styles.walletdashboardTableHeadings} mt-[16px] ml-[16px] mr-[17px] bg-igray text-start p-1 rounded-[8px] text-iBlue font-medium`}
          >
            <p className="!pl-[8px]">Date</p>
            <p>Type</p>
            <p>Subtype</p>
            <p>Description</p>
            <p>Amount</p>
            <p className="!pl-[13px]">Status</p>
          </div>

          {transectionData.map((item) => {
            return (
              <div
                className={`${styles.walletdashboardTableHeadings} mt-[16px] ml-[17px] mr-[19px]  text-start font-medium`}
              >
                <p className="text-cgy4">{date}</p>
                <p className="text-cgy4">{item?.type}</p>
                <p className="pl-1 text-cgy4">{item?.subType}</p>
                <p className="text-cgy4">{item?.description}</p>
                <p className="pr-4 text-center text-igray2">{item?.amount}</p>
                <button className="w-[100px] h-[30px] bg-igray3 text-igray2 rounded-[5px]">
                  {"completed"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-[16px]">
          <div className="relative">
            <img
              src={image3}
              alt="owned"
              className="w-[372px] h-[430px] rounded-2xl"
            />
            <p className="flex items-center flex-col gap-2 ml-[100px] text-[45px] absolute bottom-[70px] text-iWhite shadow-[12px] drop-shadow-2xl font-bold">
              <div>Listen to</div>
              <div>your</div>
              <div>Owned</div>
              <div>Music</div>
            </p>
          </div>
        </div>

        <div className="mt-[16px]">
          <div className="relative">
            <img
              src={image2}
              alt="owned"
              className="w-[372px] h-[430px] rounded-2xl"
            />
            <div className="flex items-center flex-col gap-2 ml-[100px] text-[45px] absolute bottom-[70px] text-iWhite shadow-[12px] drop-shadow-2xl font-bold">
              <div>Listen to</div>
              <div>your</div>
              <div>Own</div>
              <div>Music</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletDashboard;
