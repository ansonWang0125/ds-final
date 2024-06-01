import React, { useContext, useState, useMemo, useCallback } from "react";

const AddressContext = React.createContext({
  address: "",
  changeAddress: () => {},
});

function AddressContextProvider({ children }) {
  const [address, setAddress] = useState("");
  const changeAddress = useCallback((input) => {
    setAddress(input);
  }, []);

  const contextValue = useMemo(() => {
    return { address, changeAddress };
  }, [address, changeAddress]);

  return <AddressContext.Provider value={contextValue}>{children}</AddressContext.Provider>;
}

const UseAddressContext = () => {
  return useContext(AddressContext);
};

export { AddressContextProvider, UseAddressContext };
