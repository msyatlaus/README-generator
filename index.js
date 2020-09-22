var inquirer = require("inquirer");
var fs = require('fs');
const generateReadme = require("./utils/generateMarkdown");



function readmePrompts() { 
    return inquirer.prompt([
        {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },

    {
        type: "input",
        name: "description",
        message: "Write a description of the project"
    },

    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },

    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions?"
    },

    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: [
            "Adobe License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public Licesne 2.0",
            "GNU Affero General Public License v3.0",
            "none",
        ]
    },

    {
        type: "input",
        name: "contribution",
        message: "Who are the contributors?"
    },

    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    // Questions
    {
        type: "input",
        name: "username",
        message: "What is your GitHub profile?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },

]);
}





function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
      if (err) {
        throw err;
      }
      console.log("You have successfully written your README file");
    });
  }
  
  
  async function init() {
    try {
      const answers = await readmePrompts();
      writeToFile("README.md", generateReadme(answers));
  
    } catch (err) {
    console.log(err);
    }
  };
  
  init();
  
  

// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

