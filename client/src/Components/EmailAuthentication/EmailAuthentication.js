import React,{useState} from "react"
import axios from "axios";
import logo from "../../Assets/logo.png"
import { APIConstants } from "../../Services/api-constants";
import VerificationInput from "../Atoms/VerificationInput/VerificationInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../Redux/Redux";

function EmailAuthentication(){
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {email} = useSelector((store)=>store.ReduxSlice.data.userData)
    const blankCode = ['', '', '', '', '', ''];
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
            dispatch(updateUserData({data:{...res.data.data}}))
            setIsLoading(false);
            setCodeSuccess(true);
            setTimeout(() => {
                navigate('/')
            }, 2000);
             
                
        })
        .catch((err)=>{
            setCodeError(true);
            setOtpVerification(blankCode);
            setIsLoading(false);
            console.log(err.message)
        })

    }

    const onPaste = (value) => {
        setOtpVerification(value);
      };

    return(
        <div className="flex items-center justify-center mb-[200px] relative">
         <div className="max-w-[610px] h-[636px] bg-iWhite shadow-2xl ml-[41px] px-[77px] mt-[29px] rounded-xl absolute top-24">
            <div className="flex justify-center">
                <img src={logo}  className="w-[239px] h-[159px] mt-[40px]"/>
            </div>
                 <h4 className="text-cgy4 text-[30px] font-medium text-center mt-[40px]">Email Authentication</h4>
                <p className="text-cgy4 text-[16px] font-medium text-center mt-[40px]">Please enter the 6-digit verification code sent to your</p>
                <p className="text-cgy4 text-[16px] font-medium text-center">registered email address johnsmith@gmail.com</p>

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
      </div>
       </div>
    )
}

export default EmailAuthentication