import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo.png";
import axios from "axios";
import { APIConstants } from "../../Services/api-constants";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../Redux/Redux";
function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthed = useSelector((store) => store.ReduxSlice.data.isAuthed);

  const [emailverification, setEmailVerification] = useState("iMusic@inspireTk.com");
  const [emailError, setEmailError] = useState("");

  const validEmailVerification = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    if (name === "email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(trimmedValue)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      setEmailVerification(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const EmailVerification = async () => {
    if (!emailError) {
      const reqBody = {
        email: emailverification,
      };
      axios
        .post(APIConstants.emailVerification, reqBody)
        .then((res) => {
          dispatch(updateUserData({ data: { email: res.data.data } }));
          navigate("/email-authentication");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  if (isAuthed) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="max-w-[610px] bg-iWhite shadow-2xl px-[77px] rounded-xl">
          <div className="flex justify-center">
            <img src={logo} className="w-[239px] h-[159px] mt-[40px]" />
          </div>
          <h4 className="text-cgy4 text-[30px] font-medium text-center mt-[40px]">
            Enter Email
          </h4>
          <p className="text-cgy4 text-[16px] font-medium text-center mt-[40px]">
            Please enter the email address associated with your iMusic
          </p>
          <p className="text-cgy4 text-[16px] font-medium text-center">
            account below. We will send you a verification code.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="h-[80px]">
              <div className="mt-[28px]">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  className="border border-cgy1 rounded-[10px] w-[446px] h-[50px] py-3 px-3 focus:border-cgy1 placeholder-iGray1 text-sm outline-none"
                  id="subjectInput"
                  value={emailverification}
                  onChange={(e) => validEmailVerification(e)}
                />
                {emailError && (
                  <span className="text-ibrd3 text-[15px] z-10">
                    Invalid email address
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-center mb-[40px]">
              <button
                type="submit"
                onClick={EmailVerification}
                className={`w-[300px] h-[40px] ${
                  emailverification == "" || emailError
                    ? "bg-iLightBlue1"
                    : "bg-iBlue hover:bg-iOrange"
                }  text-iWhite font-medium py-1 px-4 rounded-[80px] mt-[121px]`}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
