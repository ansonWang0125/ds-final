import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UseUserDataContext } from "@context/userDataCtx";
import Loading from "pages/loading";
import isDataLogin from "functions/util";

export default function LoginRoutes({ children }) {
  const { userData } = UseUserDataContext();
  const [isLogin, setIsLogin] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    if (isDataLogin(userData)) {
      setIsLogin(true);
    }
    const timer = setTimeout(() => {
      if (isDataLogin(userData)) {
        setIsLogin(true);
      } else if (!isLogin) {
        setIsTimeout(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [userData, isLogin]);

  if (!isLogin && !isTimeout) {
    return <Loading />;
  }

  return isLogin ? children : <Navigate to="/login" />;
}
