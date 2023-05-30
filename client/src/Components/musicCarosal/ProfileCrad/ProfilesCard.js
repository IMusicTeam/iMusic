import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./ProfileCard.css";
import { useNavigate } from "react-router";
import { ethers } from "ethers";
import contractInstance from "../../../web3";
import { useSelector } from "react-redux";

function ProfileCard({ data, src, newRelease, playList }) {
  const {metaMaskDetails} = useSelector((store) => store.ReduxSlice.data);
  if (newRelease) {
    data.playlist = data.songName
    data.album = data.albumName
  }
  if (playList) {
    data.playlist = data.name
    data.album = data.description
  }
  const navigateTo = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [indexValue, setIndexValue] = useState("");
  const MouseEnter = (index) => {
    setIndexValue(index);
    setIsHovered(true);
  };
  const MouseLeave = () => {
    setIsHovered(false);
    setIndexValue("");
  };
  const handleTransfer = async () => {
    if (data.userWalletId== metaMaskDetails.account || data.adminWalletId=== metaMaskDetails.account){
      return
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  console.log(accounts);
    try {
      const value = ethers.utils.parseEther("6");
      const res = await contractInstance.methods
        .sendToUploader(data.userWalletId, data.adminWalletId)
        .send({
          from: accounts[0],
          value: value,
        });
      console.log(res);
    } catch (err) {
      alert(err);
    }
  }
  const PlayMusic = () => {
    if (newRelease) {
      handleTransfer()
      navigateTo('/playing-music', {
        state: data
      })
     
      }
      if (playList) {
        navigateTo('/music-player', {
          state: data
        })
      }
    }
    return (
      <div
        className=""
        onMouseEnter={() => MouseEnter(data.id)}
        onMouseLeave={MouseLeave}
      >
        <div className="w-[300px] h-[270px] rounded-[20px] relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-400">
          <div className="w-[300px]">
            <img
              className="rounded-t-[20px] w-[100%] h-[200px]"
              src={src}
              alt="ui/ux review check"
            />

            {isHovered && indexValue === data.id && (
              <button
                onClick={PlayMusic}
                className="z-10 absolute !left-[200px] !top-[150px] start-0 w-[80px] h-[80px] bg-iOrange rounded-full border-indigo-600 hover:border-2 hover:border-iWhite">
                <BsFillPlayFill className="pl-1 !w-[55px] !h-[130px] pauseIcon text-iWhite" />
              </button>
            )}
          </div>
          <div className="absolute bg-iNavyBlue  w-[300px] h-[71px] rounded-b-2xl">
            <div className="text-[15px] font-medium text-iWhite mt-3 ml-[6px]">
              {data.playlist}
            </div>
            <div className="text-[12px] font-medium text-iGray3 ml-[6px]">
              {data.album}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ProfileCard;
