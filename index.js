// // TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// const generateMarkdown = (
//   projectname,
//   developedby,
//   github,
//   briefdescription,
//   credits,
//   license
// ) =>
//   import {generateMarkdown} from 'generateMarkdown'

  // TODO: Create an array of questions for user input

  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {};

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
      name: "projectname",
    },
    {
      type: "input",
      message: "Please enter the author name(s)",
      name: "developedby",
    },
    {
      type: "input",
      message: "please provide a link to the project repo",
      name: "github",
    },

    {
      type: "input",
      message:
        "Please provide a brief description of your project. Make sure to include your motivation behind the development and what problems this application solve. ",
      name: "briefdescription",
    },
    {
      type: "input",
      message:
        "Please list collaborator if any, that helped develope or inspire this project.",
      name: "credits",
    },
    {
      type: "rawlist",
      message: "Does this app have any licenses? ",
      name: "license",
      choices: [
        "MIT",
        "GNU General Public License",
        "Apache",
        "Open Source",
        "Other",
      ],
    },
  ])
  .then((data) => {
    console.log(data);
    const mdRender = generateMarkdown(
     data
    );

    console.log(mdRender);
      fs.writeFile("README.md", mdRender, (err) =>
        err ? console.error(err) : console.log("success!")
      );
  });

// User Questions
//     Project title: should be listed as title of readme file (line of text)
//     Project description: paragraph
//     Motivation : paragraph
//     Problem solved: paragraph
//     lessons: paragraph
//     Screenshots: ???
//     Dev Credits: names, url (used input)
//     features: paragraph?
//      License: multiple choice
//      Credits: names, url (user input) //

// const { readFile, writeFile } = require('fs/promises');
// const BlogPost = require('./lib/blogPost');

// TODO: Update the code below so that the exception is caught and a message is logged in the terminal.

// The string to readFile is intentionally incorrect to force the error.
// readFile('./data/post.json', 'utf-8')
//   .then((json) => {
//     const blogData = JSON.parse(json);
//     const post = new BlogPost(
//       blogData.title,
//       blogData.text,
//       blogData.author,
//       blogData.createdOn
//     );
//     const html = post.render();
//     return writeFile('./dist/post.html', html);
//   })
//   .then(() => {
//     console.log('Created post.html');
//   })
  // .catch((err) => console.log(err));

