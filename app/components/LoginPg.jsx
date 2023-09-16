"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import InputComponent from "./InputComponent";
import Logo from "./Logo";
import PasswordComponent from "./PasswordComponent";
import TButton from "./TButton";

const LoginPg = () => {
  const nav = useRouter();
  return (
    <div className="min-h-screen w-full flex bg-[#2C44EC] md:bg-[#f9fafc]">
      <div className="w-full lg:w-1/2 min-h-screen hidden lg:block md:relative ">
        <Image
          src={require("../assets/images/lhsBg.png")}
          className="absolute z-0 min-h-full "
        />
        <div className="z-10 min-h-screen w-full relative flex justify-center items-center">
          <div className="absolute top-1 right-9">
            <Logo />
          </div>
          <div className="w-[456px] text-center">
            <h1 className="text-center text-white text-[40px] font-[600]">
              Welcome !
            </h1>
            <p className="mt-[5px] w-[406px]  text-white text-[22px] font-[500] leading-[normal] text-center">
              Enter your personal details and start a journey with us.
            </p>
            <button
              onClick={() => nav.push("sign-up")}
              className="h-[45px] w-[202px] border border-[#fff] text-white rounded-[6px] mt-[31px] hover:bg-slate-900 hover:border-0"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-[80%] md:w-[456px] bg-white rounded-[20px] shadow-lg py-[55px] px-[62px]">
          <h1 className="text-[#101729] text-[28px] font-[700]">Login</h1>
          <p className="text-[#97A3B6] text-[15px] font-[500] mt-[4px]">
            Welcome back! Please enter your details.
          </p>

          <form className="mt-[51px]">
            <InputComponent
              placeholder={"Enter your email address"}
              label="Email"
              name={"email"}
            />
            <PasswordComponent label="Password" name="password" />
            <div className="text-right mb-[25px]">
              <span
                onClick={() => nav.push("/forgot-password")}
                className="text-[#2C44EC] cursor-pointer text-[12px] font-[400] mr-0"
              >
                Forgot password?
              </span>
            </div>

            <TButton
              disabledFn={() => {}}
              clickFn={(e) => {
                e.preventDefault();
                nav.push("/dashboard");
              }}
              label="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPg;
