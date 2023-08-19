const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
const provider = new HDWalletProvider(
    'call manual certain measure sword feed viable share scheme hospital pistol rally',
    'https://goerli.infura.io/v3/1c1c1857e50741b685a0f9dffe80a4f0'
);

const web3 = new Web3(provider);