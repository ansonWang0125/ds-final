import Web3 from "web3";

const signup = async () => {
  let account;
  try {
    if (window && window.ethereum && window.ethereum.isMetaMask) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      account = Web3.utils.toChecksumAddress(accounts[0]);
      return account;
    }
  } catch (error) {
    console.log(error);
  }
  return account;
};

export default signup;
