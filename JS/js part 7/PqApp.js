let arr = [5, 5, 5, 5];
const arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
};
console.log(arrayAverage(arr));

const isEven = (num) => {
    return num % 2 == 0; //  ! impilict conversion is done when we use % operator to a string
};
let num = prompt("Enter a number : ");
console.log(isEven(num));

