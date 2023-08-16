const assert = require('assert');
const ganache = require('ganache');
//It is necessary to make W in Web3 capital here since we are importing a constructor function
const { Web3 } = require('web3');

// updated ganache and web3 imports added for convenience

// contract test code will go here

// creating an instance of Web3
const web3 = new Web3(ganache.provider());

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(()=>{
//     car = new Car();
// });

// //The first argument need not be the class name, it can be anything
// describe('Car',()=> {
//     it('can park', () => {
//         assert.equal(car.park(),'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(),'vroom');
//     });
// });

// Code for actual smart contract testing starts from here
let accounts;

beforeEach(async()=> {
    accounts = await web3.eth.getAccounts();
});

describe('Inbox',()=>{
    it('deploys a contract', ()=>{
        console.log(accounts);
    });
});