import * as fs from 'fs';


let version = '0.8.0';
let name = 'SmartContractAPIGenerator';

enum PROVIDERS {
    ETHERS,
    WEB3
}

enum CHAIN {
    Mainnet,
    Rinkeby,
    Goerli,
    Kovan,
    Ropsten,
    arbitrum,
    polygonMainnet,
    polygonTest,
    xdai
}

type GeneratorOptions = {     
    apiFramework: PROVIDERS
    outputScriptsPath: string
}

type SmartContractConfig = {
    name: string;
    abi: [];
    address: string;
    ownerPrivateKey: string;
}

type BCNetworkConfig = {
    chain: CHAIN;
    RPCURL: string;    
    gasLimitFactor: number;
    gasPriceFactor: number;
}

let outputFileName: string = '';
let fileSuffix = '.' + Date.now() + '.js';
let defaultOutputScriptsPath = './outputAPIFiles/';
let defaultApiFramework = PROVIDERS.ETHERS;

let functionList: string = '';
/**
 * 
 * @param abiFilePath 
 * @param options 
 * @returns 
 */
const scAPIGenerator = (_scConfig: SmartContractConfig, _bcConfig: BCNetworkConfig, _options: GeneratorOptions) => {
    console.log('START API GENERATOR');

    let cfg: GeneratorOptions = _options;

    cfg.apiFramework = (_options?.apiFramework) ? _options.apiFramework : defaultApiFramework

    cfg.outputScriptsPath = (_options?.outputScriptsPath) ? _options.outputScriptsPath : defaultOutputScriptsPath
    if (!fs.existsSync(cfg.outputScriptsPath)) {
        fs.mkdirSync(cfg.outputScriptsPath);
    }

    outputFileName = cfg.outputScriptsPath + _scConfig.name + '.api' + fileSuffix;
    fs.rm(outputFileName, () => { }); // remove file if exists     

    
    
    generateAPIFile(_scConfig.abi, _scConfig, _bcConfig, cfg);
    console.log('FINISH API GENERATOR');
}

const getVersion = () => {
    return { name: name, version: version }
}

export default {
    scAPIGenerator,
    getVersion
}

export {
    scAPIGenerator,
    getVersion
}


/**
 * 
 * @param abi 
 * @param scConfig 
 * @param bcConfig 
 * @param config 
 */
const generateAPIFile = (abi, scConfig: SmartContractConfig, bcConfig: BCNetworkConfig, config: GeneratorOptions) => {
    saveHeader(config, scConfig);    

    saveApiConfig(config, scConfig, bcConfig, abi);
    
    abi.map((el) => {
        if (el.type === 'function') {
            let duplicated = abi.filter(el1 => el1.name === el.name).length;
            switch (el.stateMutability) {
                case 'view':
                case 'pure':
                    // version without gas estimation
                    saveNoGasFunction(config, el.name, el.stateMutability, duplicated, el.inputs, el.outputs);
                    break;
                case 'nonpayable':
                case 'payable':
                    // version with gas estimation
                    saveGasFunction(config, el.name, el.stateMutability, duplicated, el.inputs, el.outputs);
                    break;
                default:
                    break;
            }
        }
    });

    saveExportFunctions();
}

const saveHeader = (cfg: GeneratorOptions, scCfg: SmartContractConfig) => {
    fs.appendFileSync(outputFileName,
        '/* \n'
        + '   Script generated automatically from the NPM smartcontract-api-generator package.' + '\n\n'
        + '   Used contract: ' + scCfg.name + '\n'
        + '   Package version: ' + version + '\n'
        + '   API framework: ' + PROVIDERS[cfg.apiFramework] + '\n'        
        + '   Date of file generation: ' + new Date(Date.now()).toLocaleString() + '\n'
        + '*/ \n\n'
    );
}

const saveExportFunctions = () => {
    fs.appendFileSync(outputFileName,
        '\nexport default {'
        + functionList.substring(0, functionList.length - 1)
        + '\n};'
    );

    fs.appendFileSync(outputFileName,
        '\n\nexport {'
        + functionList.substring(0, functionList.length - 1)
        + '\n};'
    );
}

const saveApiConfig = (config: GeneratorOptions, scConfig: SmartContractConfig, bcConfig: BCNetworkConfig, abi: []) => {
    switch (config.apiFramework) {        
        case PROVIDERS.WEB3:
            console.log('web3');
            saveApiConfigWEB3(scConfig, bcConfig, abi);
            break;
        case PROVIDERS.ETHERS:
            console.log('ethers');
        default:
            saveApiConfigETHERS(scConfig, bcConfig, abi);
            break;
    }
}
const saveApiConfigETHERS = (scConfig: SmartContractConfig, bcConfig: BCNetworkConfig, abi: []) => {

    fs.appendFileSync(outputFileName, 'import { ethers } from "ethers";' + '\n');

    let sFuncStart: string = 
    '\nconst config = {' + '\n'
    + '  bcRPCURL: "' + bcConfig.RPCURL + '",' + '\n'
    + '  gasLimitFactor: ' + bcConfig.gasLimitFactor + ',' + '\n'
    + '  gasPriceFactor: ' + bcConfig.gasPriceFactor + ',' + '\n'
    + '  contractAddress: "' + scConfig.address + '",' + '\n'
    + '  ownerPrivateKey: "' + scConfig.ownerPrivateKey + '"' + '\n'
    ;    

    let sFuncFinish: string = '}' + '\n'

    fs.appendFileSync(outputFileName, sFuncStart);
    fs.appendFileSync(outputFileName, sFuncFinish);

    let sABI = '\const contractABI = ' + JSON.stringify(abi) + ';\n';
    fs.appendFileSync(outputFileName, sABI);

    let sHttpProvider = 'const bcHttpProvider = new ethers.providers.JsonRpcProvider(config.bcRPCURL);\n'
    fs.appendFileSync(outputFileName, sHttpProvider);

    let sWallet = 'const wallet = new ethers.Wallet(config.ownerPrivateKey, bcHttpProvider' + ');\n';        
    fs.appendFileSync(outputFileName, sWallet);

    let sContract = 'const contract = new ethers.Contract(config.contractAddress, contractABI, wallet' + ');\n';        
    fs.appendFileSync(outputFileName, sContract);
}

const saveApiConfigWEB3 = (scConfig: SmartContractConfig, bcConfig: BCNetworkConfig, abi: []) => {
    
    let importWeb3 = 
      'let Web3;' +'\n'
    + 'let Tx;' +'\n'
    + 'let ethereumjs_common;' + '\n'
    + '(async () => {' + '\n'
    + '  Web3 = await import("web3");' +'\n'
    + '  Tx = await import("@ethereumjs/tx").Transaction;' +'\n'
    + '  ethereumjs_common = await import("@ethereumjs/common");' + '\n'
    + '})();' + '\n';

    let chain = 
    'const Common = ethereumjs_common.default;' +'\n'
    + 'const common = Common.custom(ethereumjs_common.CustomChain.PolygonMumbai);' +'\n';

    fs.appendFileSync(outputFileName, importWeb3);
    
    let sFuncStart: string = 
    '\nconst config = {' + '\n'
    + '  bcRPCURL: "' + bcConfig.RPCURL + '",' + '\n'
    + '  gasLimitFactor: ' + bcConfig.gasLimitFactor + ',' + '\n'
    + '  gasPriceFactor: ' + bcConfig.gasPriceFactor + ',' + '\n'
    + '  contractAddress: "' + scConfig.address + '",' + '\n'
    + '  ownerPrivateKey: "' + scConfig.ownerPrivateKey + '"' + '\n'
    ;    

    let sFuncFinish: string = '}' + '\n'
    
    fs.appendFileSync(outputFileName, sFuncStart);
    fs.appendFileSync(outputFileName, sFuncFinish);

    let sABI = '\const contractABI = ' + JSON.stringify(abi) + ';\n';
    fs.appendFileSync(outputFileName, sABI);

    let sHttpProvider = 'const web3Provider = new Web3(new Web3.providers.HttpProvider(config.bcRPCURL));\n'
    fs.appendFileSync(outputFileName, sHttpProvider);

    let sContract = 'const contract = new web3Provider.eth.Contract(contractABI, config.contractAddress' + ');\n';        
    fs.appendFileSync(outputFileName, sContract);

    let contractProvider = 'contract.setProvider(web3Provider);\n';
    fs.appendFileSync(outputFileName, contractProvider);
    
    let contractAccount = 'web3Provider.eth.defaultAccount = web3Provider.eth.accounts.privateKeyToAccount(config.ownerPrivateKey).address;\n';
    fs.appendFileSync(outputFileName, contractAccount);
}

const parmsToString = (_parms) => {
    let toRet: string = '';

    _parms.map(el => {
        toRet += el.name + ',';
    })

    return toRet.substring(0, toRet.length - 1);
}

const setFunctionHeader = (_name: string, _stateMutalibility: string, _duplicated: number, _parmsIn:[], _parmsOut:[]): [string, string] => {
    let funcName = (_duplicated > 1)?_name + '_' + Math.floor(Math.random() * 1000) : _name;
    let scFunctionComment = 
        '\n/** \n' 
        + ' *  Function ( ' + _stateMutalibility + ' ): ' + funcName + '\n'        
    scFunctionComment += _duplicated > 1?' *  Function duplicated. Smartcontract function name: ' + _name + '\n':'';    
    _parmsIn.map((param: any) => {
        scFunctionComment += ' *  @param { ' + param.type + ' } ' + param.name + '\n';
    });
    _parmsOut.map((param: any) => {
        scFunctionComment += ' *  @returns { Promise<' + param.type + '> } ' + '\n';
    });
    scFunctionComment += ' */\n';

    return [scFunctionComment, funcName];
}

const saveNoGasFunction = (config: GeneratorOptions, _name: string, _stateMutability: string, _duplicated: number, _parmsIn:[], _parmsOut:[]) => {
    switch (config.apiFramework) {        
        case PROVIDERS.WEB3:
            console.log('web3');
            saveNoGasFunctionWEB3(_name, _stateMutability, _duplicated, _parmsIn, _parmsOut)
            break;
        case PROVIDERS.ETHERS:
            console.log('ethers');
        default:
            saveNoGasFunctionETHERS(_name, _stateMutability, _duplicated, _parmsIn, _parmsOut)
            break;
    }
};

const saveNoGasFunctionETHERS = (_name: string, _stateMutability: string, _duplicated: number, _parmsIn:[], _parmsOut:[]) => {
    // let funcName = (_duplicated > 1)?_name + '_' + Math.floor(Math.random() * 1000) : _name;    
    let parmsIn = parmsToString(_parmsIn);
    let info = setFunctionHeader(_name, _stateMutability, _duplicated, _parmsIn, _parmsOut);

    let scFunctionComment = info[0];
    let funcName = info[1];

    let scFunctionStart = 
        'const ' + funcName + ' = (' + parmsIn + ') => {' + '\n';
    let scFunctionEnd = '};' + '\n';

    let scFunctionBody = 
          '  return new Promise((resolve, reject) => {' + '\n'
        + '    contract.' + _name + '(' + parmsIn + ')' + '\n'
        + '      .then((result) => {' + '\n'
        + '        console.log(result);' + '\n'
        + '        resolve(result);' + '\n'
        + '      })' + '\n'
        + '      .catch((err) => {' + '\n'
        + '        console.error(err);' + '\n'
        + '        reject(err);' + '\n'
        + '      })' + '\n'
        + '  });' + '\n'        

        fs.appendFileSync(outputFileName, scFunctionComment);
        fs.appendFileSync(outputFileName, scFunctionStart);
        fs.appendFileSync(outputFileName, scFunctionBody);
        fs.appendFileSync(outputFileName, scFunctionEnd);

        functionList += '\n' + funcName + ',';
};

const saveNoGasFunctionWEB3 = (_name: string, _stateMutability: string, _duplicated: number, _parmsIn:[], _parmsOut:[]) => {
    let parmsIn = parmsToString(_parmsIn);
    let info = setFunctionHeader(_name, _stateMutability, _duplicated, _parmsIn, _parmsOut);

    let scFunctionComment = info[0];
    let funcName = info[1];

    let scFunctionStart = 
        'const ' + funcName + ' = (' + parmsIn + ') => {' + '\n';
    let scFunctionEnd = '};' + '\n';

    let scFunctionBody = 
          '  return new Promise((resolve, reject) => {' + '\n'
        + '    contract.methods.' + _name + '(' + parmsIn + ').call()' + '\n'
        + '      .then((result) => {' + '\n'
        + '        console.log(result);' + '\n'
        + '        resolve(result);' + '\n'
        + '      })' + '\n'
        + '      .catch((err) => {' + '\n'
        + '        console.error(err);' + '\n'
        + '        reject(err);' + '\n'
        + '      })' + '\n'
        + '  });' + '\n'        

        fs.appendFileSync(outputFileName, scFunctionComment);
        fs.appendFileSync(outputFileName, scFunctionStart);
        fs.appendFileSync(outputFileName, scFunctionBody);
        fs.appendFileSync(outputFileName, scFunctionEnd);

        functionList += '\n' + funcName + ',';
};

const saveGasFunction = (config: GeneratorOptions, _name: string, _stateMutability: string, _duplicated: number, _parmsIn:[], _parmsOut:[]) => {
    switch (config.apiFramework) {        
        case PROVIDERS.WEB3:
            saveGasFunctionWEB3(_name, _stateMutability, _duplicated, _parmsIn, _parmsOut)
            break;
        case PROVIDERS.ETHERS:
        default:
            saveGasFunctionETHERS(_name, _stateMutability, _duplicated, _parmsIn, _parmsOut)
            break;
    }
};

const saveGasFunctionETHERS = (_name: string, _stateMutalibility: string, _duplicated: number, _parmsIn:[], _parmsOut:[]) => {
    // let funcName = (_duplicated > 1)?_name + '_' + Math.floor(Math.random() * 1000) : _name;
    let parmsIn = parmsToString(_parmsIn);
    let info = setFunctionHeader(_name, _stateMutalibility, _duplicated, _parmsIn, _parmsOut);

    let scFunctionComment = info[0];
    let funcName = info[1];

    let scFunctionStart = 
        'const ' + funcName + ' = async (' + parmsIn + ') => {' + '\n';
    let scFunctionEnd = '};' + '\n';
    let resultDef = '  let function_result = "";';
    let estimateGas = 
      '\n  let gasPrice = Math.round(await bcHttpProvider.getGasPrice() * config.gasPriceFactor);'
    + '\n  let estGas = await contract.estimateGas.' + _name + '(' + parmsIn + ');'
    + '\n  let gas = Math.round(estGas * config.gasLimitFactor);'

    let scFunctionBody = 
          '\n  await contract.' + _name + '(' + parmsIn + (_parmsIn.length > 0 ? ',' : '') + '\n'
        + '      {' + '\n'
        + '         gasPrice: gasPrice,' + '\n'
        + '         gasLimit: gas' + '\n'
        + '      })' + '\n'
        + '      .then(async (result) => {' + '\n'
        + '        await result.wait(1)' + '\n'
        + '          .then((res) => {' + '\n'
        + '            console.log(res);' + '\n'
        + '            function_result = res;' + '\n'
        + '          })' + '\n'
        + '          .catch(err => {' + '\n'
        + '            console.error(err);' + '\n'
        + '            throw (err);' + '\n'
        + '          })' + '\n'
        + '      })' + '\n'
        + '      .catch((err) => {' + '\n'
        + '        console.error(err);' + '\n'
        + '        throw (err);' + '\n'
        + '      });' + '\n'
        + '\n  return function_result;' + '\n';

        fs.appendFileSync(outputFileName, scFunctionComment);
        fs.appendFileSync(outputFileName, scFunctionStart);
        fs.appendFileSync(outputFileName, resultDef);
        fs.appendFileSync(outputFileName, estimateGas);
        fs.appendFileSync(outputFileName, scFunctionBody);
        fs.appendFileSync(outputFileName, scFunctionEnd);

        functionList += '\n' + funcName + ',';
};

const saveGasFunctionWEB3 = (_name: string, _stateMutalibility: string, _duplicated: number, _parmsIn:[], _parmsOut:[]) => {
    // let funcName = (_duplicated > 1)?_name + '_' + Math.floor(Math.random() * 1000) : _name;
    let parmsIn = parmsToString(_parmsIn);
    let info = setFunctionHeader(_name, _stateMutalibility, _duplicated, _parmsIn, _parmsOut);

    let scFunctionComment = info[0];
    let funcName = info[1];

    let scFunctionStart = 
        'const ' + funcName + ' = async (' + parmsIn + ') => {' + '\n';
    let scFunctionEnd = '};' + '\n';    
    let estimateGas = 
      '\n  const gasPrice = Math.round(await web3Provider.eth.getGasPrice() * config.gasPriceFactor);'
    + '\n  const estGas = await contract.methods.' + _name + '(' + parmsIn + ').estimateGas();'
    + '\n  const gasLimit = Math.round(estGas * config.gasLimitFactor);'

    let scTransaction = 
        '\nconst txBuilder = contract.methods.' + _name + '(' + parmsIn + ');' + '\n'
        + 'const encodedTx = txBuilder.encodeABI();' + '\n'
        + 'const count = await web3Provider.eth.getTransactionCount(web3Provider.eth.defaultAccount);'
        + ' const rawTx = {' +'\n'
        + '   nonce: web3Provider.utils.toHex(count),' + '\n'
        + '   gasPrice: gasPrice,' + '\n'
        + '   gasLimit: gasLimit,' + '\n'
        + '   data: encodedTx,' + '\n'
        //+ '   from: web3Provider.eth.defaultAccount'
        + '   to: config.contractAddress' + '\n'
        + ' };' + '\n'
        + '\nconst tx = new Tx(rawTx);'
        + '\nconst signedTx = tx.sign(config.ownerPrivateKey);'
        + '\nconst serializedTx = signedTx.serialize();'

        let scFunctionBody = 
        '\n  return new Promise((resolve, reject) => {' + '\n'
      + '    web3Provider.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"))' + '\n'
      + '      .on("receipt", (receipt) => {' + '\n'
      + '        console.log(receipt);' + '\n'
      + '      })' + '\n'
      + '      .on("confirmation", (confirmationNumber, receipt) => {' + '\n'
      + '        console.log(receipt);' + '\n'
      + '        console.log(confirmationNumber);' + '\n'
      + '        resolve(receipt);' + '\n'
      + '      })' + '\n'
      + '      .on("error", (err) => {' + '\n'
      + '        console.error(err);' + '\n'
      + '        reject(err);' + '\n'      
      + '      })' + '\n'
      + '  });' + '\n'   

        fs.appendFileSync(outputFileName, scFunctionComment);
        fs.appendFileSync(outputFileName, scFunctionStart);
        fs.appendFileSync(outputFileName, estimateGas);
        fs.appendFileSync(outputFileName, scTransaction);
        fs.appendFileSync(outputFileName, scFunctionBody);
        fs.appendFileSync(outputFileName, scFunctionEnd);

        functionList += '\n' + funcName + ',';
};