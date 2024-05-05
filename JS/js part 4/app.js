let n = 5;
for(let i = 1;  i <= n; i++) {
    console.log(i);
}

console.log("Odd number from 1 to 15");
for(let i = 1; i <= 15; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

console.log("even number from 2 to 10");
for(let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let tableUpto = 10;
let table = prompt("Enter a number to print it's table :");
table = parseInt(table);
console.log(`Table of ${table} :`);
for(let i = 1; i <= tableUpto; i++) {
    console.log(`${table} X ${i} = ${table * i}`);
}

let favouriteMovie = "Hanuman";
guess = prompt("Enter a movie name to guess :");
while(true) {
    if (favouriteMovie == guess) {
        console.log("You have guessed right congratulation !");
        break;
    } else if(guess == "quit") {
        console.log("You are exiting the game");
        break;
    } else {
        guess = prompt("Enter a movie name to guess again else type quit to exit game :");
    }
}
