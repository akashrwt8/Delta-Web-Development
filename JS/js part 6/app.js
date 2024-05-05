function rollDice() {
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n);
}

rollDice();

function calAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

calAvg(2, 4, 7);

function table(x) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${x} * ${i} = ${x * i}`);
    }
}

table(8);

function getSum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum)
}

getSum(7);

let str = ["hi", "hello", "bye", "!"];
function stringConcatenation(arr) {
    let ans = "";
    for(let i = 0; i < arr.length; i++) {
        ans += arr[i];
    }
    return ans;
}

console.log(stringConcatenation(str));