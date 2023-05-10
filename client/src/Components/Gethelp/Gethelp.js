import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BiLeftArrowAlt } from "react-icons/bi";
import arrow_drop_down_circle from "./../../Assets/images/arrow_drop_down_circle.svg";

function Gethelp(){
    const data = [{id:1, title:"What is NFT in iMusic?", dec:"An NFT can represent ownership of a specific music track, album, or even a concert ticket. The ownership can be transferred from one person to another through blockchain technology, and the token can be used to verify the authenticity of the music file. Moreover, it can help to track and distribute royalties for the artist and other contributors involved in the production of the music."},
    { id: 2, title:"Why is wallet Connection is mandatory in iMusic", dec:"iMusic is one of a handful of streaming platforms with its own cryptocurrency, iMUSIC. When an artist publishes music on iMusic, the artist receives compensation on a pay per play basis. iMusic listeners can listen to ad-free music at no charge, but are encouraged to tip their favorite artist or purchase merchandise and concert tickets with the iMusic currency."},
     { id: 3 , title:"How iMusic manages my wallet?", dec:"The smart contract component of blockchain technology can potentially solve this issue. Smart contracts can include which percentage of the revenue goes to each member of the band, the music label, the manager, etc., and pay artists immediately."}];
     const navigatTo=useNavigate();
     const [select, setSelect] = useState("");

const HandelNavigation = (val) =>{
  navigatTo(val)
}

const handleContactUs = () =>{
  navigatTo('/profiles/getHelp/contactUs')
}

  const HandelShow = (item) => {
    if (select === item.id) {
      setSelect("");
    } else {
      setSelect(item.id);
    }
  };
    return(
        <div className="max-w-[1590px] bg-iWhite shadow-2xl ml-[41px] p-[42px] mt-[29px] rounded-xl">
        <button onClick={''}>
          <BiLeftArrowAlt size={38} className="mb-[33px] -ml-[9px]" />
        </button>

        <h1 className="font-semibold text-[32px] mt-1">Quick Links</h1>

        <div className="flex flex-col justify-start flex-wrap text-ibm1 gap-5 text-[16px] mt-5">
          <div className="flex flex-row 3xl:gap-[135px] gap-28">
            <p onClick={()=>HandelNavigation('/uploadMusic')} className="w-[128px] underline hover:text-iOrange">
              Upload Music
            </p>
            <p onClick={()=>HandelNavigation('/profile/settings')} className="w-[128px] underline hover:text-iOrange">
              Change my Email
            </p>
            <p onClick={()=>HandelNavigation('/playlists')} className="w-[128px] underline hover:text-iOrange">Playlist</p>
            <p onClick={()=>HandelNavigation('/exploreScreen')} className="w-[128px] underline hover:text-iOrange">Explore</p>
            <p onClick={()=>HandelNavigation('/yourlibrary')} className="w-[128px] underline hover:text-iOrange">My Library</p>
          </div>
          <div className="flex flex-row 3xl:gap-[135px] gap-28">
            <p onClick={()=>HandelNavigation('/profile/settings')} className="w-[128px] underline hover:text-iOrange">
              Edit Profile
            </p>
            <p onClick={()=>HandelNavigation('/albums')} className="w-[128px] underline hover:text-iOrange">Albums</p>
            <p onClick={()=>HandelNavigation('/profile/walletdashboard')} className="w-[128px] underline hover:text-iOrange">
              Wallet Dashboard
            </p>
            <p onClick={()=>HandelNavigation('/playlists')} className="w-[128px] underline hover:text-iOrange">Playlists</p>
            <p onClick={()=>HandelNavigation('/likedMusic')} className="w-[128px] underline hover:text-iOrange">
              Liked Songs
            </p>
          </div>
        </div>

        <h1 className="font-semibold text-[32px] mt-[60px]">FAQs</h1>
        {data.map((item, i) => {
          return (
            <div
              className={`mt-5 px-[28px] flex flex-col py-[23px] text-iWhite text-[20px] font-normal rounded-xl ${
                select !== item.id ? "bg-iBlue" : "bg-iOrange"
              }`}
            >
              <div className="flex flex-row justify-between max-w-[1520px] w-full">
                <p>{item.title}</p>
                <div>
                  <button onClick={() => HandelShow(item)}>
                    <img
                      src={arrow_drop_down_circle}
                      className={
                        select !== item.id
                          ? "rotate-0 arrow"
                          : "rotate-180 1s arrow"
                      }
                    />
                  </button>
                </div>
              </div>
              <p
                className={`text-[18px] max-w-[1315px] w-full font-normal showContent ${
                  select !== item.id
                    ? "h-0 overflow-hidden"
                    : "h-[80px] overflow-auto"
                }`}
              >
                {item.dec}
              </p>
            </div>
          );
        })}

        <div className="mt-[212px] text-center">
        <span style={{display: 'inline-block'}}> <p>
        Not yet answered your Query?
        </p></span>
        <span style={{display: 'inline-block'}}>
        <p className="underline text-iBlue hover:text-iOrange" onClick={handleContactUs}>
            Contact Us
          </p>
        </span>
        </div>
      </div>
    )
}

export default Gethelp