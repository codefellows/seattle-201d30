'use strict';

// playing with scope and hoisting
var kayak = 'eddyline';
var rowboat = 'little';
var pirogue = 'roundish boat you row on the bayou';
var dragonboat = 'fun';
var chewShell;
// console.log(sailboat);
// bar();
var iAmUndefined;

try {
  iAmUndefined.doStuff();
} catch (error) {
  console.log(error);
} finally {
  console.log('do this whether there\'s an error or not');
}

// how I might organize my file. note: this works better now, when we don't have 'asynchronous' calls happening, than it will when we do (in 301)
function mainFlow() {
  //do stuff
  foo();
  buyBoats();
  buildBoathouse();
  haveFun();
}

function foo () {
  canoe = 'wenonah';
  console.log(canoe);
  console.log(kayak);
}

function buyBoats() {
  console.log('spend all the money!');
}

var canoe;
console.log(canoe);
// this will give a ReferenceError because canoe is not defined in this scope
// console.log(canoe);

// var sailboat = 'topper';

// var bar = function () {
//   console.log('whee');
// };




// playing with breakpoints and the call stack
// function add(x,y) {
//   console.log('now running add');
//   return x + y;
// }
//
// function multiply(x,y) {
//   console.log('now running multiply');
//   return x * y;
// }
//
// function report(x,y) {
//   console.log('now running report');
//   var sum = 'The sum of ' + x + ' and ' + y + ' is ' + add(x,y);
//   var product = 'The product of ' + x + ' and ' + y + ' is ' + multiply(x,y);
//   return 'The sum is ' + sum + '. The product is ' + product;
// }
//
// report(2,4);
