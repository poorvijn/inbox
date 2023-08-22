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

const deploy = async()=> {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( { data: bytecode, arguments: ['Hi there']})
    .send( { from: accounts[0], gas: '1000000'});

    console.log('Contract deployed to ', result.options.address);
    provider.engine.stop();
}

deploy();