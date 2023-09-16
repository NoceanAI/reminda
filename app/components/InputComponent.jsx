import React from "react";

const InputComponent = ({
  onChange,
  type = "text",
  placeholder,
  disabled,
  value,
  label = "Field Label",
  name,
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-[13px] font-[600] text-[#20293A]">
        {label}
      </label>
      <input
        className="border-[#E3E8EF] placeholder:text-sm rounded-[8px]  h-[48px] w-[312px] mt-[9px] text-[14px] max-h-[42px] min-w-full text-[#959bb0]  outline-[#52525269] outline-1 px-4 border "
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        autoComplete="nope"
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default InputComponent;
