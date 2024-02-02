// functionlar bn koramiz => hisob.js  file bn koriladi

// const calculate = require('./hisob'); 

// const result = calculate.kopaytirish(80,20);
// console.log("Result",result);

// const result2 = calculate.qoshish(70,20);
// console.log("Result",result2);

// console.log("=======================================");


// console.log(require("module").wrapper);
// 
//     '(function (exports, require, module, __filename, __dirname) { ',
//     '\n});'
//   
// console.log("=======================================");

// classlar bn koramiz  => account.js file bn koriladi


const Account =require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("===========");

const myAccount = new Account('Ethan',2000, 5000);
myAccount.givMeDetails();
myAccount.makeDeposit(1000000);

   
// // Bugati chiroy 
// myAccount.withdrawMoney(24000000);
console.log('======');
// Ferari 
myAccount.withdrawMoney(400000);
