const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = 42;

const tooLow = "Too low!"
const tooHigh = "Too high!"
const correct = "Correct! You Win!"

function askGuess() {
    rl.question("Enter a guess. ", (answer) => {

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

askGuess();
