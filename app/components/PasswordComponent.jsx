"use client";
import { Eye, EyeSlash } from "iconsax-react";
import React, { useState } from "react";

const PasswordComponent = ({ onChange, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative h-[48px]">
      <input
        className="bg-[#787D8E60] placeholder:text-sm rounded-[8px]  h-[48px] w-[312px] mt-[24px] text-[14px] max-h-[42px] min-w-full text-[#787D8E]  outline-[#52525269] outline-1 px-4 border-0"
        autoComplete="nope"
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        disabled={disabled}
      />
      {showPassword ? (
        <EyeSlash
          className="absolute right-1 top-[30px]"
          color="#787D8E"
          onClick={() => !disabled && setShowPassword(false)}
        />
      ) : (
        <Eye
          color="#787D8E"
          className="absolute right-1 top-[30px]"
          onClick={() => !disabled && setShowPassword(true)}
        />
      )}
    </div>
  );
};

export default PasswordComponent;
