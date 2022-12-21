/* 
   Script generated automatically from the NPM smartcontract-api-generator package.

   Used contract: ERC721Demo
   Package version: 1.1.0
   API framework: ETHERS
   Date of file generation: 12/21/2022, 1:23:16 PM
*/ 

import { ethers } from "ethers";

const config = {
  bcURL: "wss://eth-mainnet.g.alchemy.com/",
  gasLimitFactor: 1.2,
  gasPriceFactor: 1.5,
  contractAddress: "SetContractAddress",
  ownerPrivateKey: "SetYourPrivateKey"
}

const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const bcHttpProvider = new ethers.providers.WebSocketProvider(config.bcURL);
const wallet = new ethers.Wallet(config.ownerPrivateKey, bcHttpProvider);
const contract = new ethers.Contract(config.contractAddress, contractABI, wallet);

/** 
 *  Event : Approval
 *  @param { address } owner
 *  @param { address } approved
 *  @param { uint256 } tokenId
 */
const Approval = () => {

  contract.on("Approval", (owner,approved,tokenId) => {
    console.log("Event: Approval")
    console.log(owner); 
    console.log(approved); 
    console.log(tokenId); 
  });

};

/** 
 *  Event : ApprovalForAll
 *  @param { address } owner
 *  @param { address } operator
 *  @param { bool } approved
 */
const ApprovalForAll = () => {

  contract.on("ApprovalForAll", (owner,operator,approved) => {
    console.log("Event: ApprovalForAll")
    console.log(owner); 
    console.log(operator); 
    console.log(approved); 
  });

};

/** 
 *  Event : OwnershipTransferred
 *  @param { address } previousOwner
 *  @param { address } newOwner
 */
const OwnershipTransferred = () => {

  contract.on("OwnershipTransferred", (previousOwner,newOwner) => {
    console.log("Event: OwnershipTransferred")
    console.log(previousOwner); 
    console.log(newOwner); 
  });

};

/** 
 *  Event : Paused
 *  @param { address } account
 */
const Paused = () => {

  contract.on("Paused", (account) => {
    console.log("Event: Paused")
    console.log(account); 
  });

};

/** 
 *  Event : Transfer
 *  @param { address } from
 *  @param { address } to
 *  @param { uint256 } tokenId
 */
const Transfer = () => {

  contract.on("Transfer", (from,to,tokenId) => {
    console.log("Event: Transfer")
    console.log(from); 
    console.log(to); 
    console.log(tokenId); 
  });

};

/** 
 *  Event : Unpaused
 *  @param { address } account
 */
const Unpaused = () => {

  contract.on("Unpaused", (account) => {
    console.log("Event: Unpaused")
    console.log(account); 
  });

};

/** 
 *  Function ( nonpayable ): approve
 *  @param { address } to
 *  @param { uint256 } tokenId
 */
const approve = async (to,tokenId) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.approve(to,tokenId);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.approve(to,tokenId,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( view ): balanceOf
 *  @param { address } owner
 *  @returns { Promise<uint256> } 
 */
const balanceOf = (owner) => {
  return new Promise((resolve, reject) => {
    contract.balanceOf(owner)
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
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.burn(tokenId);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.burn(tokenId,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( view ): getApproved
 *  @param { uint256 } tokenId
 *  @returns { Promise<address> } 
 */
const getApproved = (tokenId) => {
  return new Promise((resolve, reject) => {
    contract.getApproved(tokenId)
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
const isApprovedForAll = (owner,operator) => {
  return new Promise((resolve, reject) => {
    contract.isApprovedForAll(owner,operator)
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
    contract.name()
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
    contract.owner()
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
    contract.ownerOf(tokenId)
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
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.pause();
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.pause(
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( view ): paused
 *  @returns { Promise<bool> } 
 */
const paused = () => {
  return new Promise((resolve, reject) => {
    contract.paused()
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
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.renounceOwnership();
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.renounceOwnership(
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( nonpayable ): safeMint
 *  @param { address } to
 *  @param { uint256 } tokenId
 *  @param { string } uri
 */
const safeMint = async (to,tokenId,uri) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.safeMint(to,tokenId,uri);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.safeMint(to,tokenId,uri,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( nonpayable ): safeTransferFrom_772
 *  Function duplicated. Smartcontract function name: safeTransferFrom
 *  @param { address } from
 *  @param { address } to
 *  @param { uint256 } tokenId
 */
const safeTransferFrom_772 = async (from,to,tokenId) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.safeTransferFrom(from,to,tokenId);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.safeTransferFrom(from,to,tokenId,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( nonpayable ): safeTransferFrom_341
 *  Function duplicated. Smartcontract function name: safeTransferFrom
 *  @param { address } from
 *  @param { address } to
 *  @param { uint256 } tokenId
 *  @param { bytes } data
 */
const safeTransferFrom_341 = async (from,to,tokenId,data) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.safeTransferFrom(from,to,tokenId,data);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.safeTransferFrom(from,to,tokenId,data,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( nonpayable ): setApprovalForAll
 *  @param { address } operator
 *  @param { bool } approved
 */
const setApprovalForAll = async (operator,approved) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.setApprovalForAll(operator,approved);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.setApprovalForAll(operator,approved,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( view ): supportsInterface
 *  @param { bytes4 } interfaceId
 *  @returns { Promise<bool> } 
 */
const supportsInterface = (interfaceId) => {
  return new Promise((resolve, reject) => {
    contract.supportsInterface(interfaceId)
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
    contract.symbol()
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
    contract.tokenByIndex(index)
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
const tokenOfOwnerByIndex = (owner,index) => {
  return new Promise((resolve, reject) => {
    contract.tokenOfOwnerByIndex(owner,index)
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
    contract.tokenURI(tokenId)
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
    contract.totalSupply()
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
const transferFrom = async (from,to,tokenId) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.transferFrom(from,to,tokenId);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.transferFrom(from,to,tokenId,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( nonpayable ): transferOwnership
 *  @param { address } newOwner
 */
const transferOwnership = async (newOwner) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.transferOwnership(newOwner);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.transferOwnership(newOwner,
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

/** 
 *  Function ( nonpayable ): unpause
 */
const unpause = async () => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.unpause();
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.unpause(
      {
         gasPrice: gasPrice,
         gasLimit: gas
      })
      .then(async (result) => {
        await result.wait(1)
          .then((res) => {
            console.log(res);
            function_result = res;
          })
          .catch(err => {
            console.error(err);
            throw (err);
          })
      })
      .catch((err) => {
        console.error(err);
        throw (err);
      });

  return function_result;

};

export default {
Approval,
ApprovalForAll,
OwnershipTransferred,
Paused,
Transfer,
Unpaused,
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
safeTransferFrom_772,
safeTransferFrom_341,
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
Approval,
ApprovalForAll,
OwnershipTransferred,
Paused,
Transfer,
Unpaused,
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
safeTransferFrom_772,
safeTransferFrom_341,
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