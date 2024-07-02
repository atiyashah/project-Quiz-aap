#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


// print welcome message
console.log(chalk.bold.rgb(284, 284,284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 284,284)(`<<<=======>>> ${chalk.bold.hex(`#9999FF`)(`Welcome to \`Atiya Shah \` Advanture Quiz Game`)}  <<<=========>>>`));
console.log(chalk.bold.rgb(284, 284,284)(`\t\t <<<==============================>>>\n`));

console.log(chalk.yellow("You are required to gain a maximum of 9 points to win"));

let points = 0; // Initialize points

// First question
let question1 = await inquirer.prompt([{
    name: "one",
    message: "What is TypeScript and why would you use it over JavaScript?",
    type: "list",
    choices: ["It's a superset of JavaScript that adds optional static typing", "It's a JavaScript library for building user interfaces",
        "It's a server-side runtime environment", "It's used for database management"]
}]);

if (question1.one == "It's a superset of JavaScript that adds optional static typing") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Second question
let question2 = await inquirer.prompt([{
    name: "two",
    message: "Who developed TypeScript?",
    type: "list",
    choices: ["Google", "Microsoft", "Facebook", "Apple"]
}]);

if (question2.two == "Microsoft") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Third question
let question3 = await inquirer.prompt([{
    name: "three",
    message: "What is the role of the TypeScript compiler (tsc)?",
    type: "list",
    choices: ["It converts TypeScript code to JavaScript code", "It optimizes JavaScript code", "It manages databases", "It checks for syntax errors in TypeScript code"]
}]);

if (question3.three == "It converts TypeScript code to JavaScript code") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Fourth question
let question4 = await inquirer.prompt([{
    name: "four",
    message: "What are basic types in TypeScript?",
    type: "list",
    choices: ["Integer, float, string, boolean", "Number, string, boolean, null, undefined", "Int, char, void", "None of the above"]
}]);

if (question4.four == "Number, string, boolean, null, undefined") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Fifth question
let question5 = await inquirer.prompt([{
    name: "five",
    message: "What is TypeScript primarily known for enhancing in JavaScript?",
    type: "list",
    choices: ["Speed", "Typing", "Syntax", "Compatibility"]
}]);

if (question5.five == "Typing") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Sixth question
let question6 = await inquirer.prompt([{
    name: "six",
    message: "Which keyword is used to declare a constant in TypeScript?",
    type: "list",
    choices: ["Var", "Let", "Const", "Final"]
}]);

if (question6.six == "Const") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Seventh question
let question7 = await inquirer.prompt([{
    name: "seven",
    message: "How do you specify that a parameter in a function can have multiple types in TypeScript?",
    type: "list",
    choices: ["Using union types", "Using intersection types", "Using generics", "None of the above"]
}]);

if (question7.seven == "Using union types") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Eighth question
let question8 = await inquirer.prompt([{
    name: "eight",
    message: "What is the purpose of the 'as' keyword in TypeScript?",
    type: "list",
    choices: ["It performs type assertion", "It declares a new variable", "It defines a namespace", "It creates an alias for a class"]
}]);

if (question8.eight == "It performs type assertion") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Ninth question
let question9 = await inquirer.prompt([{
    name: "nine",
    message: "What TypeScript feature allows you to restrict a variable to only accept certain values?",
    type: "list",
    choices: ["Enums", "Tuples", "Generics", "Decorators"]
}]);

if (question9.nine == "Enums") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Tenth question
let question10 = await inquirer.prompt([{
    name: "ten",
    message: "Which TypeScript feature allows you to define complex types that can be reused across your codebase?",
    type: "list",
    choices: ["Enums", "Interfaces", "Functions", "Classes"]
}]);

if (question10.ten == "Interfaces") {
    console.log(chalk.green("Your answer is correct"));
    points++;
} else {
    console.log(chalk.red("Incorrect answer"));
}

console.log("\n"); // Add spacing

// Determine the result based on the points
if (points >= 9) {
    console.log(chalk.bold.bgBlue("Congratulations!"));
    console.log(chalk.green(`You have ${points} points`));
} else {
    console.log(chalk.bold.bgRed("You lost! Try next time."));
    console.log(chalk.yellow(`You have ${points} points`));
}
