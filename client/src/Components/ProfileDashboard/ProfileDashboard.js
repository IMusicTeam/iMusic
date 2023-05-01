import React from 'react';
import foxImage from "./../../Assets/Card1.png"

function ProfileDashboard(){
    return(

        <>
        <div className='max-w-[1592px] h-[434px] rounded-[12px] mt-[74px] ml-[34px] bg-cwhite border border-iOrange'>
           <div className='flex flex-row gap-[22px] pt-[85px] pl-[114px]'>
           <di font-semiboldv className='w-[79px] h-[79px]'>
                <img src={foxImage}/>
            </di>
            <div className='max-w-[383px] w-full h-[62px] rounded-[31px] border border-iBlue mt-[7px]'>
                <div className='text-[28px] text-ibgy1 font-semibold py-[10px] text-center'>Connect to Wallet</div>
            </div>
           </div>

           <div className='mt-[115px] ml-[79px]'>
                <div className='text-[28px] text-ibgy1 font-semibold'>You must Connect to Meta Mask wallet in order Rent or buy NFT</div>
           </div>
           
        </div>

        <div className='flex flex-row gap-[16px] ml-[34px]'>
                <div className='max-w-[816px] w-full h-[434px] bg-igray rounded-[12px] border border-iOrange mt-[22px]'>
                    <div className='text-ibgy1 text-[28px] text-center mt-[183px]'>No Transactions To Display</div>
                </div>
                <div className='max-w-[372px] w-full h-[434px] bg-igray rounded-[12px] border border-iBlue mt-[22px]'>
                    <div className='text-ibgy1 text-[28px] ml-[71px] mt-[167px] max-w-[230px] w-full h-[74px]'>No information to <span className='ml-[71px]'>Display</span></div>
                </div>
                <div className='max-w-[372px] w-full h-[434px] bg-igray rounded-[12px] border border-iBlue mt-[22px]'>
                    <div className='text-ibgy1 text-[28px] ml-[71px] mt-[167px] max-w-[230px] w-full h-[74px]'>No information to <span className='ml-[71px]'>Display</span></div>
                </div>
           </div>

        </>

        

        

  
    )

}

export default ProfileDashboard