let arr = [1, 2, 3, 4, 5];

let print = function (el) {
    console.log(el);
}

arr.forEach(print);
console.log("\n");

// ? OR

arr.forEach(function (el) {
    console.log(el);
});

console.log("\nforEach for object\n");

let a = [
    {
        name : "akash",
        marks : 95,
    }, 
    {
        name : "shradha",
        marks : 99,
    },
    {
        name : "Saurabh",
        marks : 97,
    }
];

a.forEach((student) => {
    console.log(student);
    console.log(student.name);
    console.log(student.marks);
});

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * 2;
});

let square = num.map((el) => {
    return el * el;
});

console.log(double);
console.log(square);

let gpa = a.map((el) => {
    return el.marks / 10;
});

console.log(gpa);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let even = nums.filter((el) => (el % 2 == 0)); // ~ even => true and odd => false

console.log(`even = ${even}`);

console.log("every method in array");

let narr = [1, 2, 3, 4];

let b1 = narr.every((el) => (el % 2 == 0));

console.log(b1);

let b2 = [2,4].every((el) => (el % 2 == 0));

console.log(b2);

let finalVal = nums.reduce((res, el) => res + el);
console.log(finalVal);
console.log("max approach One \n");
let maxVal = nums.reduce((max, el, index) =>  {
    let returns;
    console.log(`accumulator: ${max}, currentValue: ${el}, index: ${index}`,);
    if (el > max) {
        max = el;
    }
    returns = max;
    console.log(`retunrs : ${returns}`,);
    return returns;
});
console.log("Max = " + maxVal);

let arr1 = [10, 20, 30, 40];
let multipleOFTen = arr1.every((el) => (el % 10 == 0));
console.log(multipleOFTen);
console.log("min approach One \n");
let arr3 = [-1, 3, 5, 1, -7];
function getMin(arr) {
    let min = arr.reduce((min, el, index) => {
        let returns;
        if(min > el) {
           min = el;
        }
        returns = min;
        console.log(`accumulator: ${min}, currentValue: ${el}, index: ${index}, returns: ${returns}`,);
        //console.log(min);
        return returns; //If no explicit initial value is provided, the first element of the array becomes the initial accumulator. In your case, the arr3 array starts with the value 1, so that becomes the initial accumulator:
    });
    return min;
}

console.log(`Min = ${getMin(arr3)}`);
console.log("max approach two \n");
nums = [1,2,-5,4]
let max = nums.reduce((max, el, index) => {
    let returns;
    if (el > max) {
        returns = el;
    } else {
        returns = max;
    }
    console.log(`accumulator: ${max}, currentValue: ${el}, index: ${index}, returns: ${returns}`,);
    return returns;
});
console.log("max = " + max);
console.log("min approach two \n");
let min = nums.reduce((min, el, index) => {
    let returns;
    if (min < el) {
        returns = min;
    } else {
        returns = el;
    }
    console.log(`accumulator: ${min}, currentValue: ${el}, index: ${index}, returns: ${returns}`,);
    return returns;
});
console.log("min = " + min);

console.log("\nreduce() call wihout specified initial value : ")
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue ;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);

function sum (a, b = 4) {return a + b};
console.log(sum(2));

let data = {
    email : "akrwt01@gmail.com",
    password : "abcd",
};
let copyData = {...data, id : 123};
console.log(copyData);