# Description

If you plan to interact with a smart contract you need an interface that will enable you to use the functions implemented in the smart contract in software.

This package enables you to generate an API for the smart contract based on your ABI configuration.

When you call the generator, you will get a complete library that allows you to interact with all the functions available in the smart contract.

Since version 1.1, smartcontract events are also supported, which you can subscribe to. For this reason, we use a WebSocket connection instead of JSON RPC. Remember to provide a valid address for the websocket connection 'wss://'

# <br> Prerequisites

Currently, this package creates a module for the 'ethers.js' or 'web3.js' library. This means that you should have 'ethers' or 'web3' installed in your environment. <br>
For 'web3' keep other libraries in mind as well: @ethereumjs/tx, @ethereumjs/common

# <br>Installation

`npm i smartcontract-api-generator`

# <br>Usage

Create a new generator file (similar to the demo.js file presented in the following section), and then edit this file according to the list below.<br>

1. Import the library:<br>
   `import apiGen from 'smartcontract-api-generator'`

2. Configure the generator:<br>
   Get smartcontract's abi from file.
   <br>
   `let contractABI = JSON.parse(fs.readFileSync('./erc721demo.abi').toString());`
   <br><br>
   Set generator options
   <br>

   ```
   apiGen.scAPIGenerator({
    name: 'ERC721Demo',
    abi: contractABI,
    address: 'SetContractAddress',
    ownerPrivateKey: 'SetYourPrivateKey',
   }, {
    chain: 'Mainnet',
    URL: 'wss://eth-mainnet.g.alchemy.com/',
    gasLimitFactor: 1.2,
    gasPriceFactor: 1.5,
   }, { apiFramework: 'WEB3' });
   ```

   **parameters:** <br>
   Smartcontract configuration:<br>
   _name_ - name of smartcontract.<br>
   _abi_ - ABI file content (array)<br>
   _address_ - address of smartcontract on the blockchain network<br>
   _ownerPrivateKey_ - specify the private key of your account. You will need it for sign functions that change the state of the smart contract. If you have privacy concerns then you can insert any string here, and the correct value will be set in the generated API module (if you need it). **The private key is not transmitted anywhere and is used locally to sign transactions, e.g. minting a new token.** <br>
   <br>
   Blockchain network configuration:<br>
   _chain_ - The web3 library requires the inception of the Blockchain network on which smartcontract is deployed. Options available: Mainnet, Rinkeby, Goerli, Kovan, Ropsten, ArbitrumRinkebyTestnet, PolygonMainnet, PolygonMumbai, xDaiChain<br>
   _URL_ - websocket network address<br>
   _gasLimitFactor_ - you can set the multiplier for the limit of gas consumed for the smart contract function running. E.g., a value of 1.2 means increasing the maximum gas limit by 20% <br>
   _gasPriceFactor_ - you can set the multiplier for the gas price, which will be used when the smart contract function is called. Increasing this parameter allows you to set a higher priotity for this transaction. E.g., a value of 1.5 means increasing the price of gas by 50%<br>
   <br>**config** - You can specify an optional configuration as the third parameter of the call:<br>
   _outputScriptsPath_ - path to the folder where the output scripts will be saved<br>
   _apiFramework_ - A library that supports communication with the blockchain network. Available options: WEB3, ETHERS (default). Ensure that the selected library is installed in your environment<br>

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
    name: 'ERC721Demo',
    abi: contractABI,
    address: 'SetContractAddress',
    ownerPrivateKey: 'SetYourPrivateKey',
}, {
    chain: 'Mainnet',
    URL: 'wss://eth-mainnet.g.alchemy.com/',
    gasLimitFactor: 1.2,
    gasPriceFactor: 1.5,
}, { apiFramework: 'ETHERS' });
```

<br>**Result (generated script) for 'ethers' framework**

```
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

# <br> How to use this module with HardHat?

<br>Import HardHat module
<br>`const hre = require("hardhat");`

<br>Connect to your smartcontract
<br>`const scName = await hre.ethers.getContractFactory("<YourSCName>");`

<br>Use generator
<br>**Note another way of passing abi to the generator. Here we use the smartcontract interface known from the ethers.js library**
<br>

```
(async () => {
        const apiGen = await import('smartcontract-api-generator');
        apiGen.scAPIGenerator({
            name: 'YourSCName',
            abi: Object.entries(scName.interface.functions).map(el => el[1]),
            address: 'SetContractAddress',
            ownerPrivateKey: 'SetYourPrivateKey',
        }, {
            chain: 'Chain name',
            URL: 'Network address',
            gasLimitFactor: 1.2,
            gasPriceFactor: 1.5,
        }, {});
    })()
```

# <br>Problems

This is the early version of the project and although it has been tested you are likely to encounter problems. <br>
Let me know if you encounter any problems other than those described below or have ideas for changes to the module.

1. Error 'Invalid sender'. Occurs if an incorrect Blockchain network name has been entered or smartcontract has not been deployed on the entered network.

# <br> Collaboration

If you already have your public projects, have ideas for development and would like to develop this package then I encourage you to collaborate.
