import React from "react";

const TButton = ({
  disabledFn = () => {},
  clickFn = () => {},
  loading = false,
  label = "Click",
  mt,
  w = "full",
}) => {
  return (
    <button
      disabled={disabledFn() || loading}
      onClick={clickFn}
      className={`mt-[${mt}] hover:bg-[#2C44EC70] disabled:cursor-not-allowed disabled:opacity-80 text-[16px] h-[48px] w-${
        w === "full" ? "full" : "[" + w + "]"
      } text-[#fff] bg-[#2C44EC] rounded-[8px]`}
    >
      {label} {loading && ". . ."}
    </button>
  );
};

export default TButton;
