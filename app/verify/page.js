"use client";
import React, { useState } from "react";
import Otp from "../components/Otp";

const Verify = () => {
  const [bg, setBg] = useState(false);
  console.log(bg);
  return (
    <div
      className={`bg-[${
        !bg ? "#fff" : "#2C44EC"
      }] min-h-screen w-full flex justify-center items-center`}
    >
      <Otp disabled={(e) => setBg(e)} />
    </div>
  );
};

export default Verify;
