"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import InputComponent from "../components/InputComponent";
import Logo from "../components/Logo";
import PasswordComponent from "../components/PasswordComponent";
import TButton from "../components/TButton";

const SignUp = () => {
  const nav = useRouter();
  return (
    <div className="min-h-screen w-full flex bg-[#2C44EC] md:bg-[#f9fafc]">
      <div className="w-full lg:w-[40%] flex items-center justify-center">
        <div className="w-[80%] md:w-[456px] bg-white rounded-[20px] shadow-lg py-[55px] px-[62px]">
          <h1 className="text-[#101729] text-[28px] font-[700]">Signup</h1>

          <form className="mt-[45px]">
            <InputComponent
              placeholder={"First Name"}
              label="First Name"
              name={"firstname"}
            />
            <InputComponent
              placeholder={"Last Name"}
              label="Last Name"
              name={"lastname"}
            />
            <InputComponent
              placeholder={"Enter your email address"}
              label="Email"
              name={"email"}
            />
            <PasswordComponent label="Password" name="password" />
            <div className="text-left mb-[25px] w-full">
              <span className="text-[#7C7C7C] text-[10px] font-[400] mr-0 leading-3">
                Password must include capital letter, small letter, special
                character and be up to 8 characters
              </span>
            </div>

            <TButton
              disabledFn={() => {}}
              clickFn={(e) => {
                e.preventDefault();
                nav.push("/verify");
              }}
              label="Signup"
            />
          </form>
        </div>
      </div>
      <div className="w-full lg:w-[60%] min-h-screen hidden lg:block md:relative overflow-y-hidden">
        <Image
          src={require("../assets/images/rhsBg.png")}
          className="absolute z-0 min-h-full "
        />
        <div className="z-10 min-h-screen w-full relative flex justify-center items-center">
          <div className="absolute top-1 left-9">
            <Logo />
          </div>
          <div className="w-[446px] text-center">
            <h1 className="text-center text-white text-[40px] font-[600]">
              Already have an account
            </h1>
            <p className="mt-[5px] w-[376px]  mx-auto text-white text-[22px] font-[500] leading-[normal] text-center">
              To keep connected with us log in with you personal info.
            </p>
            <button
              onClick={() => nav.push("login")}
              className="h-[45px] w-[202px] border border-[#fff] text-white rounded-[6px] mt-[31px] hover:bg-slate-900 hover:border-0"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
