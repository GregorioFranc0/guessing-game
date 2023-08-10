const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = randomInRange(0, 100)

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};

const tooLow = "Too low!"
const tooHigh = "Too high!"
const correct = "Correct! You Win!"


function askRange() {
    rl.question("Enter a maximum number. ", (maxNum) => {
        console.log(maxNum);
        rl.question("Enter a minimum number.", (minNum) => {
            console.log(minNum);
            console.log(`I'm thinking of a number between ${minNum} and ${maxNum}...`)
            secretNumber = randomInRange(minNum, maxNum);
            askGuess();
        })
    })
}

function askGuess() {

    rl.question("Guess a number. ", (answer) => {

        //   console.log(Number(answer) + " is " + checkGuess(Number(answer)))
        if (checkGuess(Number(answer)) === true) {
            rl.close();
        }
        else askGuess();
    });


}
let checkGuess = (num) => {
    if (num > secretNumber) {
        console.log(tooHigh);
        return false;
    }
    if (num < secretNumber) {
        console.log(tooLow);
        return false;

    }
    if (num === secretNumber) {
        console.log(correct);
        return true;
    }

    // while (false) {
    //     askGuess;
    // }

};

askRange();
