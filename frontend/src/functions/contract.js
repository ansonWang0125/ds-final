import Web3 from "web3";

const contractAddress = "0x2E983A1Ba5e8b38AAAeC4B440B9dDcFBf72E15d1";

export async function fetchClusters() {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch("/Scheduler.abi");
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, contractAddress);

  // call method
  // no gas fee so that we don't need to send the transaction.
  // get information from the blockchain directly.
  const getClusters = await contract.methods.getClusters().call();
  return getClusters;
}

export async function fetchAllTasks() {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch("/Scheduler.abi");
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, contractAddress);

  // call method
  // no gas fee so that we don't need to send the transaction.
  // get information from the blockchain directly.
  const getTasks = await contract.methods.getAllTasks().call();
  return getTasks;
}

export async function testEvent() {
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch("/Scheduler.abi");
  const abi = await response.json();
  const contract = new web3.eth.Contract(abi, contractAddress);
  await contract.methods.test().call();
  // const res = await contract.methods.registerCluster(1, 1).send({ from: contractAddress });
}

export async function fetchTasks(address) {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch("/Scheduler.abi");
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, contractAddress);

  // call method
  // no gas fee so that we don't need to send the transaction.
  // get information from the blockchain directly.
  const getTasks = await contract.methods.getTasks(address).call();
  return getTasks;
}

// how to use send function
export async function registerCluster() {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch("/Scheduler.abi");
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, contractAddress);

  // send method
  // we need to request the user to send the transaction.
  // because we need to modify the datas on the blockchaain so that the user need to pay some gas fee to the miners.
  const gpuId = 1;
  const clusterSize = 4;
  if (contractAddress) {
    const res = await contract.methods.registerCluster(gpuId, clusterSize).send({ from: contractAddress });
    console.log(res);
  } else {
    console.log("You need to link to Metamask first.");
  }
}

export async function registerTask(dataImageUrl, trainImageUrl, clusterIndex, gpuClusterSize, address) {
  // get web3 provider
  const web3 = new Web3(window.ethereum);

  // get ABI file to construct Contract object.
  const response = await fetch("/Scheduler.abi");
  const abi = await response.json();

  // construct Contract
  const contract = new web3.eth.Contract(abi, contractAddress);
  console.log("cluster index: ", clusterIndex);
  console.log("gpu cluster size: ", gpuClusterSize);

  if (address) {
    const res = await contract.methods
      .registerTaskWithConditions(dataImageUrl, trainImageUrl, clusterIndex, gpuClusterSize)
      .send({ from: address });
    if (res) return true;
    return false;
  }
  return false;
}

export async function taskEventLog() {
  const web3 = new Web3(window.ethereum);
  const response = await fetch("/Scheduler.abi");
  const abi = await response.json();
  const contract = new web3.eth.Contract(abi, contractAddress);
  console.log("before");
  const res = await contract.getPastEvents("TaskAccessed", {
    fromBlock: 0,
    toBlock: "latest",
  });
  console.log("res", res);
  console.log("after");
}
