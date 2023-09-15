"use client";
import {
  confirmRegistration,
  resendVerificationOTP,
} from "@/services/authService";
import { checkInputOnlyNum, delayFn } from "@/utilities/checkUtils";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import TButton from "../TButton";

const Otp = () => {
  let router = useRouter();
  const userData = useSelector((d) => d.appStateReducer.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [resErr, setResErr] = useState(false);
  const refOne = useRef();

  const [code, setCode] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });
  const disabledFn = () => {
    if (
      code.one === "" ||
      code.two === "" ||
      code.three === "" ||
      code.four === "" ||
      code.five === "" ||
      code.six === ""
    )
      return true;

    return false;
  };
  useEffect(() => {
    setTimeout(() => {
      setResErr(false);
      setOtpRes("");
    }, 10000);
    return () => {
      clearTimeout();
    };
  }, [code]);

  useEffect(() => {
    refOne.current && refOne.current.focus();
  }, []);

  // eslint-disable-next-line
  const [errMess, setErrMess] = useState("");

  const moveCursorTo = (e) => {
    const codeLen = Object.values(code).filter((i) => i);
    if (e.target.value !== "") {
      if (codeLen.length <= 6) {
        const { nextSibling } = e.target;
        nextSibling.focus();
        if (e.target.nextSibling.id === "submit") {
          submitOtp();
        }
      } else {
        console.log(e);
      }
    } else if (e.which === 8) {
      if (codeLen.length > 0) {
        const { previousSibling } = e.target;
        previousSibling.focus();
      }
    }
  };
  const valNum = (e) => {
    checkInputOnlyNum(e);
  };

  const submitOtp = async () => {
    setIsLoading(true);
    const nCode = Object.values(code);
    const data = {
      user_name: userData.email,
      code: nCode.join(""),
    };
    try {
      const res = await confirmRegistration(data);
      console.log(res);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        delayFn(() => {
          router.push("/verify/success");
        }, 6000);
      } else {
        toast.error(res?.response?.data?.message);
        setCode({
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
  };

  const [otpRes, setOtpRes] = useState("");
  const [otpResent, setOtpResent] = useState(false);

  const resendOtp = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    setOtpResent(!otpResent);
    setErrMess("");
    setCode({
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
    });
    refOne.current && refOne.current.focus();
    const data = {
      email: userData.email,
    };
    const res = await resendVerificationOTP(data);
    if (res.status === 200) {
      toast.success(res.data.message);
    } else {
      toast.error("Something went wrong.");
    }
    setIsLoading(false);
  };

  const showErrFunc = () => {
    if (resErr) return null;
  };
  const showOtpFunc = () => {
    if (otpRes) return null;
  };

  return (
    <div style={{ position: "relative" }}>
      <div id="main-verify-email" className="container">
        {showErrFunc()}
        {showOtpFunc()}
        <div className="verify-email-box pt-3">
          <div className="verify-email-content">
            <div id="form" className="row">
              <form
                style={{
                  width: "320px",
                  margin: "auto",
                }}
              >
                <div className="flex gap-1 md:gap-4 justify-between mx-auto">
                  <input
                    onChange={handleChange}
                    className={
                      "bg-[#222530] h-[48px] w-[48px] rounded-[8px] text-center"
                    }
                    value={code.one}
                    type="text"
                    name="one"
                    id="one"
                    maxLength="1"
                    onKeyUp={moveCursorTo}
                    onKeyPress={valNum}
                    ref={refOne}
                  />
                  <input
                    onChange={handleChange}
                    className={
                      "bg-[#222530] h-[48px] w-[48px] rounded-[8px] text-center"
                    }
                    value={code.two}
                    type="text"
                    name="two"
                    id="two"
                    maxLength="1"
                    onKeyUp={moveCursorTo}
                    onKeyPress={valNum}
                  />
                  <input
                    onChange={handleChange}
                    className={
                      "bg-[#222530] h-[48px] w-[48px] rounded-[8px] text-center"
                    }
                    value={code.three}
                    type="text"
                    name="three"
                    id="three"
                    maxLength="1"
                    onKeyUp={moveCursorTo}
                    onKeyPress={valNum}
                  />
                  <input
                    onChange={handleChange}
                    className={
                      "bg-[#222530] h-[48px] w-[48px] rounded-[8px] text-center"
                    }
                    value={code.four}
                    type="text"
                    name="four"
                    id="four"
                    maxLength="1"
                    onKeyUp={moveCursorTo}
                    onKeyPress={valNum}
                  />
                  <input
                    onChange={handleChange}
                    className={
                      "bg-[#222530] h-[48px] w-[48px] rounded-[8px] text-center"
                    }
                    value={code.five}
                    type="text"
                    name="five"
                    id="five"
                    maxLength="1"
                    onKeyUp={moveCursorTo}
                    onKeyPress={valNum}
                  />
                  <input
                    onChange={handleChange}
                    className={
                      "bg-[#222530] h-[48px] w-[48px] rounded-[8px] text-center"
                    }
                    value={code.six}
                    type="text"
                    name="six"
                    id="six"
                    maxLength="1"
                    onKeyUp={moveCursorTo}
                    onKeyPress={valNum}
                  />
                  <input id="submit" type="submit" value="" hidden />
                </div>
              </form>
            </div>
          </div>
          <p className="mt-[18px] text-[14px] text-center font-[600] text-[#B5B9C8] ">
            {"Didn't recieve the OTP?"}

            <span
              onClick={resendOtp}
              className="text-white ml-1 cursor-pointer"
            >
              Resend
            </span>
          </p>

          <TButton
            disabledFn={disabledFn}
            mt={"35px"}
            label="Submit"
            loading={isLoading}
            clickFn={submitOtp}
          />
        </div>
      </div>
    </div>
  );
};

export default Otp;
