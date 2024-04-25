import styles from "styles/connectWallet.module.css";

function ConnectWalletButton({ onPressLogout, onPressConnect, loading, address }) {
  let buttonContent;

  if (address && !loading) {
    buttonContent = (
      <button type="button" onClick={onPressLogout} className={styles["connect-wallet"]}>
        Disconnect
      </button>
    );
  } else if (loading) {
    buttonContent = (
      <button type="button" className={`${styles["connect-wallet"]} ${styles["connect-button-loading"]}`} disabled>
        <div>Loading...</div>
      </button>
    );
  } else {
    buttonContent = (
      <button type="button" onClick={onPressConnect} className={styles["connect-wallet"]}>
        Connect Wallet
      </button>
    );
  }

  return <div>{buttonContent}</div>;
}

export default ConnectWalletButton;
