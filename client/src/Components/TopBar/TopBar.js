import upload from "../../Assets/images/upload.png";
import upload1 from "../../Assets/images/upload1.png";
import walletIcon from "../../Assets/images/wallet.svg";
import notificationIcon from "../../Assets/images/notification.svg";
import searchIcon from "../../Assets/images/search.svg";
import verified from "../../Assets/Assets/CardImages/Verified.png";
import ownedMusic from "../../Assets/ownedMusic.png";
import { useEffect, useState } from "react";
import Web3 from "web3";
import MetaMask from "../../Assets/MetaMask.png";
import { useNavigate } from "react-router";
import { updateMetaMaskDetails } from "./../../Redux/Redux";
import "./TopBar.css";
import { useDispatch, useSelector } from "react-redux";
import navBanner from './../../Assets/navBar.png'

export default function TopBar() {
  const show=window.location.pathname
  const navigateTo = useNavigate();
  const { adminDetails, metaMaskDetails, userData } = useSelector(
    (store) => store.ReduxSlice.data
  );
  const isAdminAdded = Object.keys(adminDetails).length === 0;
  const isWalletConnected = Object.keys(metaMaskDetails).length === 0;
  const [isToggled, setIsToggled] = useState(false);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const dispatch = useDispatch();
  const [isText, setIsText] = useState(true);
  const [uploadmusic, setUploadMusic] = useState(false);
  const navigatTo = useNavigate();
  
  useEffect(() => {
    if (isWalletConnected) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [isWalletConnected]);
  const handleToggle = () => {
    if (isToggled) {
      dispatch(updateMetaMaskDetails({ data: {} }));
    }
  };
  const handleUpload = () => {
    navigatTo("/uploadMusic");
    //handle upload function
  };
  const HandelSearch = () => {
    navigatTo("/search");
  };
  // useEffect(() => {
  //   if (isToggled) {
  //     // localStorage.clear();
  //   }
  // }, [isToggled])

  window.ethereum.on('accountsChanged', async () => {
  connectWallet(true)
    });

  const connectWallet = async (value=false) => {
    try {
      if (typeof window.ethereum === "undefined") {
        setIsText(false);
        //   alert("Please install Metamask to connect to a wallet.");
        return;
      }
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setConnected(true);
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        //   alert("No wallet accounts detected.");
        setConnected(false);
        return;
      }
      const account = accounts[0];
      const balance = await web3.eth.getBalance(account);
      const balanceInEther = web3.utils.fromWei(balance, "ether");
      setAccount(account);
      //Redux Dispatch action
      if (isWalletConnected || value) {
        dispatch(updateMetaMaskDetails({ data: { account, balanceInEther } }));
        localStorage.setItem("data",   JSON.stringify({ account, balanceInEther }) );
      } else {
        dispatch(updateMetaMaskDetails({ data: {} }));
        localStorage.removeItem("data")

      }
      setConnected(true);
      // navigateTo('/profile/walletdashboard')
      localStorage.setItem("account", account);

      setBalance(balanceInEther);
      localStorage.setItem("balanceInEther", balanceInEther);
    } catch (error) {
      console.log(error);
      setConnected(false);
    }
  };

  const handleMouseEnter = () => {
    setUploadMusic(true);
  };

  const handleMouseLeave = () => {
    setUploadMusic(false);
  };
  useEffect(()=>{
    const data=localStorage.getItem("data")
    const check=JSON.parse(data)
    if(check){
      dispatch(updateMetaMaskDetails({ data:check }))
     setIsToggled(true);
    } else {
     setIsToggled(false);
    }
  },[])
  const topNav={
    background: 'url("./../../Assets/navBar.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <>
    <div className="relative mx-5 4xl:ml-8">
<img src={navBanner} alt="" className="h-[93px] 4xl:h-auto"/>
    <div style={topNav} className="flex absolute top-0  items-center px-7 4xl:px-10 h-[92px] max-w-[1590px] w-full 4xl:ml-[27px] rounded-[10px]">
    <div className="flex items-center  rounded-[100px] -py-2 justify-between h-[56px]  w-[1450px] bg-[#ffffff]">
      <Search onClick={HandelSearch}/>
          <div
          
            className="flex items-center  gap-6 w-[500px] ml-[32.5px]"
          >
            <button className=" w-[186px]"   onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} onClick={handleUpload}>
              {uploadmusic ? (
                <img
                  src={upload1}
                  alt="img"
                  className="rounded-lg h-14 hover:bg-iOrange"
                />
              ) : (
                <img
                  src={upload}
                  alt="img"
                  className="rounded-lg h-14 hover:bg-iOrange"
                />
              )}
            </button>
            <img src={notificationIcon} alt="img" className="h-8 w-[36px]" />
            <div className="flex items-center">
              <div className="flex items-center text-xl text-[#EA7525] leading-5">
                <span>{isWalletConnected || isToggled ? "Connect" : "Connected"} To</span>
                <img src={walletIcon} alt="img" className="w-6 h-6 ml-1" />
              </div>
              <button
                className={`w-16 h-8 ml-3.5 rounded-full focus:outline-none border border-[#EA7525]`}
                onClick={()=>connectWallet()}
              >
                <div
                  className={`w-8 h-[30px] rounded-full bg-[#295D93] shadow-md transform transition-transform ${
                    !isWalletConnected ? "translate-x-[32px]" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      {isAdminAdded && show !== '/playlist-list' && (
        <div className="bannerContainer">
          {userData?.isAdmin && (        
           <div className="banner">
            <img src={verified} alt="success" className="w-[45px] h-[45px]" />
            <p className="text-[18px]">
              Songs need to be Approved {" "}
              <span
                onClick={() => {
                  navigateTo("/playlist-list", {
                    state: {
                      status: true,
                      title: "Listen to your Owned Music",
                      image: ownedMusic,
                    },
                  });
                }}
                className="underline cursor-pointer text-iBlue"
              >
                Click Here
              </span>
            </p>
          </div>)}


        </div>
      )}
    </>
  );
}

const Search = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between w-[419px] h-14 rounded-[32px] border border-[#295D93] px-4"
    >
      <input type="text" placeholder="Search" className="outline-none" />
      <img src={searchIcon} alt="img" className="h-7 w-7" />
    </div>
  );
};
