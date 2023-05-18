import React, { useEffect, useState } from "react";
import sideprofileImage from "./../../Assets/profile.png";
import MetaMask from "./../../Assets/MetaMask.png";
import styles from "./WalletDashboard.module.scss";
import image2 from "./../../Assets/Assets/CardImages/HomeCard1.png";
import image3 from "./../../Assets/Assets/CardImages/HomeCard2.png";
import EditIcon from "../../Assets/EditIcon.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { APIConstants } from "../../Services/api-constants";
function WalletDashboard() {
  const wallet = useSelector(state => state.ReduxSlice.data.metaMaskDetails);
  const { userData } = useSelector((store) => store.ReduxSlice.data);
  const isWalletConnected = Object.keys(wallet).length === 0
 
const [transectionData, setTransactionData]=useState([])
const [date, setDate]=useState('')
  useEffect(()=>{      
        axios
        .get("http://localhost:3000/IMusic/get-transaction?userId=" + userData._id)
        .then((res) => {
          console.log(res);
          const dateString=res.data.data[0].updatedAt
          const options = { day: 'numeric', month: 'long', year: 'numeric' };
          const date = new Date(dateString);
          const formattedDate = date.toLocaleDateString(undefined, options);
          setDate(formattedDate)
          const data=res.data.data[0].transactionDetails
          setTransactionData(data)
          debugger
          
        })
        .catch((err) => {
          alert("Please fill all the fields");
          console.log(err.message);
        });
  },[])

  return (
    <>
      <div
        className={`${styles.walletdashboardContent}  max-w-[1592px] h-[434px] rounded-[12px] bg-iWhite mt-[55px] ml-[38px]`}
      >
        <div className="flex flex-col gap-[18px] pl-[25px]">
          <div>
            <img src={sideprofileImage} className="w-[177px] pt-[75px]" />
          </div>
          <div className="text-[28px] font-medium text-cgy4">
            Jane William
          </div>
          <div className="font-medium text-[20px] -mt-[12px] text-igray1">
            Account ID: P-1234
          </div>
        </div>

        <div className="flex flex-col gap-[52px]">
          <div className="walletContent mt-[41px]">
            <div className="text-cgy4 flex flex-row items-center gap-2 text-[18px] font-medium"><div>Email </div><div><img src={EditIcon}/></div></div>
            <div className="text-[16px] font-medium text-iBlue mt-2">
              Janewilliam123@gmail.com
            </div>
          </div>
          <div>
            <div className="text-cgy4 text-[18px] font-medium flex flex-row items-center gap-2">
              <div>Phone Number</div> <div><img src={EditIcon}/></div>
            </div>
            <div className="text-[16px] font-medium text-iBlue mt-2">
              +1 94)0-763-2207
            </div>
          </div>
          <div>
            <div className="text-cgy4 text-[18px] font-medium flex flex-row items-center gap-2"><div>Address</div><div><img src={EditIcon}/></div></div>
            <div className="text-[16px] font-medium text-iBlue mt-2">
              Street: 4480 Elk Creek Road.
            </div>
            <div className="text-[16px] font-medium text-iBlue">
              City: Norcross.
            </div>
            <div className="text-[16px] font-medium text-iBlue">
              State/province/area: Georgia.
            </div>
            <div className="text-[16px] font-medium text-iBlue">
              Zip code 30071
            </div>
          </div>
        </div>

        <div>
        <div className="max-w-[305px] h-[248px] rounded-[15px] bg-iWhite border-2 border-iBlue mt-[65px]">

          <div className="flex flex-col gap-[37px]">
            <div className="text-igray1 text-[22px] font-medium pt-[36px] pl-[19px] truncate w-[280px] h-[63px]">
              Wallet ID: {wallet.account}
            </div>
            <div className="mt-[37px] text-cgy4 text-[54px] font-medium pl-[19px]">
              {Number(wallet.balanceInEther).toFixed(2)}
              <p className="text-[25px] -mt-[56px] ml-[120px]">ETH</p>
            </div>
          </div>
          
        </div>
        <div className="text-iBlue text-[21px] mt-[25px] pl-[40px] underline">Know More about Wallet</div>
        </div>

        <div className="pt-[20px]">
            <img src={MetaMask} className="w-[143px] h-[143px]"/>
        </div>
      </div>

      <div
        className={`${styles.walletdashboardTableContent} overflow-x-scroll`}
      >
      <div className="bg-iWhite rounded-[12px] max-w-[816px] h-[434px] mt-[16px] ml-[32px] gap-[16px]">
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
              className="w-[387px] h-[444px] rounded-2xl"
            />
            <p className="text-[63px] px-[14px] absolute bottom-0 text-iWhite shadow-[12px] drop-shadow-2xl font-bold">
              Listen to your owned Music
            </p>
          </div>
        </div>

        <div className="mt-[16px]">
          <div className="relative">
            <img
              src={image2}
              alt="owned"
              className="w-[387px] h-[444px] rounded-2xl"
            />
            <p className="text-[63px] px-[14px] absolute bottom-[40px] text-iWhite shadow-[12px] drop-shadow-2xl font-bold">
              Listen to your own Music
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default WalletDashboard;
