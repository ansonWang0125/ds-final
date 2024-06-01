import { Button } from "@mui/material";
import MetaLogo from "../metaLogo";
import IconTextButton from "../iconTextButton";

function ConnectWalletButton({ onPressLogout, onPressConnect, loading, address }) {
  let buttonContent;

  if (address && !loading) {
    buttonContent = (
      <Button variant="outlined" onClick={onPressLogout} sx={{ width: "100%", maxWidth: "300px" }}>
        Disconnect
      </Button>
    );
  } else if (loading) {
    buttonContent = (
      <Button variant="outlined" sx={{ width: "100%", maxWidth: "300px" }}>
        Loading...
      </Button>
    );
  } else {
    buttonContent = (
      <IconTextButton
        icon={<MetaLogo />}
        text=" Connect Wallet"
        variant="outlined"
        onClick={onPressConnect}
        sx={{ width: "100%", maxWidth: "300px" }}
      />
    );
  }

  return <div className="w-[100%]">{buttonContent}</div>;
}

export default ConnectWalletButton;
