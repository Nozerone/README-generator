// // TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// ask user for info
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },

    {
      type: "input",
      message: "Describe your project.",
      name: "description",
    },
    {
      type: "confirm",
      message: "Does your application require installation?",
      name: "confirmInstall",
    },
    {
      type: "input",
      message: "Please explain how this app should be used.",
      name: "usage",
    },

    {
      type: "input",
      message:"how to contribute",
      name: "contribute",
    },

    {
      type: "rawlist",
      message: "what type of license does this application have? ",
      name: "license",
      choices: [
        "MIT",
        "GNU",
        "Apache",
        "OpenSource",
        "Other",
        "None",
      ],
    },

    {
      type: "input",
      message: "Please enter the author name(s)",
      name: "author",
    },

    {
      type: "input",
      message: "What is your gitHub user name?",
      name: "githubUser",
    },

    {
      type: "input",
      message: "please enter a link to your project repository",
      name: "githubLink",
    },

    {
      type: "input",
      message:
        "Please list collaborator if any, that helped develope or inspire this project.",
      name: "credits",
    },

    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])
  .then((data) => {
    console.log(data);
    const mdRender = generateMarkdown(data);

    console.log(mdRender);
    fs.writeFile("README.md", mdRender, (err) =>
      err ? console.error(err) : console.log("success!")
    );
  });
