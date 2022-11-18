import * as fs from 'fs';


let version = '0.5.0';
let name = 'SmartContractAPIGenerator';

enum PROVIDERS {
    ETHERS,
    WEB3
}

type GeneratorOptions = {
    outputFileName: string;    
    apiFramework: PROVIDERS
    outputScriptsPath: string
}

type SmartContractConfig = {
    name: string;
    abi: [];
    address: string;
    ownerPrivateKey: string;
    ownerAccount: string;
}

type BCNetworkConfig = {
    RPCURL: string;    
    gasLimitFactor: number;
    gasPriceFactor: number;
}

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

    cfg.outputFileName = cfg.outputScriptsPath + _scConfig.name + '.api' + fileSuffix;
    fs.rm(cfg.outputFileName, () => { }); // remove file if exists     

    
    
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


/**
 * 
 * @param abi 
 * @param scConfig 
 * @param bcConfig 
 * @param config 
 */
const generateAPIFile = (abi, scConfig: SmartContractConfig, bcConfig: BCNetworkConfig, config: GeneratorOptions) => {
    saveHeader(config, scConfig);
    
    fs.appendFileSync(config.outputFileName, 'import { ethers } from "ethers";' + '\n');

    saveApiConfig(scConfig, bcConfig, config, abi);
    

    abi.map((el) => {
        if (el.type === 'function') {
            let duplicated = abi.filter(el1 => el1.name === el.name).length;
            switch (el.stateMutability) {
                case 'view':
                case 'pure':
                    // version without gas estimation
                    saveNoGasFunction(el.name, el.stateMutability, duplicated, el.inputs, el.outputs, config.outputFileName);
                    break;
                case 'nonpayable':
                case 'payable':
                    // version with gas estimation
                    saveGasFunction(el.name, el.stateMutability, duplicated, el.inputs, el.outputs, config.outputFileName);
                    break;
                default:
                    break;
            }
        }
    });

    saveExportFunctions(config);
}

const saveHeader = (cfg: GeneratorOptions, scCfg: SmartContractConfig) => {
    fs.appendFileSync(cfg.outputFileName,
        '/* \n'
        + '   Script generated automatically from the NPM smartcontract-api-module-generator package.' + '\n\n'
        + '   Used contract: ' + scCfg.name + '\n'
        + '   Package version: ' + version + '\n'
        + '   API framework: ' + PROVIDERS[cfg.apiFramework] + '\n'        
        + '   Date of file generation: ' + new Date(Date.now()).toLocaleString() + '\n'
        + '*/ \n\n'
    );
}

const saveExportFunctions = (cfg: GeneratorOptions) => {
    fs.appendFileSync(cfg.outputFileName,
        '\nexport default {'
        + functionList.substring(0, functionList.length - 1)
        + '\n};'
    );
}

const saveApiConfig = (scConfig: SmartContractConfig, bcConfig: BCNetworkConfig, config: GeneratorOptions, abi: []) => {
    let sFuncStart: string = 
    '\nconst config = {' + '\n'
    + '  bcRPCURL: "' + bcConfig.RPCURL + '",' + '\n'
    + '  gasLimitFactor: ' + bcConfig.gasLimitFactor + ',' + '\n'
    + '  gasPriceFactor: ' + bcConfig.gasPriceFactor + ',' + '\n'
    + '  contractAddress: "' + scConfig.address + '",' + '\n'
    + '  ownerAccount: "' + scConfig.ownerAccount + '",' + '\n'
    + '  ownerPrivateKey: "' + scConfig.ownerPrivateKey + '"' + '\n'
    ;    

    let sFuncFinish: string = '}' + '\n'

    fs.appendFileSync(config.outputFileName, sFuncStart);
    fs.appendFileSync(config.outputFileName, sFuncFinish);

    let sABI = '\const contractABI = ' + JSON.stringify(abi) + ';\n';
    fs.appendFileSync(config.outputFileName, sABI);

    let sHttpProvider = 'const bcHttpProvider = new ethers.providers.JsonRpcProvider("' + bcConfig.RPCURL + '");\n'
    fs.appendFileSync(config.outputFileName, sHttpProvider);

    let sWallet = 'const wallet = new ethers.Wallet("' + scConfig.ownerPrivateKey + '", bcHttpProvider' + ');\n';        
    fs.appendFileSync(config.outputFileName, sWallet);

    let sContract = 'const contract = new ethers.Contract("' + scConfig.address + '", contractABI, wallet' + ');\n';        
    fs.appendFileSync(config.outputFileName, sContract);
}

const parmsToString = (_parms) => {
    let toRet: string = '';

    _parms.map(el => {
        toRet += el.name + ',';
    })

    return toRet.substring(0, toRet.length - 1);
}

const setFunctionHeader = (_name: string, _stateMutalibility: string, _duplicated: number, _parmsIn:[], _parmsOut:[]): string => {
    let funcName = (_duplicated > 1)?_name + '_' + Math.floor(Math.random() * 1000) : _name;
    let scFunctionComment = 
        '\n// --------------------------------------------------------------------------------------\n' 
        + '//  Function ( ' + _stateMutalibility + ' ): ' + _name + '\n'        
    scFunctionComment += _duplicated > 1?'//  Function duplicated. Oryginal function name: ' + _name + '\n':'';
    scFunctionComment += '// --------------------------------------------------------------------------------------\n';

    return scFunctionComment;
}

const saveNoGasFunction = (_name: string, _stateMutalibility: string, _duplicated: number, _parmsIn:[], _parmsOut:[], outputFileName: string) => {
    let funcName = (_duplicated > 1)?_name + '_' + Math.floor(Math.random() * 1000) : _name;    
    let parmsIn = parmsToString(_parmsIn);
    let scFunctionComment = setFunctionHeader(_name, _stateMutalibility, _duplicated, _parmsIn, _parmsOut);

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

const saveGasFunction = (_name: string, _stateMutalibility: string, _duplicated: number, _parmsIn:[], _parmsOut:[], outputFileName: string) => {
    let funcName = (_duplicated > 1)?_name + '_' + Math.floor(Math.random() * 1000) : _name;
    let parmsIn = parmsToString(_parmsIn);
    let scFunctionComment = setFunctionHeader(_name, _stateMutalibility, _duplicated, _parmsIn, _parmsOut);

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