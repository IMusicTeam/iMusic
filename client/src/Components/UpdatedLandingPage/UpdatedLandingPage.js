import React, { useEffect } from "react"
import listeningMusic from "../../Assets/listeningMusic.png";
import imusicLogo from "../../Assets/logo.png"
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
import { useNavigate, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { ethers } from "ethers";
import contractInstance from "../../web3";
function UpdatedLandingPage(){
    const isAuthed = useSelector((store)=> store.ReduxSlice.data.isAuthed)
    const navigate = useNavigate();
    const VerificationEmail = () =>{
        setTimeout(()=>{
            navigate('/verify-email')
        },600)
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

    const exploreRouting = () =>{
        navigate('/verify-email')
    }

    if (isAuthed){
        return <Navigate to="/home"/>
    }

    const handleTransfer = async (walletId) => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts);
          try {
            const value = ethers.utils.parseEther("2");
            const res = await contractInstance.methods
              .sendMoney(walletId)
              .send({
                from: accounts[0],
                value: value,
              });
            console.log(res);
          } catch (err) {
            alert(err);
          }
        }
    

    return (
        <div className="w-full h-full bg-iLightBlue">
            {/* <button onClick={()=> handleTransfer("0x7A2AE70F5524c712db746F9A1a81dFf5D92Aa99E")} >Transfer</button> */}
            <div className="flex flex-row items-center justify-between">
            <div className="imusicLogo">
                <img src={imusicLogo}  className="max-w-[186px] h-[111px] pt-[24px] pl-[36px]"/>
            </div>
            <div onClick={VerificationEmail} className="w-[174px] h-[48px] bg-iBlue rounded-[28px] mr-[123px] flex items-center justify-center hover:bg-iOrange hover:cursor-pointer">
                <div className="text-center text-iWhite">Sign Up/Sign In</div>
            </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="4xl:text-[70px] 3xl:text-[55px] 13mac:text-[56px] text-iBlue font-medium mt-[75px] ml-[72px] 3xl:leading-20px 2xl:text-[52px] 1.5xl:text-[51px] 1xl:text-[54px] 5xl:text-[40px] xl:text-[54px]">Next-Gen Music Experience with iMusic-NFT
                <div className="text-iOrange">
                    <span>Fans,</span>
                    <span> Artists,</span>
                    <span> Tokens</span>
                </div>
                </div>
                <div>
                    <img src={listeningMusic}  className="3xl:max-w-[2332px] h-[760px] 13mac:max-w-[2000px] 13mac:h-[695px] 2xl:max-w-[1800px] 2xl:h-[650px] 1.5xl:max-w-[1740px] 1.5xl:h-[610px] 1xl:max-w-[1700px] 1xl:h-[580px] 5xl:max-w-[1640px] 5xl:h-[550px] xl:max-w-[1600px] xl:h-[530px]"/>    
                </div>
            </div> 

            <div  className="flex flex-row mr-5 4xl:gap-[249px] 3xl:gap-[120px] 13mac:gap-[80px] 2xl:gap-[90px] 1.5xl:gap-[90px] 1xl:gap-[70px] 5xl:gap-[60px] xl:gap-[70px]">
                <div className="mt-[74px]">
                        <img src={rythamic} className="max-w-[982px] h-[996px] 13mac:max-w-[920px] 13mac: h-[950px] 1xl: max-w-[870px] 1xl:h-[860px] 5xl:max-w-[800px] 5xl:h-[800px] xl:max-w-[740px] xl:h-[740px]"/>
                </div>
    
               <div className="flex flex-col mt-[250px] 13mac:mt-[200px] 5xl:mt-[180px] xl:mt-[180px]">
                <div className="text-[58px] text-iBlack -ml-[65px] 1xl:text-[50px] 5xl:text-[45px] xl:text-[45px]">Rhythmic Advantages</div>
               <div className="mt-[60px] grid grid-cols-3 4xl:gap-x-[174px] 3xl:gap-x-[100px] 13mac:gap-x-[80px] 13mac:gap-y-[100px] 2xl:gap-x-[60px] 2xl:gap-y-[95px] 1.5xl:gap-x-[40px] 1.5xl:gap-y-[90px] 1xl:gap-x-[40px] 1xl:gap-y-[80px] 5xl:gap-x-[40px] 5xl:gap-y-[80px] xl:gap-x-[50px] xl:gap-y-[60px] gap-y-[145px] ">
                    {
                    rhythmicdata?.map((item)=>{
                       return <div className="flex flex-col items-center text-center">
                        <div className="iconsBackground 3xl:w-[200px] w-[150px] h-[170px] flex justify-center items-center">
                            <img src={item.src} className="-ml-[15px] 3xl:mt-0 13mac:-mt-[30px] 4xl:mt-0 2xl:-mt-[30px] 1.5xl:-mt-[30px] 1xl:-mt-[30px] 5xl:-mt-[30px] xl:-mt-[30px]"/>
                            </div>
                        <div><p className="text-[25px] font-semibold text-iBlue 4xl:mt-3 3xl:mt-3 13mac:-mt-5 2xl:-mt-5 1xl:-mt-5 5xl:-mt-5 xl:-mt-5">{item.text1}</p></div>
                         <div><p className="text-[25px] font-semibold text-iBlue">{item.text2}</p></div>
                        </div>
                        
                    })
                }
                </div>
               </div>
            </div>

            <div className="flex flex-row justify-between 4xl:gap-[249px] 3xl:gap-[140px] 13mac:gap-[100px] 2xl:gap-[80px] 1.5xl:gap-[90px] 1xl:gap-[80px] 5xl:gap-[75px] xl:gap-[40px]">
                <div className="flex flex-col">
                    <div className="text-[58px] text-iBlack font-medium mt-[69px] ml-[72px] 1xl:text-[50px] 5xl:text-[45px] xl:text-[40px]">Creator's Advantages</div>
                
                <div className="mt-[74px] grid grid-cols-3 4xl:ml-[115px] 3xl:ml-[40px] 3xl:gap-[100px] gap-[110px] 13mac:gap-[85px] 13mac:ml-[40px] 2xl:gap-[50px] 1.5xl:gap-[75px] 1.5xl:ml-7 1xl:gap-[65px] 1xl:ml-[30px] 5xl:gap-[63px] 5xl:ml-[30px] xl:gap-x-[40px] xl:gap-y-[40px] xl:ml-[10px]">
                    {
                        advantagesdata.map((item)=>{
                            return <div className="flex flex-col items-center text-center">
                               <div className="iconsBackground 3xl:w-[200px] w-[150px] h-[170px] flex justify-center items-center">
                                <img src={item.src} className="-ml-[15px] -mt-[30px] 4xl:mt-0 3xl:mt-0"/>
                                </div>
                                <div className=""><p className="text-[25px] -ml-[15px] font-semibold text-iBlue 4xl:mt-3 3xl:mt-3 13mac:-mt-5 1xl:-mt-5">{item.text1}</p></div>
                                <div className=""><p className="text-[25px] -ml-[15px] font-semibold text-iBlue">{item.text2}</p></div> 
                            </div>
                        })
                    }
                </div>
                </div>
                <div><img src={creatoradvantage} className="4xl:max-w-[982px] 3xl:max-w-[722px] 13mac:max-w-[540px] 2xl:max-w-[510px] 5xl:max-w-[500px] 5xl:h-[940px] xl:max-w-[440px] xl:h-[840px] h-[1026px] mt-[74px]"/></div>
            </div>
            
            <div className="flex flex-col gap-[18px]">
                <div className="text-[58px] text-iBlack font-medium pl-[72px] pt-[140px]">Join Our Community</div>
                <div className="text-[32px] text-iBlack w-[1441px] 2xl:w-[1517px] 1.5xl:w-[1367px] 1xl:w-[1362px] 5xl:w-[1298px] xl:w-[1278px] h-[98px] pl-[72px]">Join our inclusive, creative and collaborative music community on a mission to revolutionize the way we discover, listen to, and share music with music lovers from around the world!</div>
            </div>

            <div className="flex flex-row justify-between gap-[34px] px-[76px] pt-[83px] mb-[150px]">
            <div className="relative items-center text-center transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-400">
                <div className="4xl:text-[50px] 3xl:text-[40px] text-iWhite font-medium w-[490px] h-[144px] absolute top-[102px] 4xl:-left-[20px] 3xl:-left-[52px] right-[75px] 13mac:text-[37px] 13mac:-left-[75px] 2xl:text-[40px] 2xl:-left-[55px] 1.5xl:text-[33px] 1.5xl:-left-[85px] 1.5xl:top-[70px] 1xl:text-[33px] 1xl:-left-[85px] 1xl:top-[70px] 5xl:text-[35px] 5xl:-left-[85px] 5xl:top-[70px] xl:text-[30px] xl:-left-[85px] xl:top-[70px]">Unlock Endless</div>
                <div className="4xl:text-[50px] 4xl:top-[140px] 4xl:left-0 3xl:text-[40px] text-iWhite font-medium w-[490px] h-[80px] absolute top-[175px] 3xl:-left-[46px] right-[75px] leading-none 13mac:text-[37px] 13mac:-left-[70px] 2xl:text-[40px] 2xl:-left-[55px] 1.5xl:text-[33px] 1.5xl:-left-[80px] 1.5xl:top-[120px] 1xl:text-[33px] 1xl:-left-[80px] 1xl:top-[120px] 5xl:text-[35px] 5xl:-left-[75px] 5xl:top-[120px] xl:text-[30px] xl:-left-[80px] xl:top-[120px]">Music Possibilities</div>
                    <img src={Unlockendless1} className="w-[862px] h-[562px] 4xl:h-[550px] 3xl:h-[490px] 13mac:h-[475px] 2xl:h-[465px] 1.5xl:h-[455px] 1xl:h-[455px] 5xl:h-[455px] xl:h-[455px]"/>
                    <div className="w-[204px] h-[66px] bg-iBlue text-iWhite text-[20px] rounded-[45px] flex justify-center items-center absolute 4xl:bottom-[185px] 4xl:left-[115px] 4xl:top-[300px] 3xl:left-[80px] hover:bg-iOrange hover:cursor-pointer 13mac:left-[50px] 13mac:top-[260px] 2xl:top-[250px] 2xl:left-[60px] 1.5xl:top-[190px] 1.5xl:left-[60px] 1xl:top-[190px] 1xl:left-[70px] 5xl:top-[190px] 5xl:left-[60px] xl:top-[190px] xl:left-[60px]" onClick={exploreRouting}>Explore Now</div>
                </div>
                <div className="relative items-center text-center transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105 duration-400">
                <div className="4xl:text-[50px] 3xl:text-[40px] text-iWhite font-medium w-[490px] h-[144px] absolute top-[102px] 4xl:-left-[25px] 3xl:-left-[60px] right-[75px] 13mac:text-[37px] 13mac:-left-[75px] 2xl:text-[40px] 2xl:-left-[65px] 1.5xl:text-[33px] 1.5xl:-left-[85px] 1.5xl:top-[70px] 1xl:text-[33px] 1xl:-left-[85px] 1xl:top-[70px] 5xl:text-[33px] 5xl:-left-[90px] 5xl:top-[70px] xl:text-[30px] xl:-left-[85px] xl:top-[70px]">Join the Rhythm</div>
                <div className="4xl:text-[50px] 4xl:top-[140px] 3xl:text-[40px] text-iWhite font-medium w-[490px] h-[80px] absolute top-[175px] 3xl:-left-[45px] right-[75px] leading-none 13mac:text-[37px] 13mac:-left-[75px] 2xl:text-[40px] 2xl:-left-[65px] 1.5xl:text-[33px] 1.5xl:-left-[80px] 1.5xl:top-[120px] 1xl:text-[33px] 1xl:-left-[80px] 1xl:top-[120px] 5xl:text-[33px] 5xl:-left-[90px] 5xl:top-[120px] xl:text-[30px] xl:-left-[85px] xl:top-[120px]">Revolution</div>
                    <img src={Unlockendless2} className="w-[862px] h-[562px] 4xl:h-[550px] 3xl:h-[490px] 13mac:h-[475px] 2xl:h-[465px] 1.5xl:h-[455px] 1xl:h-[455px] 5xl:h-[455px] xl:h-[455px]"/>
                    <div className="w-[204px] h-[66px] bg-iBlue text-iWhite text-[20px] rounded-[45px] flex justify-center items-center absolute 4xl:bottom-[185px] 4xl:left-[100px] 4xl:top-[300px] 3xl:left-[80px] hover:bg-iOrange hover:cursor-pointer 13mac:left-[70px] 13mac:top-[260px] 2xl:top-[250px] 2xl:left-[70px] 1.5xl:top-[190px] 1.5xl:left-[70px] 1xl:top-[190px] 1xl:left-[60px] 5xl:top-[190px] 5xl:left-[50px] xl:top-[190px] xl:left-[60px]" onClick={exploreRouting}>Explore Now</div>
                </div>
                
            </div>
            <Footer />

        </div>
    );
}

export default UpdatedLandingPage