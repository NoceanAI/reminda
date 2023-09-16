"use client";
import { useRouter } from "next/navigation";
import React from "react";
import InputComponent from "../components/InputComponent";
import Logo from "../components/Logo";
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
          <h1 className="text-[#101729] text-[20px] text-center font-[700]">
            Forgot Password
          </h1>
          <p className="text-[#677489] text-[13px] font-[400] mt-[9px]">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <form className="my-[24px]">
            <InputComponent
              label="Email"
              name={"email"}
              placeholder="Enter your email address"
            />
            <div className="mt-[30px]">
              <TButton
                clickFn={(e) => {
                  e.preventDefault();
                  nav.push("/forgot-password-confirm");
                }}
                label="Continue"
              />
            </div>
          </form>
          <div className="text-center mb-[25px]">
            <span
              onClick={() => nav.push("/login")}
              className="text-[#2C44EC] cursor-pointer text-[12px] font-[400] mr-0"
            >
              Return to Log in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgotPassword;
