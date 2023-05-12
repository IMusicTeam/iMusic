import React, {useState} from "react"
import logo from "../../Assets/logo.png"
import axios from "axios"
import { APIConstants } from "../../Services/api-constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../Redux/Redux";
function ForgotPassword(){
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [emailverification, setEmailVerification] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault();
      };

      const EmailVerification = async() =>{
        const reqBody = {
            email: emailverification
        }
        axios.post(APIConstants.emailVerification, reqBody)
        .then((res)=>{
            dispatch(updateUserData({data:{email:res.data.data}}))
            navigate("/email-authentication")
        })
        .catch((err)=>{
            alert('Please fill the field')
            console.log(err.message)
        })
      }

return(
    <>
    <div className="flex items-center justify-center mb-[150px] relative">
         <div className="max-w-[610px] bg-iWhite shadow-2xl ml-[41px] px-[77px] mt-[29px] rounded-xl absolute top-24">
            <div className="flex justify-center">
                <img src={logo}  className="w-[239px] h-[159px] mt-[40px]"/>
            </div>
            <h4 className="text-cgy4 text-[30px] font-medium text-center mt-[40px]">Verify Email?</h4>
                <p className="text-cgy4 text-[16px] font-medium text-center mt-[40px]">Please enter the email address associated with your iLoT</p>
                <p className="text-cgy4 text-[16px] font-medium text-center">account below. We will send you a verification code.</p>

                <form onSubmit={handleSubmit}>
                    <div className="mt-[28px]">
                    <input type="text" placeholder="Email or Phone number" className="border border-cgy1 rounded-[10px] w-[446px] h-[40px] py-3 px-3 focus:border-cgy1 placeholder-iGray1 text-sm outline-none" id="subjectInput" value={emailverification} onChange={(e) => setEmailVerification(e.target.value)} />
                    </div>

                    <div className="flex justify-center mb-[40px]">
                        <button type="submit" onClick={EmailVerification} className={`w-[300px] h-[40px] ${emailverification ? 'bg-iBlue' : 'bg-iLightBlue1'}  text-iWhite font-semibold py-1 px-4 rounded-[80px] mt-[121px]`}>Verify</button>
                    </div>

      </form>
      </div>
       </div>
    
    
    </>

);
}

export default ForgotPassword