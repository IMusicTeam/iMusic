import upload from "../../Assets/images/upload.svg";
import walletIcon from "../../Assets/images/wallet.svg";
import notificationIcon from "../../Assets/images/notification.svg";
import searchIcon from "../../Assets/images/search.svg";
export default function TopBar() {
  const handleUpload = () => {
    //handle upload function
  };
  return (
    <div className="flex justify-between h-[92px] w-[1590px] bg-[#ffffff] rounded-2xl px-10 py-3.5">
      <Search />
      <div className="flex items-center gap-12">
        <button className="h-16 w-[186px]" onClick={handleUpload}>
          <img src={upload} alt="img" />
        </button>
        <img src={notificationIcon} alt="img" className="h-[45px] w-[36px]" />
        <div className="flex items-center text-xl text-[#EA7525] leading-5">
          <span>Connect To</span>
          <img src={walletIcon} alt="img" className="w-6 h-6 ml-1" />
        </div>
      </div>
    </div>
  );
}

const Search = () => {
  return (
    <div className="flex items-center w-[419px] h-16 rounded-[32px] border border-[#295D93] px-4">
            {/* <div className="text-[#A4A4A4]">Search</div> */}
            <input type="text" placeholder="Search" className="outline-none" /> 
          <img src={searchIcon} alt="img" className="h-7 w-7" />   {" "}
    </div>
  );
};
