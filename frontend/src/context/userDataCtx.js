import React, { useContext, useState, useEffect, useMemo, useCallback } from "react";
import { userAuth } from "functions/axiosApi";

const UserDataContext = React.createContext({
  userData: {},
  changeUserData: () => {},
});

function UserDataContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const changeUserData = useCallback((input) => {
    setUserData(input);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching");
        const response = await userAuth();
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const contextValue = useMemo(() => {
    return { userData, changeUserData };
  }, [userData, changeUserData]);

  return <UserDataContext.Provider value={contextValue}>{children}</UserDataContext.Provider>;
}

const UseUserDataContext = () => {
  return useContext(UserDataContext);
};

export { UserDataContextProvider, UseUserDataContext };
