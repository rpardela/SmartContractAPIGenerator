import fs from 'fs';
import apiGen from './dist/index.js';//'smartcontract-api-generator'; // or in dev './dist/index.js'

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

console.log(apiGen.getVersion());