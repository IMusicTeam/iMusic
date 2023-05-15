import React, { useEffect } from "react"
import imusicLogo from "../../Assets/imusicLogo.png"
import listingMusic from "../../Assets/listingMusic.PNG"
import rythamic from "../../Assets/rythamic.png";
import fanpower from "../../Assets/fanpowered.png";
import fanengagement from "../../Assets/fanengagement.png"
import fanfoundedtours from "../../Assets/fanfoundedtours.png"
import micropayments from "../../Assets/micropayments.png"
import fanownership from "../../Assets/fanownership.png"
import livemusic from "../../Assets/livemusic.png"
import crowdsourcemusic from "../../Assets/crowdsourcemusic.png"
import freemusic from "../../Assets/freemusic.png"
import decentralizedmusic from "../../Assets/decentralizedmusic.png"
import reputation from "../../Assets/reputation.png"
import collaborative from "../../Assets/collaborative.png"
import licensingcopyright from "../../Assets/licensingcopyright.png"
import enhancedmusic from "../../Assets/enhancedmusic.png"
import smartcontract from "../../Assets/smartcontract.png"
import virtualconcerts from "../../Assets/virtualconcerts.png"
import antipiracy from "../../Assets/antipiracy.png"
import openmusic from "../../Assets/openmusic.png"
import musicbasednfts from "../../Assets/musicbasednfts.png"
import creatoradvantage from "../../Assets/creatoradvantage.png"
import Unlockendless1 from "../../Assets/Unlockendless1.png"
import Unlockendless2 from "../../Assets/Unlockendless2.png"
import Footer from "../Footer/Footer";
import './UpdatedLandingPage.css'
import { useNavigate ,Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
function UpdatedLandingPage(){
    const isAuthed = useSelector((store)=> store.ReduxSlice.data.isAuthed)
    const navigate = useNavigate();
    const VerificationEmail = () =>{
        navigate('/verify-email')
    }
    const rhythmicdata = [
        {id:1, src:fanpower, text1:"Fan-powered"},
        {id:2, src:fanengagement, text1:"Fans Engagement"},
        {id:3, src:fanfoundedtours, text1:"Fan-Funded Tours"},
        {id:4, src:micropayments, text1:"Micropayments"},
        {id:5, src:fanownership, text1:"Fan Ownership"},
        {id:6, src:livemusic, text1:"Live music"},
        {id:7, src:crowdsourcemusic, text1:"Crowd-Sourced", text2:"Music Curation"},
        {id:8, src:freemusic, text1:"Royalty-free", text2:"Music Libraries"},
        {id:9, src:decentralizedmusic, text1:"Decentralized", text2:"Music Education"}
    ]

    const advantagesdata = [
        {id:1, src:reputation, text1:"Identity &", text2:"Reputation System"},
        {id:2, src:collaborative, text1:"Collaborative", text2:"Music"},
        {id:3, src:licensingcopyright, text1:"Licensing &", text2:"Copyright Management"},
        {id:4, src:enhancedmusic, text1:"Enhanced Music", text2:"Metadata"},
        {id:5, src:smartcontract, text1:"Smart Contract", text2:"Based Royalties"},
        {id:6, src:virtualconcerts, text1:"Virtual Concerts"},
        {id:7, src:antipiracy, text1:"Anti-Piracy", text2:"Measures"},
        {id:8, src:openmusic, text1:"Open Music"},
        {id:9, src:musicbasednfts, text1:"Music-Based", text2:"NFTs"},
    ]

    if (isAuthed){
        return <Navigate to="/home"/>
    }

    return (
        <div className="w-full h-full bg-iLightBlue">
            <div className="flex flex-row justify-between">
            <div className="imusicLogo">
                <img src={imusicLogo}  className="max-w-[185px] h-[196px] pt-[24px] pl-[36px]"/>
            </div>
            <div onClick={VerificationEmail} className="w-[174px] h-[48px] bg-iBlue rounded-[28px] mt-[83px] mr-[123px] flex items-center justify-center hover:bg-iOrange hover:cursor-pointer">
                <div className="text-center text-iWhite">Sign Up/Sign in</div>
            </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="3xl:text-[120px] text-[90px]  text-iBlue font-medium mt-[75px] ml-[72px] 3xl:leading-none">A Decentralized <br/>Music Experience <br/>Built on Web3 Technology.</div>
                <div className="">
                    <img src={listingMusic}  className="3xl:max-w-[2332px] h-[760px]"/>    
                </div>
            </div> 

            <div  className="flex flex-row gap-[99px]">
                <div className="mt-[74px]">
                        <img src={rythamic} className="max-w-[982px] h-[996px]"/>
                </div>
    
               <div className="flex flex-col mt-[250px]">
                <div className="text-[58px] text-iOrange">Rhythmic Advantages</div>
               <div className="mt-[60px] grid grid-cols-3 gap-[110px]">
                    {
                    rhythmicdata?.map((item)=>{
                       return <div className="flex flex-col items-center text-center">
                        <div className="iconsBackground 3xl:w-[200px] w-[150px] h-[170px] flex justify-center items-center">
                            <img src={item.src} className="-ml-[15px]"/>
                            </div>
                        <div><p className="text-[25px] font-semibold text-iBlue">{item.text1}</p></div>
                         <div><p className="text-[25px] font-semibold text-iBlue">{item.text2}</p></div>
                        </div>
                        
                    })
                }
                </div>
               </div>
            </div>

            <div className="flex flex-row 3xl:gap-[249px]">
                <div className="flex flex-col">
                    <div className="text-[58px] text-iOrange font-medium mt-[69px] ml-[72px]">Creator's Advantages</div>
                
                <div className="mt-[74px] grid grid-cols-3 ml-[134px] gap-[110px]">
                    {
                        advantagesdata.map((item)=>{
                            return <div className="flex flex-col items-center text-center">
                               <div className="iconsBackground 3xl:w-[200px] w-[150px] h-[170px] flex justify-center items-center">
                                <img src={item.src} className="-ml-[15px]"/>
                                </div>
                                <div className=""><p className="text-[25px] -ml-[15px] font-semibold text-iBlue">{item.text1}</p></div>
                                <div className=""><p className="text-[25px] -ml-[15px] font-semibold text-iBlue">{item.text2}</p></div> 
                            </div>
                        })
                    }
                </div>
                </div>
                <div><img src={creatoradvantage} className="max-w-[982px] h-[1026px] mt-[74px]"/></div>
            </div>
            
            <div className="flex flex-col gap-[18px]">
                <div className="text-[58px] text-iOrange font-medium pl-[72px] pt-[140px]">Join Our Community</div>
                <div className="text-[32px] font-semibold text-iBlue w-[1441px] h-[98px] pl-[72px]">Join our inclusive, creative, and collaborative music community on a mission to revolutionize the way we discover, listen to, and share music with music lovers from around the world!</div>
            </div>

            <div className="flex flex-row justify-between gap-[44px] px-[76px] pt-[83px] mb-[150px]">
            <div className="relative items-center text-center transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-400">
                <div className="text-[56px] text-iWhite font-semibold w-[490px] h-[144px] absolute top-[160px] 3xl:right-[150px] right-[75px] ">Unlock endless</div>
                <div className="text-[56px] text-iWhite font-semibold w-[490px] h-[80px] absolute top-[230px] 3xl:right-[150px] right-[75px] leading-none">music possibilities.</div>
                    <img src={Unlockendless1} className="w-[862px] h-[562px]"/>
                    <div className="w-[204px] h-[66px] bg-iBlue text-iWhite text-[20px] rounded-[45px] flex justify-center items-center absolute bottom-[90px] 3xl:right-[310px] right-[185px] hover:bg-iOrange hover:cursor-pointer">Explore Now</div>
                </div>
                <div className="relative items-center text-center transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-400">
                <div className="text-[56px] text-iWhite font-semibold w-[490px] h-[144px] absolute top-[160px] 3xl:right-[150px] right-[75px] ">Unlock endless</div>
                <div className="text-[56px] text-iWhite font-semibold w-[490px] h-[80px] absolute top-[230px] 3xl:right-[150px] right-[75px] leading-none">music possibilities.</div>
                    <img src={Unlockendless2} className="w-[862px] h-[562px]"/>
                    <div className="w-[204px] h-[66px] bg-iBlue text-iWhite text-[20px] rounded-[45px] flex justify-center items-center absolute bottom-[90px] 3xl:right-[310px] right-[185px] hover:bg-iOrange hover:cursor-pointer">Explore Now</div>
                </div>
                
            </div>
            <Footer />

        </div>
    );
}

export default UpdatedLandingPage