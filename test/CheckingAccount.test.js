// let's work with our checking account


import {CheckingAccount} from "../src/CheckingAccount.js";

const hojatAccount = new CheckingAccount(500);
hojatAccount.deposit(1000);
console.log(hojatAccount.toString());
hojatAccount.withdraw(800);
console.log(hojatAccount.toString());
hojatAccount.withdraw(800);
console.log(hojatAccount.toString());