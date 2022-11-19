# Description

If you plan to interact with a smart contract you need an interface that will enable you to use the functions implemented in the smart contract in software.

This package enables you to generate an API for the smart contract based on your ABI configuration.

When you call the generator, you will get a complete library that allows you to interact with all the functions available in the smart contract.

# <br> Prerequisites

Currently, this package creates a module for the 'ethers.js' library. This means that you should have 'ethers' installed in your environment (there are plans to add support for the 'web3.js' library).

# <br>Installation

`npm i smartcontract-api-generator`

# <br>Usage

Create a new generator file (similar to the demo.js file presented in the following section), and then edit this file according to the list below.<br>

1. Import the library:<br>
   `import apiGen from 'smartcontract-api-generator'`

2. Configure the generator:<br>

   ```
   apiGen.scAPIGenerator({
    name: 'ERC721demo',
    abi: contractABI,
    address: 'SetContractAddress',
    ownerPrivateKey: 'SetYourPrivateKey',
   }, {
    RPCURL: 'https://matic-mumbai.chainstacklabs.com',
    gasLimitFactor: 1.2,
    gasPriceFactor: 1.5,
   }, {});
   ```

   **parameters:** <br>
   Smartcontract configuration:<br>
   _name_ - name of smartcontract.<br>
   _abi_ - ABI file content (array)<br>
   _address_ - address where smartcontract was deployed on the blockchain network<br>
   _ownerPrivateKey_ - specify the private key of your account. You will need it for calling functions that change the state of the smart contract. If you have privacy concerns then you can insert any string here, and the correct value will be set in the generated API module (if you need it).<br>
   <br>
   Blockchain network configuration:<br>
   _RPCURL_ - network address
   _gasLimitFactor_ - you can set the multiplier for the limit of gas consumed for the smart contract function running. E.g., a value of 1.2 means increasing the maximum gas limit by 20% <br>
   _gasPriceFactor_ - you can set the multiplier for the gas price, which will be used when the smart contract function is called. Increasing this parameter allows you to set a higher priotity for this transaction. E.g., a value of 1.5 means increasing the price of gas by 50%<br>
   <br>**config** - You can specify an optional configuration as the third parameter of the call:<br>
   _outputScriptsPath_ - path to the folder where the output scripts will be saved<br>
   _apiFramework_ - A library that supports communication with the blockchain network (currently only the 'ethers' library is available in the future it is planned to add support for the 'web3.js' library). Ensure that the selected library is installed in your environment<br>

3. Run js file with test generator<br>
   `node demo.js`

   After running, you will get a new <smartcontract name>.api.<timestamp>.js file in the _outputScriptsPath_ directory

# <br>Example

The _demo.js_ file contains a sample call to the script generator that runs for the erc721demo.abi file (erc721 smartcontract).

After running _demo.js_, a ./outputAPIFiles/ERC721demo.api.<timestamp>.js file will be generated

Now you can use generated module in your projects.

<br>**demo.js**

```
import fs from 'fs';
import apiGen from 'smartcontract-api-generator'

let contractABI = JSON.parse(fs.readFileSync('./erc721demo.abi').toString());

apiGen.scAPIGenerator({
    name: 'ERC721demo',
    abi: contractABI,
    address: 'SetContractAddress',
    ownerPrivateKey: 'SetYourPrivateKey',
}, {
    RPCURL: 'https://matic-mumbai.chainstacklabs.com',
    gasLimitFactor: 1.2,
    gasPriceFactor: 1.5,
}, {});
```

<br>**Result (generated script) for 'ethers' framework**

```
/*
   Script generated automatically from the NPM smartcontract-api-generator package.

   Used contract: ERC721demo
   Package version: 0.6.2
   API framework: ETHERS
   Date of file generation: 11/18/2022, 3:55:57 PM
*/

import { ethers } from "ethers";

const config = {
  bcRPCURL: "https://matic-mumbai.chainstacklabs.com",
  gasLimitFactor: 1.2,
  gasPriceFactor: 1.5,
  contractAddress: "SetContractAddress",
  ownerPrivateKey: "SetYourPrivateKey"
}
const contractABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "string", "name": "uri", "type": "string" }], "name": "safeMint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
const bcHttpProvider = new ethers.providers.JsonRpcProvider("https://matic-mumbai.chainstacklabs.com");
const wallet = new ethers.Wallet("SetYourPrivateKey", bcHttpProvider);
const contract = new ethers.Contract("SetContractAddress", contractABI, wallet);

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): approve
// --------------------------------------------------------------------------------------
const approve = async (to, tokenId) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.approve(to, tokenId);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.approve(to, tokenId,
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

// --------------------------------------------------------------------------------------
//  Function ( view ): balanceOf
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): burn
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): getApproved
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): isApprovedForAll
// --------------------------------------------------------------------------------------
const isApprovedForAll = (owner, operator) => {
  return new Promise((resolve, reject) => {
    contract.isApprovedForAll(owner, operator)
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

// --------------------------------------------------------------------------------------
//  Function ( view ): name
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): owner
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): ownerOf
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): pause
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): paused
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): renounceOwnership
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): safeMint
// --------------------------------------------------------------------------------------
const safeMint = async (to, tokenId, uri) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.safeMint(to, tokenId, uri);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.safeMint(to, tokenId, uri,
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): safeTransferFrom_662
//  Function duplicated. Oryginal function name: safeTransferFrom
// --------------------------------------------------------------------------------------
const safeTransferFrom_662 = async (from, to, tokenId) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.safeTransferFrom(from, to, tokenId);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.safeTransferFrom(from, to, tokenId,
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): safeTransferFrom_276
//  Function duplicated. Oryginal function name: safeTransferFrom
// --------------------------------------------------------------------------------------
const safeTransferFrom_276 = async (from, to, tokenId, data) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.safeTransferFrom(from, to, tokenId, data);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.safeTransferFrom(from, to, tokenId, data,
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): setApprovalForAll
// --------------------------------------------------------------------------------------
const setApprovalForAll = async (operator, approved) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.setApprovalForAll(operator, approved);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.setApprovalForAll(operator, approved,
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

// --------------------------------------------------------------------------------------
//  Function ( view ): supportsInterface
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): symbol
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): tokenByIndex
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): tokenOfOwnerByIndex
// --------------------------------------------------------------------------------------
const tokenOfOwnerByIndex = (owner, index) => {
  return new Promise((resolve, reject) => {
    contract.tokenOfOwnerByIndex(owner, index)
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

// --------------------------------------------------------------------------------------
//  Function ( view ): tokenURI
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( view ): totalSupply
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): transferFrom
// --------------------------------------------------------------------------------------
const transferFrom = async (from, to, tokenId) => {
  let function_result = "";
  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);
  let estGas = await contract.estimateGas.transferFrom(from, to, tokenId);
  let gas = Math.round(estGas * config.gasLimitFactor);
  await contract.transferFrom(from, to, tokenId,
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): transferOwnership
// --------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------
//  Function ( nonpayable ): unpause
// --------------------------------------------------------------------------------------
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
  safeTransferFrom_662,
  safeTransferFrom_276,
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
```

# <br> How to call the functions of the generated module?

`import api_bc from './outputAPIFiles/ERC721demo.api.1668783357508.js'`

```
api_bc.burn('tokenid')
  .then((ret) => {
    console.log(ret);
  })
  .catch(err => {
    console.error(err);
  })
```

# <br>Problems

This is the early version of the project and although it has been tested you are likely to encounter problems. <br>
Let me know if you encounter any problems other than those described below or have ideas for changes to the module.

# <br> Collaboration

If you already have your public projects, have ideas for development and would like to develop this package then I encourage you to collaborate.
