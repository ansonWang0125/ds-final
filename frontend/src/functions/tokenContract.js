import Web3 from "web3";

const tokenAddress = "0x2E983A1Ba5e8b38AAAeC4B440B9dDcFBf72E15d1";
const abiAddress = "/Token.abi";

export default async function fetchToken(address) {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch(abiAddress);
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, tokenAddress);
  if (address) {
    const res = await contract.methods.balanceOf(address).call();
    console.log(res);
    return res;
  }
  return 0;
}
