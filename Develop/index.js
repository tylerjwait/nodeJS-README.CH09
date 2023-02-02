// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project\'s name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project:',
  },
  {
    type: 'input',
    name: 'user',
    message: 'What is your "User Story"?',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['None', 'MIT', 'ICS', 'Apache', 'Unlicense', 'Boost', 'GPLv2', 'GPLv3'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'confirm',
    name: 'installation',
    message: 'Do you have a specific installation guide?',
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    // Used writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('./utils/README.md', generateMarkdown(answers)))
    .then(() => console.log('Generating README.md...'))
    .catch((err) => console.error(err));
}
// Function call to initialize app
init();