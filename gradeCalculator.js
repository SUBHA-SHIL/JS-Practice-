// 90+ → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// Below 60 → F


const { log } = require("console");
const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter your percentage out of 100: ", (input) => {
    const marks = Number(input)

    if (marks >= 90 && marks <= 100) {
        console.log("Your grade is A")
    }
    else if (marks >=80) {
        console.log("Your grade is B");
    }
    else if(marks >= 70) {
        console.log("Your grade is C");
    }
    else if(marks >= 60) {
        console.log("Your grade is D");
    }
    else if(marks < 60) {
        console.log("Your grade is F");
    }

    r1.close();
})