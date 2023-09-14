const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "what would you like to do?",
    name: "",
  },

  {
    type: "input",
    mesage:
      "what is the name of the department?",
    name: "",
  },

  {
    type: "input",
    message: "What is the name of the role?",
    name: "",
  },

  {
    type: "input",
    message: "What is the salary of the role?",
    name: "char_color",
  },
  {
    type: "input",
    message: "what department does the role belong to?",
    name: "",

  },
  {
    type: "input",
    message: "What is the employee's first name?",
    name: ""
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "",
  },
  {
    type: "input",
    mesage: "What is the employee's role?",
    name: "",
  },
  {
    type: "input",
    message: "Who is the employee's manager?",
    name: "",
  },
  {
    type: "list",
    message: "Which employee's role do you want to update?",
    name: "",
    choices: [],
  }
];

//Prompt Questions

// function init() {
//   inquirer.prompt(questions).then(function (data) {
//     var filename = "logo.svg";
//     writeToFile(filename, data.shape_logo, data.shape_color, data.char_text, data.char_color);
//   });
// }

// init();