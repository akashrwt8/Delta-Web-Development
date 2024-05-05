let number = 2;
let arr = [4, 5, 7, 9, 2, 1];
function getElements(arr, number){
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > number) {
            console.log(arr[i]);
        }
        i++;
    }
}

getElements(arr, number);

let str = "abcdabcdefgggh";

function uniqueCharacters(str){
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}

let ans = uniqueCharacters(str);
console.log(ans);

let country = ["Australia", "Germany", "United States of America"];

function longestCon(country) {
    let large = 0, idx = 0;
    for (let i = 0; i < country.length; i++) {
        if(country[i].length > large) {
            large = country[i].length;
            idx = i;
        } 
    }
    console.log(country[idx]);
}

longestCon(country);

let vowelsStr = "aeioustr";
function countVowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;          
        }
    }
    console.log(count);
}

countVowel(vowelsStr);

let start = 10;
let end = 50;

function randomNum(s, e) {
    let diff = e - s;
    let num = Math.floor((Math.random() * diff) + 1);
    console.log(num);
}

randomNum(start, end);