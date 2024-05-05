const maxNum = prompt("Enter the maximum number :");
//maxNum  = parseInt(maxNum);
let guess = prompt("Enter a number you want to guess :");
const random = Math.floor(Math.random() * maxNum) + 1;
//console.log(random);
while (true) {
    if (guess > random) {
        alert("Hint ! Your number was large");
    } else if (guess < random) {
        alert("Hint ! Your number was small");
    }
    if (guess == random) {
        console.log("You win congrulation ! the number is ", random);
        break;
    } else {
        if (guess == -1) {
            console.log("Quitting the game");
            break;
        } else {
            guess = prompt("Try again ! Enter a number you want to guess or -1 for exit :");
        }
    }
}
