const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    "1) What is your project title?",
    "2) Describe your project.",
    "3) How do you instal your project?",
    "4) What are the steps to use your project?",
    "5) Give some test cases to run in your project.",
    "6) What type of license did you use?",
    "7) What is your GitHub username?",
    "8) What is your email address?"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
