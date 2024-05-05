// // console.log("Namste JavaScript");
// let color = "red";
// if (color === 'red') {
//     console.log("Stop.");
// } else if (color === "yellow") {
//     console.log("Slow down.");
// } else if (color === "green") {
//     console.log("Go.");
// } else {
//     console.log("Wrong input.");
// }

// let size = "M";
// if (size === "XL") {
//     console.log(`price is 250`);
// } else if (size === "L") {
//     console.log(`price is 200`);
// } else if (size === "M") {
//     console.log(`price is 100`);
// } else if (size === "S") {
//     console.log(`price is 50`);
// } else {
//     console.log(`Invalid input`);
// }

// let str = "pineApple";
// if (str[0] === 'a' && str.length > 3) {
//     console.log("good string");
// } else {
//     console.log("not a good string");
// }

// let num = 1;
// switch (num) {
//     case 1:
//         console.log("Monday.");
//         break;
//         case 1:
//             console.log("Monday.");
//             break;
//             case 2:
//         console.log("Tuesday.");
//         break;
//         case 3:
//         console.log("Wednesday.");
//         break;
//         case 4:
//         console.log("Thrusday.");
//         break;
//         case 5:
//         console.log("Friday.");
//         break;
//         case 6:
//         console.log("Saturday.");
//         break;
//         case 7:
//         console.log("Sunday.");
//         break;
//     default:
//         console.log("Wrong input.");
//         break;
// }

// alert("All good.");
// let firstName = prompt("Please enter your name : ");
// console.log(firstName);

let num = 100;
if (num % 10 == 0) {
    console.log("Good.");
} else {
    console.log("Bad.")
}

let name = prompt("Enter your name :");
let age = prompt("Enter your age :");
alert(`${name} is ${age} year old.`);

let key = 1;
switch (key) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, Nobember, December");
        break;
    default:
        console.log("Invalid input.");
        break;
}
let Str = "akashrawat";
if ('A' === Str[0] || 'a' === Str[0] && Str.length > 5) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}

let A = 17;
let B = 111;
let C = 15;
if (A > B) {
    if (A > C) {
        console.log(A);
    } else {
        console.log(C);
    }
} else if (B > C) {
    console.log(B);
} else {
    console.log(C);
}

let x = 52;
let y = 21;
if (x % 10 == y % 10) {
    console.log("Equal", x % 10);
} else {
    console.log("not equal");
}