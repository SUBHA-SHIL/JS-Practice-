const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (input) => {
    const age = Number(input);

    if (age < 0) {
        console.log("Invalid age.");
    } else if (age < 18) {
        console.log("Not eligible to vote.");
    } else {
        console.log("Eligible to vote.");
    }

    rl.close();
});