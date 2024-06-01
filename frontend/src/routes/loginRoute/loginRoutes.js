import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UseIsLoginContext } from "@context/isLoginCtx";
import Loading from "pages/loading";

export default function LoginRoutes({ children }) {
  const { isLogin } = UseIsLoginContext();
  const [isLogined, setIsLogin] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    if (isLogin) {
      setIsLogin(true);
    }
    const timer = setTimeout(() => {
      if (isLogin) {
        setIsLogin(true);
      } else if (!isLogined) {
        setIsTimeout(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isLogined, isLogin]);

  if (!isLogined && !isTimeout) {
    return <Loading />;
  }

  return isLogined ? children : <Navigate to="/login" />;
}
