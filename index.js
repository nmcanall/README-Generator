// Package requirements
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "7) What is your GitHub username?",
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            }
            else {
                console.log("Please enter your username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "7) What is your email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "project",
        message: "1) What is your project title?",
        validate: titleInput => {
            if(titleInput) {
                return true;
            }
            else {
                console.log("Please enter the project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "2) Describe your project.",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            }
            else {
                console.log("Please give a description!");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "6) What type of license did you use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "install",
        message: "3) What command should be run to install dependencies?",
        validate: instalInput => {
            if(instalInput) {
                return true;
            }
            else {
                console.log("Please describe installation!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "steps",
        message: "4) What are the steps to use your project?",
        validate: stepsInput => {
            if(stepsInput) {
                return true;
            }
            else {
                console.log("Please explain how to use the project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "5) Give the command you use to run tests.",
        validate: testsInput => {
            if(testsInput) {
                return true;
            }
            else {
                console.log("Please give the test command!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribute",
        message: "5) How do you contribute to this repo?",
        validate: contributeInput => {
            if(contributeInput) {
                return true;
            }
            else {
                console.log("Please explain steps to contribute!");
                return false;
            }
        }
    }
];

// Writes the file to ./dist/README.md
function writeToFile(fileName, data) {
}

// Prompts user for data regarding the package
const promptUser = () => {
    return inquirer.prompt(questions);
}

// function call to initialize program
promptUser()
    .then(readmeData => console.log(readmeData));
