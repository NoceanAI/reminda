"use client";
import { Eye, EyeSlash } from "iconsax-react";
import React, { useState } from "react";

const PasswordComponent = ({
  onChange,
  disabled,
  label,
  name,
  mt = "24px",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`mt-[${mt}]`}>
      <label htmlFor={name} className="text-[13px] font-[600] text-[#20293A]">
        {label}
      </label>
      <div className="relative h-[48px]">
        <input
          className="border-[#E3E8EF] placeholder:text-sm rounded-[8px]  h-[48px] w-[312px] mt-[9px] text-[14px] max-h-[42px] min-w-full text-[#787D8E] border  outline-[#52525269] outline-1 px-4"
          autoComplete="nope"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          disabled={disabled}
          name={name}
        />
        {showPassword ? (
          <EyeSlash
            className="absolute right-1 top-[13px]"
            color="#787D8E"
            onClick={() => !disabled && setShowPassword(false)}
          />
        ) : (
          <Eye
            color="#787D8E"
            className="absolute right-1 top-[13px]"
            onClick={() => !disabled && setShowPassword(true)}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordComponent;
