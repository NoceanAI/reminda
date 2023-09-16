"use client";
import { useRouter } from "next/navigation";
import React from "react";
import InputComponent from "../components/InputComponent";
import Logo from "../components/Logo";
import PasswordComponent from "../components/PasswordComponent";
import TButton from "../components/TButton";

const forgotPassword = () => {
  const nav = useRouter();
  return (
    <div className="min-h-screen w-full justify-center items-center flex">
      <div>
        <div>
          <Logo />
        </div>
        <div
          style={{
            position: "relative",
            width: "359px",
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid #ddd",
          }}
          className="shadow-lg"
        >
          <h1 className="text-[#101729] text-center text-[20px] font-[700]">
            Forgot Password
          </h1>
          <p className="text-[#677489] text-[13px] font-[400] mt-[9px]">
            Enter the code sent your email address and your new password
          </p>

          <form className="my-[24px]">
            <InputComponent
              label="Code"
              name={"code"}
              placeholder="Enter your 6 digit code"
            />
            <PasswordComponent />
            <div className="mt-[30px]">
              <TButton
                clickFn={(e) => {
                  e.preventDefault();
                  nav.push("/login");
                }}
                label="Continue"
              />
            </div>
          </form>
          <div className="text-center mb-[25px]">
            <span
              // onClick={() => nav.push("/login")}
              className="text-[#2C44EC] cursor-pointer text-[12px] font-[400] mr-0"
            >
              Click here to Resend
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgotPassword;
