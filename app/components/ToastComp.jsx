import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastComp = ({ children }) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};

export default ToastComp;
