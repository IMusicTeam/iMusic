import upload from "../../Assets/images/upload.svg";
import walletIcon from "../../Assets/images/wallet.svg";
import notificationIcon from "../../Assets/images/notification.svg";
import searchIcon from "../../Assets/images/search.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import './TopBar.css'
export default function TopBar() {
  const [isToggled, setIsToggled] = useState(false);
const navigatTo=useNavigate()
  const handleToggle = () => {
    setIsToggled(!isToggled);

  };
  const handleUpload = () => {
    navigatTo('/uploadMusic')
    //handle upload function
  };
  const HandelSearch =()=>{
    navigatTo('/search')
  }
  useEffect(()=>{
    if(isToggled){
      localStorage.clear();
    }
  },[isToggled])

  return (
    <div className="topNav flex  items-center px-10 h-[92px] w-[1590px] ml-[27px] rounded-[10px]">
    <div className="flex items-center  rounded-[100px] -py-2 justify-between h-[56px]  w-[1450px] bg-[#ffffff]">
      <Search onClick={HandelSearch}/>
      <div className="flex items-center  gap-6 w-[500px] ml-[32.5px]">
        <button className=" w-[186px]" onClick={handleUpload}>
          <img src={upload} alt="img" className="h-14" />
        </button>
        <img src={notificationIcon} alt="img" className="h-8 w-[36px]" />
        <div className="flex items-center">
        <div className="flex items-center text-xl text-[#EA7525] leading-5">
          <span>{!isToggled ?"Connect":"Connected"} To</span>
          <img src={walletIcon} alt="img" className="w-6 h-6 ml-1" />
        </div>
        <button
          className={`w-16 h-8 ml-3.5 rounded-full focus:outline-none border border-[#EA7525]`}
          onClick={handleToggle}
        >
          <div
            className={`w-8 h-[30px] rounded-full bg-[#295D93] shadow-md transform transition-transform ${
              isToggled ? "translate-x-[32px]" : ""
            }`}
          ></div>
        </button>
        </div>
      </div>
    </div>
    </div>
  );
}

const Search = ({onClick}) => {
 
  return (
    <div onClick={onClick} className="flex items-center justify-between w-[419px] h-14 rounded-[32px] border border-[#295D93] px-4">
      <input type="text" placeholder="Search" className="outline-none" />
      <img src={searchIcon} alt="img" className="h-7 w-7" />
    </div>
  );
};
