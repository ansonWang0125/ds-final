import Web3 from "web3";

const tokenAddress = "0x663F3ad617193148711d28f5334eE4Ed07016602";
const contractAddress = "0x2E983A1Ba5e8b38AAAeC4B440B9dDcFBf72E15d1";
const abiAddress = "/Token.abi";

export async function fetchToken(address) {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch(abiAddress);
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, tokenAddress);
  if (address) {
    const res = await contract.methods.balanceOf(address).call();
    return res;
  }
  return 0;
}

export async function approveContract(address) {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch(abiAddress);
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, tokenAddress);
  if (address) {
    const res = await contract.methods.approve(contractAddress, BigInt(1000)).send({ from: address });
    return res;
  }
  return false;
}

export async function taskEventLog() {
  const web3 = new Web3(window.ethereum);
  const response = await fetch("/Token.abi");
  const abi = await response.json();
  const contract = new web3.eth.Contract(abi, tokenAddress);
  const res = await contract.getPastEvents("Transfer", {
    fromBlock: 0,
    toBlock: "latest",
  });
  console.log("res", res);
}
