import React,{useEffect, useState} from "react"
import axios from "axios";
import logo from "../../Assets/logo.png"
import { APIConstants } from "../../Services/api-constants";
import VerificationInput from "../Atoms/VerificationInput/VerificationInput";
import { useNavigate,Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthVerification, updateUserData } from "../../Redux/Redux";

function EmailAuthentication(){
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isAuthed = useSelector((store)=> store.ReduxSlice.data.isAuthed)
    const {email} = useSelector((store)=>store.ReduxSlice.data.userData)
    const blankCode = ['1', '2', '3', '4', '5', '6'];
    const [otpVerification, setOtpVerification] = useState(blankCode);
    const [codeError, setCodeError] = useState(false);
    const [codeSuccess, setCodeSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onComplete = () =>{
        setIsLoading(true);
        setCodeError(false);
        setCodeSuccess(false);
        const reqBody ={
            otp: otpVerification.join().replace(/,/g, ''),
            email
        }
        axios.put(APIConstants.otpVerification,reqBody)
        .then((res)=>{
            var jsonString = JSON.stringify(reqBody);
            localStorage.setItem("id",res.data.data._id)
            localStorage.setItem("emailAuth",jsonString)
            if(reqBody.email === "admin@inspireTk.com"){
                 dispatch(updateUserData({data:{...res.data.data,isAdmin:true}}))
            }else{
            dispatch(updateUserData({data:{...res.data.data}}))
            }
            dispatch(updateAuthVerification({data:{id:res.data.data._id}}))
                setIsLoading(false);
            setCodeSuccess(true);
            setTimeout(() => {
                navigate('/home')
            }, 1000);
             
                
        })
        .catch((err)=>{
            setCodeError(true);
            setOtpVerification(blankCode);
            setIsLoading(false);
            console.log(err.message)
        })

    }

    
    // if (isAuthed){
    //     return <Navigate to="/home"/>
    // }

    const onPaste = (value) => {
        setOtpVerification(value);
      };

      const BacktoPreviousPage = () =>{
        navigate('/verify-email')
      }

    return(
        <div className="flex items-center justify-center mb-[200px] relative">
         <div className="max-w-[610px] h-[636px] bg-iWhite shadow-2xl ml-[41px] px-[77px] mt-[29px] rounded-xl absolute top-24">
            <div className="flex justify-center">
                <img src={logo}  className="w-[239px] h-[159px] mt-[40px]"/>
            </div>
                 <h4 className="text-cgy4 text-[30px] font-medium text-center mt-[40px]">Email Authentication</h4>
                <p className="text-cgy4 text-[16px] font-medium text-center mt-[40px]">Please enter the 6-digit verification code sent to your</p>
                <p className="text-cgy4 text-[16px] font-medium text-center">registered email address {email}</p>

            <div className="mt-[73px]">
            <VerificationInput
            className=""
            value={otpVerification}
            onChange={(value) => setOtpVerification(value)}
            onPaste={onPaste}
            onComplete={onComplete}
            error={codeError}
            success={codeSuccess}
            isLoading={isLoading} 
            />
            </div>

            <div className="flex items-center justify-center">
            <h6 className="flex justify-center items-center mt-[4px] text-iBlue hover:underline hover:cursor-pointer font-medium" onClick={BacktoPreviousPage}>Go Back</h6>
            </div>
            
      </div>
       </div>
    )
}

export default EmailAuthentication