import React from "react";

const InputComponent = ({
  onChange,
  type = "text",
  placeholder,
  disabled,
  value,
}) => {
  return (
    <input
      className="bg-[#787D8E60] placeholder:text-sm rounded-[8px]  h-[48px] w-[312px] mt-[24px] text-[14px] max-h-[42px] min-w-full text-[#959bb0]  outline-[#52525269] outline-1 px-4 border-0 "
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      autoComplete="nope"
      onChange={onChange}
      value={value}
    />
  );
};

export default InputComponent;
