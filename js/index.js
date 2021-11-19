import 'html-console-output';
require('html-console-output');

//importing other javascript files
const dynamic = require("./dynamic");
const brute = require("./bruteForce");


//capturing input from user
var phrase1 = prompt("Phrase1: ");
var phrase2 = prompt("Phrase2: ");

//converting the provided strings into arrays
var phrase3 = reverse(phrase1);
var phrase4 = reverse(phrase2);


//Printing Result as a string
console.log("\n"+phrase1.toString()+"\n"+phrase2.toString()+"\n");

//Finding the largest subsequence using brute force returns result.
//console.time("Brute Force V1:");
//brute.bruteForce(phrase1,phrase2);
//console.timeEnd("Brute Force V1:");
console.time("Brute Force V2: ");
brute.bruteForce(phrase1,phrase2);
console.timeEnd("Brute Force V2: ");
console.log("------------------");
//dynamic.dynamicSubstring(phrase1,phrase2,phrase1.length,phrase2.length);
console.time("Dynamic Version: ");
dynamic.printLcs(phrase3,phrase4,phrase3.length,phrase4.length);
console.timeEnd("Dynamic Version: ");
console.log("------------------");
//dynamic.printLcs(phrase1,phrase2,phrase1.length,phrase2.length);

// dynamic.max(5,6);

function reverse(s){
    return s.split("").reverse().join("");
}