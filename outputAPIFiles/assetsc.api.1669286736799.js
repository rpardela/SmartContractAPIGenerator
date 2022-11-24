/* 
   Script generated automatically from the NPM smartcontract-api-generator package.

   Used contract: assetsc
   Package version: 0.8.0
   API framework: WEB3
   Date of file generation: 11/24/2022, 11:45:36 AM
*/ 

let Web3;
let Tx;
(async () => {
  Web3 = await import("web3");
  Tx = await import("@ethereumjs/tx").Transaction;
})();

const config = {
  bcRPCURL: "https://matic-mumbai.chainstacklabs.com",
  gasLimitFactor: 1.2,
  gasPriceFactor: 1.5,
  contractAddress: "SetContractAddress",
  ownerPrivateKey: "SetYourPrivateKey"
}
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_assetID","type":"uint256"},{"internalType":"uint256","name":"_maxShares","type":"uint256"},{"internalType":"uint256","name":"_fixPricePerShare","type":"uint256"}],"name":"addAsset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_assetID","type":"uint256"},{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"buyShares","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_assetID","type":"uint256"}],"name":"calcFreeShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_assetID","type":"uint256"}],"name":"getAsset","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"maxShares","type":"uint256"},{"internalType":"uint256","name":"fixPricePerShare","type":"uint256"}],"internalType":"struct AssetTest.Asset","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAssetsByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAssetsList","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_assetID","type":"uint256"}],"name":"getSharesPerAssets","outputs":[{"components":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"stakeholder","type":"address"}],"internalType":"struct AssetTest.AssetShare[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVersion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];
const web3Provider = new Web3(new Web3.providers.HttpProvider(config.bcRPCURL));
const contract = new web3Provider.eth.Contract(contractABI, config.contractAddress);
contract.setProvider(web3Provider);
web3Provider.eth.defaultAccount = web3Provider.eth.accounts.privateKeyToAccount(config.ownerPrivateKey)

/** 
 *  Function ( nonpayable ): addAsset
 *  @param { string } _name
 *  @param { uint256 } _assetID
 *  @param { uint256 } _maxShares
 *  @param { uint256 } _fixPricePerShare
 */
const addAsset = async (_name,_assetID,_maxShares,_fixPricePerShare) => {

  let gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.methods.addAsset(_name,_assetID,_maxShares,_fixPricePerShare).estimateGas();
  let gas = Math.round(estGas * config.gasLimitFactor);
let txBuilder = contract.methods.addAsset(_name,_assetID,_maxShares,_fixPricePerShare);
let encodedTx = txBuilder.encodeABI();
 let rawTx = {
   gasPrice: gasPrice,
   gas: gas,
   data: encodedTx,
   to: config.contractAddress
 };

let tx = new Tx(rawTx);
let signedTx = tx.sign(config.ownerPrivateKey);
let serializedTx = signedTx.serialize();  return new Promise((resolve, reject) => {
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
 *  Function ( payable ): buyShares
 *  @param { uint256 } _assetID
 *  @param { uint256 } _shares
 *  @returns { Promise<bytes32> } 
 */
const buyShares = async (_assetID,_shares) => {

  let gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.methods.buyShares(_assetID,_shares).estimateGas();
  let gas = Math.round(estGas * config.gasLimitFactor);
let txBuilder = contract.methods.buyShares(_assetID,_shares);
let encodedTx = txBuilder.encodeABI();
 let rawTx = {
   gasPrice: gasPrice,
   gas: gas,
   data: encodedTx,
   to: config.contractAddress
 };

let tx = new Tx(rawTx);
let signedTx = tx.sign(config.ownerPrivateKey);
let serializedTx = signedTx.serialize();  return new Promise((resolve, reject) => {
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
 *  Function ( view ): calcFreeShares
 *  @param { uint256 } _assetID
 *  @returns { Promise<uint256> } 
 */
const calcFreeShares = (_assetID) => {
  return new Promise((resolve, reject) => {
    contract.methods.calcFreeShares(_assetID).call()
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
 *  Function ( view ): getAsset
 *  @param { uint256 } _assetID
 *  @returns { Promise<tuple> } 
 */
const getAsset = (_assetID) => {
  return new Promise((resolve, reject) => {
    contract.methods.getAsset(_assetID).call()
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
 *  Function ( view ): getAssetsByIndex
 *  @param { uint256 } index
 *  @returns { Promise<uint256> } 
 */
const getAssetsByIndex = (index) => {
  return new Promise((resolve, reject) => {
    contract.methods.getAssetsByIndex(index).call()
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
 *  Function ( view ): getAssetsList
 *  @returns { Promise<uint256[]> } 
 */
const getAssetsList = () => {
  return new Promise((resolve, reject) => {
    contract.methods.getAssetsList().call()
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
 *  Function ( view ): getBalance
 *  @returns { Promise<uint256> } 
 */
const getBalance = () => {
  return new Promise((resolve, reject) => {
    contract.methods.getBalance().call()
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
 *  Function ( view ): getContractOwner
 *  @returns { Promise<address> } 
 */
const getContractOwner = () => {
  return new Promise((resolve, reject) => {
    contract.methods.getContractOwner().call()
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
 *  Function ( view ): getSharesPerAssets
 *  @param { uint256 } _assetID
 *  @returns { Promise<tuple[]> } 
 */
const getSharesPerAssets = (_assetID) => {
  return new Promise((resolve, reject) => {
    contract.methods.getSharesPerAssets(_assetID).call()
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
 *  Function ( pure ): getVersion
 *  @returns { Promise<string> } 
 */
const getVersion = () => {
  return new Promise((resolve, reject) => {
    contract.methods.getVersion().call()
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

export default {
addAsset,
buyShares,
calcFreeShares,
getAsset,
getAssetsByIndex,
getAssetsList,
getBalance,
getContractOwner,
getSharesPerAssets,
getVersion
};

export {
addAsset,
buyShares,
calcFreeShares,
getAsset,
getAssetsByIndex,
getAssetsList,
getBalance,
getContractOwner,
getSharesPerAssets,
getVersion
};