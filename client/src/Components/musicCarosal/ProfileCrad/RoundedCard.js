import React from 'react'

function RoundedCard({data}) {
   
  return <>
   <div className='flex flex-row gap-[30px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
   {
        data?.map((item,i)=>
       
        <div className='flex flex-col mt-[28px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400'>
        <div className='w-[140px] h-[140px]'>
        <img className='w-[140px] h-[140px] rounded-full'
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="ui/ux review check"
                />
        </div>
        <div className='ml-[8px]'>
            <h5 className='text-[18px] font-semibold text-[#060D14] mt-[4px]'>Rico Verhoeven</h5>
            <p className='text-[12px] font-semibold text-[#060D14] ml-[36px]'>Rank - #1</p>
            <p className='text-[14px] font-semibold text-[#060D14] ml-[36px]'>Mexico</p>
        </div>
      </div>
        )
    }
     </div> 
    </>
}

export default RoundedCard
