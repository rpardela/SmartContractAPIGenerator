import fs from 'fs';
import apiGen from './dist/index.js'

let contractABI = JSON.parse(fs.readFileSync('./erc721demo.abi').toString());

apiGen.scAPIGenerator({
    name: 'ERC721demo',
    abi: contractABI,
    address: 'SetContractAddress',
    ownerPrivateKey: 'SetYourPrivateKey',
    ownerAccount: 'SetYourWalletAccount',
}, {
    RPCURL: 'https://matic-mumbai.chainstacklabs.com',
    gasLimitFactor: 1.2,
    gasPriceFactor: 1.5,
}, {});

console.log(apiGen.getVersion());