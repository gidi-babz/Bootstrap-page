let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = prompt("Enter your first guess!");
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    attempts++;

    if (guess > targetNum){
        guess = prompt("Too high! Enter a new guess:")
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:")
    }
    else{
        guess = prompt(`Your guess: ${guess} is not a valid entry. Try again:`)
    }
}

if(guess === 'q'){
    console.log("GAME OVER!!!")
} else {
    console.log("CONGRATS YOU WIN")
    console.log(`It took you ${attempts} guess(es)`)
}
