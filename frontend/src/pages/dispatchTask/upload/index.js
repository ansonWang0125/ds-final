import { useState } from "react";
import { ConnectWalletButton } from "@components";
import Web3 from "web3";

export default function Upload() {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const onPressConnect = async () => {
    setLoading(true);

    try {
      if (window && window.ethereum && window.ethereum.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  const onPressLogout = () => setAddress("");
  return (
    <div className="flex flex-row items-center justify-center gap-[60px] w-full h-screen">
      <ConnectWalletButton
        onPressConnect={onPressConnect}
        onPressLogout={onPressLogout}
        loading={loading}
        address={address}
      />
      Upload
    </div>
  );
}
