let msg = " help! ";
let m = msg.trim();
console.log(m);
let x = msg.trim().toUpperCase();
console.log(x);
let name = "ApnaCollege";
console.log(name.slice(4).replace('l', 't').replace('l', 't'))
let months = ["january", "july", "march", "august"];
console.log(months);
// months.shift();
// months.shift();
// months.unshift("june");
// months.unshift("july");
months.splice(0, 2, "july", "june");
let programmingLanguages = ['c', "c++", "html", "javaScript", "python", "java", "c#", "squl"];
programmingLanguages.reverse();
console.log(programmingLanguages.indexOf("javaScript"));
let ticTacToeState = [["X", null, 0], [null, "X", null], [0, null, "X"]];
console.log(ticTacToeState);

let n = 5;
let arr = [1, 4, 5, 7, 8, 9];
let ans = arr.slice(0, n);
console.log(ans);

let lastN = 3;
let arr1 = [4, 7, 5, 2, 1];
let answer = arr1.slice(arr1.length - lastN);
console.log(answer);

let str1 = "";
if (str1.length == 0) {
    console.log("empty");
} else {
    console.log("not empty");
}

let str2 = "apnaCollege"
let idx = 1;
if (str2[idx] == str2[idx].toLowerCase) {
    console.log("character is lowercase");
} else {
    console.log("character is not a lowercase");
}

str3 = " hello ";
console.log(str3.trim());

let arr2 = [5, 7, 8];
let boolV = arr2.includes(5);
console.log(boolV);