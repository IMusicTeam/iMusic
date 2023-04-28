import upload from "../../Assets/images/upload.svg";
import walletIcon from "../../Assets/images/wallet.svg";
import notificationIcon from "../../Assets/images/notification.svg";
import searchIcon from "../../Assets/images/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router";
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
  return (
    <div className="flex justify-between h-[92px] w-[1590px] bg-[#ffffff] rounded-2xl px-10 py-3.5">
      <Search onClick={HandelSearch}/>
      <div className="flex items-center gap-12">
        <button className="h-16 w-[186px]" onClick={handleUpload}>
          <img src={upload} alt="img" />
        </button>
        <img src={notificationIcon} alt="img" className="h-[45px] w-[36px]" />
        <div className="flex items-center text-xl text-[#EA7525] leading-5">
          <span>Connect To</span>
          <img src={walletIcon} alt="img" className="w-6 h-6 ml-1" />
        </div>
        <button
          className={`w-24 h-12 ml-3.5 rounded-full focus:outline-none border border-[#EA7525]`}
          onClick={handleToggle}
        >
          <div
            className={`w-12 h-[44px] rounded-full bg-[#295D93] shadow-md transform transition-transform ${
              isToggled ? "translate-x-[45px]" : ""
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}

const Search = ({onClick}) => {
 
  return (
    <div onClick={onClick} className="flex items-center justify-between w-[419px] h-16 rounded-[32px] border border-[#295D93] px-4">
      <input type="text" placeholder="Search" className="outline-none" />
      <img src={searchIcon} alt="img" className="h-7 w-7" />
    </div>
  );
};
