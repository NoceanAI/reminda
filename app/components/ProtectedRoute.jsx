import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = sessionStorage.getItem("etiabaAuthToken");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  
  if (isLoggedIn) {
    return <Outlet />;
  }
};
export default ProtectedRoute;
