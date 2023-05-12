import React,{useState} from "react"
import axios from "axios";
import logo from "../../Assets/logo.png"
import { APIConstants } from "../../Services/api-constants";
import VerificationInput from "../Atoms/VerificationInput/VerificationInput";
import { useNavigate } from "react-router-dom";

function EmailAuthentication(){
    const navigate = useNavigate();
    const blankCode = ['', '', '', '', '', ''];
    const [otpVerification, setOtpVerification] = useState(blankCode);

    const OtpVerification = async () =>{
        const reqBody ={
            otpVerification: otpVerification
        }
        axios.post(APIConstants.otpVerification,reqBody)
        .then((res)=>{
            navigate('/')
        })
        .catch((err)=>{
            alert('Please fill the field')
            console.log(err.message)
        })
    }

    return(
        <div className="flex items-center justify-center mb-[150px] relative">
         <div className="max-w-[610px] bg-iWhite shadow-2xl ml-[41px] px-[77px] mt-[29px] rounded-xl absolute top-24">
            <div className="flex justify-center">
                <img src={logo}  className="w-[239px] h-[159px] mt-[40px]"/>
            </div>
                 <h4 className="text-cgy4 text-[30px] font-medium text-center mt-[40px]">Email Authentication</h4>
                <p className="text-cgy4 text-[16px] font-medium text-center mt-[40px]">Please enter the 6-digit verification code sent to your</p>
                <p className="text-cgy4 text-[16px] font-medium text-center">registered email address johnsmith@gmail.com</p>

            <div className="mt-[73px]">
            <VerificationInput
            value={otpVerification}
            onChange={(value) => setOtpVerification(value)} 
            />
            </div>
            <div className="flex justify-center mb-[40px]">
                        <button type="submit" onClick={OtpVerification} className={`w-[300px] h-[40px] bg-iBlue text-iWhite font-semibold py-1 px-4 rounded-[80px] mt-[47px]`}>Submit</button>
                    </div>
      </div>
       </div>
    )
}

export default EmailAuthentication