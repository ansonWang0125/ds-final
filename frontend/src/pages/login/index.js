import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAddressContext } from "@context/addressCtx";
import { UseIsLoginContext } from "@context/isLoginCtx";
import { Button } from "@mui/material";
import Web3 from "web3";
import { MetaLogo, IconTextButton } from "@components";
import detectEthereumProvider from "@metamask/detect-provider";

function Login() {
  const [loading, setLoading] = useState(false);
  const { changeAddress } = UseAddressContext();
  const { changeIsLogin } = UseIsLoginContext();
  const navigate = useNavigate();

  const onPressConnect = async () => {
    setLoading(true);

    const provider = await detectEthereumProvider();

    try {
      if (window && window.ethereum && window.ethereum.isMetaMask && provider) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        changeAddress(account);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    changeIsLogin(true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col gap-[10px] items-center justify-between">
          {!loading ? (
            <IconTextButton
              icon={<MetaLogo />}
              text=" Connect Wallet"
              variant="outlined"
              onClick={onPressConnect}
              sx={{ width: "100%", maxWidth: "300px" }}
            />
          ) : (
            <Button variant="outlined" sx={{ width: "100%", maxWidth: "300px" }}>
              Loading...
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
