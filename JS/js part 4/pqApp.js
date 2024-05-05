let arr = [5, 4, 7, 4, 1, 4, 5, 7];
let occur = prompt("Enter a number to delete its occurance from array.");
occur = parseInt(occur);
console.log("Array before deletion :");
console.log(arr);
for(let i = 0; i < arr.length; i++) {
    console.log("outerloop");
    let j;
    if (arr[i] == occur) {
       console.log("inside if");
        j = i;
        while(j < arr.length) {
            console.log("innerloop");
            arr[j] = arr[++j];
        }
    }
}
console.log("Array after deletion :");
console.log(arr);

// Aprroach 2
let arr1 = [5, 4, 7, 4, 1, 4, 5, 7];
let occur1 = prompt("Enter a number to delete its occurance from array.");
occur = parseInt(occur1);
console.log("Array before deletion :");
console.log(arr1);
for(let i = 0; i < arr.length; i++) {
    if (arr1[i] == occur1) {
        arr1.splice(i, 1);
    }
}
console.log("Array after deletion :");
console.log(arr1);

let num = 287152;
let cpyNum = num;
let count = 0;
let remSum = 0;
for(let i = 0; num != 0; i++) {
    count++;
    remSum += num % 10;
    num = Math.floor(num/10)
}
console.log(`total number of digit in ${cpyNum} are `, count);
console.log(`Sum of digit is ${remSum}`);

let fact = prompt("Enter a number to give factorial of :");
fact = parseInt(fact);
let answer = 1;
for(let i = 1; i <= fact; i++) {
    answer *= i;
}
console.log(`factorial of ${fact} is ${answer}`);

let arr2 = [1, 2, 5, 7, 3, 6];
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Max element is ", max);