import React, { useContext, useState, useMemo, useCallback } from "react";

const IsLoginContext = React.createContext({
  isLogin: false,
  changeIsLogin: () => {},
});

function IsLoginContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const changeIsLogin = useCallback((input) => {
    setIsLogin(input);
  }, []);

  const contextValue = useMemo(() => {
    return { isLogin, changeIsLogin };
  }, [isLogin, changeIsLogin]);

  return <IsLoginContext.Provider value={contextValue}>{children}</IsLoginContext.Provider>;
}

const UseIsLoginContext = () => {
  return useContext(IsLoginContext);
};

export { IsLoginContextProvider, UseIsLoginContext };
