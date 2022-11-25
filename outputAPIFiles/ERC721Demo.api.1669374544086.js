/* 
   Script generated automatically from the NPM smartcontract-api-generator package.

   Used contract: ERC721Demo
   Package version: 1.0.0
   API framework: WEB3
   Date of file generation: 11/25/2022, 12:09:04 PM
*/

let Web3;
let Tx;
let ethereumjs_common;

(async () => {
  Web3 = await import("web3");
  Tx = await import("@ethereumjs/tx").Transaction;
  ethereumjs_common = await import("@ethereumjs/common");
})();

const chain = "PolygonMumbai";
const Common = ethereumjs_common.default;
let common;

if (Object.values(ethereumjs_common.Chain).includes(chain)) {
  common = Common.custom(ethereumjs_common.Chain[chain])
} else if (ethereumjs_common.CustomChain[chain]) {
  common = Common.custom(ethereumjs_common.CustomChain[chain])
}

const config = {
  bcRPCURL: "https://matic-mumbai.chainstacklabs.com",
  gasLimitFactor: 1.2,
  gasPriceFactor: 1.5,
  contractAddress: "SetContractAddress",
  ownerPrivateKey: "SetYourPrivateKey"
}
const contractABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "string", "name": "uri", "type": "string" }], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const web3Provider = new Web3(new Web3.providers.HttpProvider(config.bcRPCURL));
const contract = new web3Provider.eth.Contract(contractABI, config.contractAddress);
contract.setProvider(web3Provider);
web3Provider.eth.defaultAccount = web3Provider.eth.accounts.privateKeyToAccount(config.ownerPrivateKey).address;

/** 
 *  Function ( nonpayable ): approve
 *  @param { address } to
 *  @param { uint256 } tokenId
 */
const approve = async (to, tokenId) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.approve(to, tokenId).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.approve(to, tokenId);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): balanceOf
 *  @param { address } owner
 *  @returns { Promise<uint256> } 
 */
const balanceOf = (owner) => {
  return new Promise((resolve, reject) => {
    contract.methods.balanceOf(owner).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): burn
 *  @param { uint256 } tokenId
 */
const burn = async (tokenId) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.burn(tokenId).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.burn(tokenId);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): getApproved
 *  @param { uint256 } tokenId
 *  @returns { Promise<address> } 
 */
const getApproved = (tokenId) => {
  return new Promise((resolve, reject) => {
    contract.methods.getApproved(tokenId).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): isApprovedForAll
 *  @param { address } owner
 *  @param { address } operator
 *  @returns { Promise<bool> } 
 */
const isApprovedForAll = (owner, operator) => {
  return new Promise((resolve, reject) => {
    contract.methods.isApprovedForAll(owner, operator).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): name
 *  @returns { Promise<string> } 
 */
const name = () => {
  return new Promise((resolve, reject) => {
    contract.methods.name().call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): owner
 *  @returns { Promise<address> } 
 */
const owner = () => {
  return new Promise((resolve, reject) => {
    contract.methods.owner().call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): ownerOf
 *  @param { uint256 } tokenId
 *  @returns { Promise<address> } 
 */
const ownerOf = (tokenId) => {
  return new Promise((resolve, reject) => {
    contract.methods.ownerOf(tokenId).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): pause
 */
const pause = async () => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.pause().estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.pause();
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): paused
 *  @returns { Promise<bool> } 
 */
const paused = () => {
  return new Promise((resolve, reject) => {
    contract.methods.paused().call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): renounceOwnership
 */
const renounceOwnership = async () => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.renounceOwnership().estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.renounceOwnership();
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): safeMint
 *  @param { address } to
 *  @param { uint256 } tokenId
 *  @param { string } uri
 */
const safeMint = async (to, tokenId, uri) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.safeMint(to, tokenId, uri).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.safeMint(to, tokenId, uri);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): safeTransferFrom_178
 *  Function duplicated. Smartcontract function name: safeTransferFrom
 *  @param { address } from
 *  @param { address } to
 *  @param { uint256 } tokenId
 */
const safeTransferFrom_178 = async (from, to, tokenId) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.safeTransferFrom(from, to, tokenId).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.safeTransferFrom(from, to, tokenId);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): safeTransferFrom_810
 *  Function duplicated. Smartcontract function name: safeTransferFrom
 *  @param { address } from
 *  @param { address } to
 *  @param { uint256 } tokenId
 *  @param { bytes } data
 */
const safeTransferFrom_810 = async (from, to, tokenId, data) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.safeTransferFrom(from, to, tokenId, data).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.safeTransferFrom(from, to, tokenId, data);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): setApprovalForAll
 *  @param { address } operator
 *  @param { bool } approved
 */
const setApprovalForAll = async (operator, approved) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.setApprovalForAll(operator, approved).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.setApprovalForAll(operator, approved);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): supportsInterface
 *  @param { bytes4 } interfaceId
 *  @returns { Promise<bool> } 
 */
const supportsInterface = (interfaceId) => {
  return new Promise((resolve, reject) => {
    contract.methods.supportsInterface(interfaceId).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): symbol
 *  @returns { Promise<string> } 
 */
const symbol = () => {
  return new Promise((resolve, reject) => {
    contract.methods.symbol().call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): tokenByIndex
 *  @param { uint256 } index
 *  @returns { Promise<uint256> } 
 */
const tokenByIndex = (index) => {
  return new Promise((resolve, reject) => {
    contract.methods.tokenByIndex(index).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): tokenOfOwnerByIndex
 *  @param { address } owner
 *  @param { uint256 } index
 *  @returns { Promise<uint256> } 
 */
const tokenOfOwnerByIndex = (owner, index) => {
  return new Promise((resolve, reject) => {
    contract.methods.tokenOfOwnerByIndex(owner, index).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): tokenURI
 *  @param { uint256 } tokenId
 *  @returns { Promise<string> } 
 */
const tokenURI = (tokenId) => {
  return new Promise((resolve, reject) => {
    contract.methods.tokenURI(tokenId).call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( view ): totalSupply
 *  @returns { Promise<uint256> } 
 */
const totalSupply = () => {
  return new Promise((resolve, reject) => {
    contract.methods.totalSupply().call()
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): transferFrom
 *  @param { address } from
 *  @param { address } to
 *  @param { uint256 } tokenId
 */
const transferFrom = async (from, to, tokenId) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.transferFrom(from, to, tokenId).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.transferFrom(from, to, tokenId);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): transferOwnership
 *  @param { address } newOwner
 */
const transferOwnership = async (newOwner) => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.transferOwnership(newOwner).estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.transferOwnership(newOwner);
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

/** 
 *  Function ( nonpayable ): unpause
 */
const unpause = async () => {

  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  const estGas = await contract.methods.unpause().estimateGas();
  const gasLimit = Math.round(estGas * config.gasLimitFactor);
  const txBuilder = contract.methods.unpause();
  const encodedTx = txBuilder.encodeABI();
  const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);
  const rawTx = {
    nonce: web3Provider.utils.toHex(count),
    gasPrice: gasPrice,
    gasLimit: gasLimit,
    data: encodedTx,
    to: config.contractAddress
  };

  const tx = new Tx(rawTx, { common });
  let privateKey = Buffer.from(config.ownerPrivateKey, "hex");
  const signedTx = tx.sign(privateKey);
  const serializedTx = signedTx.serialize();

  return new Promise((resolve, reject) => {
    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))
      .on("receipt", (receipt) => {
        console.log(receipt);
      })
      .on("confirmation", (confirmationNumber, receipt) => {
        console.log(receipt);
        console.log(confirmationNumber);
        resolve(receipt);
      })
      .on("error", (err) => {
        console.error(err);
        reject(err);
      })
  });
};

export default {
  approve,
  balanceOf,
  burn,
  getApproved,
  isApprovedForAll,
  name,
  owner,
  ownerOf,
  pause,
  paused,
  renounceOwnership,
  safeMint,
  safeTransferFrom_178,
  safeTransferFrom_810,
  setApprovalForAll,
  supportsInterface,
  symbol,
  tokenByIndex,
  tokenOfOwnerByIndex,
  tokenURI,
  totalSupply,
  transferFrom,
  transferOwnership,
  unpause
};

export {
  approve,
  balanceOf,
  burn,
  getApproved,
  isApprovedForAll,
  name,
  owner,
  ownerOf,
  pause,
  paused,
  renounceOwnership,
  safeMint,
  safeTransferFrom_178,
  safeTransferFrom_810,
  setApprovalForAll,
  supportsInterface,
  symbol,
  tokenByIndex,
  tokenOfOwnerByIndex,
  tokenURI,
  totalSupply,
  transferFrom,
  transferOwnership,
  unpause
};