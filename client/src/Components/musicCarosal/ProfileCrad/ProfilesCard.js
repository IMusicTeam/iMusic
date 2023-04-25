import React,{ useState } from 'react'
import { BsFillPlayFill } from "react-icons/bs";
import './ProfileCard.css'

function ProfileCard({data}) {
    const [isHovered, setIsHovered] = useState(false)
    const [indexValue, setIndexValue]=useState('')
    const MouseEnter=(index)=>{
        setIndexValue(index+1)
        setIsHovered(true)
    }
    const MouseLeave=()=>{
        setIsHovered(false)
        setIndexValue('')
    }
    return <>
    <div className='flex flex-row gap-[24px] mt-[28px] max-w-[1632px] overflow-x-scroll hidding-x-scroll'>
    {data?.map((item,i)=>
            <div className='' onMouseEnter={() => MouseEnter(i)} onMouseLeave={MouseLeave}>
                <div className='w-[300px] h-[270px] bg-slate-950 rounded-[20px] relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-400'>
                    <div className='w-[300px]'>
                    <img className='rounded-t-[20px]'
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="ui/ux review check"
                />
        
        {isHovered &&indexValue === item.id &&<button className='absolute !left-[200px] !top-[150px] start-0 w-[80px] h-[80px] bg-[#EA7525] rounded-full border-indigo-600 hover:border-2 hover:border-iBlue' 
              >
        
        <BsFillPlayFill className="pl-1 w-[32px] h-[100px] pauseIcon text-[#d6d4d3]" />
         </button>}
                    </div>
                    <div className='absolute'>
                       <div className='text-[15px] font-semibold text-white mt-3 ml-[6px]'>Trending Playlist</div>
                       <div className='text-[12px] font-semibold text-[#818B9C] ml-[6px]'>Album</div>
                    </div>
                </div>
            </div>
          
    )
    }
</div>
 </>
}

export default ProfileCard
