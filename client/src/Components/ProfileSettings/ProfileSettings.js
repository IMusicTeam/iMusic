import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import profile from "./../../Assets/profile.png"
import EditIcon from "./../../Assets/EditIcon.png"
import { useNavigate } from "react-router";

function ProfileSettings(){
  const navigate = useNavigate();
    return(
       <div className="flex items-center justify-center mb-[150px]">
         <div className="max-w-[580px] bg-iWhite shadow-2xl ml-[41px] p-[42px] mt-[29px] rounded-xl">
        <button type="button" onClick={() => navigate("/home")}>
          <BiLeftArrowAlt size={38} className="-ml-[9px]" />
        </button>
        <h1 className="text-iBlue text-[28px] ml-[110px]">Profile Settings</h1>
       <div className=" flex flex-row gap-[76px] justify-start mt-[80px]">
        <div className="flex flex-col gap-[18px] mt-[60px]">
          <div>
            <img src={profile} alt="" className="w-[177px] h-[188px]"/> 
          </div>
          <div>
            <p className="text-[28px] text-cgy4">Jane William</p>
            <p className="mt-[9px] text-igray1 text-[20px]">Account ID: P-1234</p>
          </div>
        </div>

        <div className="flex flex-col gap-[52px]">
          <div>
            <p className="text-[20px] flex flex-row items-center gap-3"><div>Email</div><div><img src={EditIcon}/></div></p>
            <p className="text-iBlue mt-2 text-[16px]">Janewilliam123@gmail.com</p>
          </div>

          <div>
            <p className="text-[20px] flex flex-row items-center gap-3"><div>Phone Number</div><div><img src={EditIcon}/></div></p>
            <p className="text-iBlue mt-2 text-[16px]">+1 94)0-763-2207</p>
          </div>

          <div>
            <p className="text-[20px] flex flex-row items-center gap-3"><div>Address</div><div><img src={EditIcon}/></div></p>
            <p className="text-iBlue text-[16px] w-[210px] mt-2">Street: 4480 Elk Creek Road. City: Norcross. State/province/area: Georgia. Zip code 30071</p>
          </div>

        </div>

       </div>

       <button className="px-10 py-2 bg-iBlue mt-[80px] rounded-3xl text-iWhite ml-[155px]">save </button>
      </div>
       </div>
    )
}
export default ProfileSettings