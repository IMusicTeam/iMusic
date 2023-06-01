import React, { useCallback, useEffect, useState } from 'react';
import MetaImage from "./../../Assets/MetaMask.png"
import Web3 from "web3";
import { useDispatch, useSelector } from 'react-redux';
import { updateMetaMaskDetails } from './../../Redux/Redux';
import { useNavigate } from 'react-router';
import WalletDashboard from './WalletDashboard';

function ProfileDashboard() {
  const metaMaskDetails = useSelector((store)=>store.ReduxSlice.data.metaMaskDetails)
  const isWalletConnected = Object.keys(metaMaskDetails).length === 0
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const userInfo = useSelector((store) => store.ReduxSlice.data.userData);
  const [balance, setBalance] = useState(0);
  const dispatch = useDispatch();
  const [isText, setIsText] = useState(true)
  const navigateTo = useNavigate()
  const getFirstNameLastName = useCallback(() => {
    const returnmail = val => {
      return val.split("@")
    }
    const {email} = userInfo
    return email ? returnmail(email) : ""
  },[userInfo])

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        setIsText(false)
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
      dispatch(updateMetaMaskDetails({ data: { account, balanceInEther } }));
      setConnected(true)
      // navigateTo('/profile/walletdashboard')
      localStorage.setItem("account", account);
      setBalance(balanceInEther);
      localStorage.setItem("balanceInEther", balanceInEther);
    } catch (error) {
      console.log(error);
      setConnected(false);
    }
  };
  useEffect(()=>{
    if(!isWalletConnected){
      connectWallet()
    }
  },[])
  return (

    <>
      {isWalletConnected ? <div className='mr-[33px]'>
        <div className='max-w-[1592px] h-[434px] rounded-[12px] mt-[74px] ml-[34px] bg-cwhite border border-iOrange'>
          <div className='flex flex-row items-center gap-[22px] pt-[85px] pl-[114px]'>
            <div>
              <img src={MetaImage} className='w-[79px] h-[79px]' />
            </div>
            {isText ? <div className='max-w-[383px] w-full h-[62px] rounded-[31px] border border-iBlue mt-[7px] text-center'>
              <button onClick={connectWallet} className='text-[28px] text-ibgy1 font-medium py-[10px]'> Connect to Wallet</button>
            </div> :
              <p className='mt-[7px] text-[28px] font-medium text-crd5'> Please install Metamask to connect to a wallet.</p>}

          </div>

          <div className='mt-[115px] ml-[79px]'>
            <div className='text-[28px] text-ibgy1 font-medium'>You must Connect to Meta Mask wallet in order Rent or buy NFT</div>
          </div>

        </div>

        <div className='flex flex-row gap-[16px] ml-[34px] mb-[30px]'>
          <div className='max-w-[816px] w-full h-[434px] bg-igray rounded-[12px] border border-iOrange mt-[22px]'>
            <div className='text-ibgy1 text-[28px] text-center mt-[183px] 2xl:text-[25px] 2xl:mt-[195px] 1.5xl:text-[24px] 1.5xl:mt-[197px] 1xl:mt-[168px] 5xl:mt-[166px] 4xl:mt-[195px] 3xl:mt-[195px] 13mac:mt-[195px] xl:mt-[172px]'>No Transactions To Display</div>
          </div>
          <div className='max-w-[372px] w-full h-[434px] bg-igray rounded-[12px] border border-iBlue mt-[22px]'>
            <div className='text-ibgy1 text-[28px] ml-[71px] mt-[167px] max-w-[230px] w-full h-[74px] 2xl:text-[26px] 2xl:ml-[63px] 2xl:mt-[173px] 1.5xl:text-[24px] 1.5xl:ml-[63px] 1.5xl:mt-[180px] 5xl:ml-[43px] 4xl:ml-[78px] 4xl:mt-[172px] 3xl:ml-[75px] 3xl:mt-[175px] 13mac:ml-[66px] xl:ml-[45px] xl:mt-[169px]'>No information to <span className='ml-[71px]'>Display</span></div>
          </div>
          <div className='max-w-[372px] w-full h-[434px] bg-igray rounded-[12px] border border-iBlue mt-[22px]'>
            <div className='text-ibgy1 text-[28px] ml-[71px] mt-[167px] max-w-[230px] w-full h-[74px] 2xl:text-[26px] 2xl:ml-[63px] 2xl:mt-[173px] 1.5xl:text-[24px] 1.5xl:ml-[63px] 1.5xl:mt-[180px] 5xl:ml-[43px] 4xl:ml-[78px] 4xl:mt-[172px] 3xl:ml-[75px] 3xl:mt-[175px] 13mac:ml-[66px] xl:ml-[45px] xl:mt-[169px]'>No information to <span className='ml-[71px]'>Display</span></div>
          </div>
        </div>

      </div> : 
      <div>
        <WalletDashboard email={getFirstNameLastName()}  />
      </div>}

    </>






  )

}

export default ProfileDashboard