import React from "react";

function ProfileCardWithoutIcon({ src }){
return(
    <div
      className=""
    >
      <div className="w-[360px] h-[360px] rounded-[20px] relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-400">
        <div className="w-[360px] h-[360px]">
          <img
            className="rounded-t-[20px] w-[100%] h-[360px]"
            src={src}
            alt="ui/ux review check"
          />
        </div>
      </div>
    </div>
)
}
export default ProfileCardWithoutIcon