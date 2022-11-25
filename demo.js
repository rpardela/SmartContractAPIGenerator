import fs from 'fs';
import apiGen from './dist/index.js';//'smartcontract-api-generator'; // or in dev './dist/index.js'

let contractABI = JSON.parse(fs.readFileSync('./erc721demo.abi').toString());

apiGen.scAPIGenerator({
    name: 'ERC721Demo',
    abi: contractABI,
    address: 'SetContractAddress',
    ownerPrivateKey: 'SetYourPrivateKey',
}, {
    chain: 'Mainnet',
    RPCURL: 'https://matic-mumbai.chainstacklabs.com',
    gasLimitFactor: 1.2,
    gasPriceFactor: 1.5,
}, {});// apiFramework: 'WEB3', 'ETHERS

console.log(apiGen.getVersion());