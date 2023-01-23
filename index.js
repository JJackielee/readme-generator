// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');



inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      message: 'Please give this project a description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please give us some installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please give us some instructions on how to use this application',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Are there any contribution guidelines to this project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Are there any test instructions to this project?',
      name: 'test',
    },
    {
        type: 'list',
        message: 'Please choose a license for this project',
        name: 'license',
        choices: ['MIT','Apache','None'],
      },
  ])
  .then((data) => {
    console.log(generateMarkdown.test);

     fs.writeFile('README.md', generateMarkdown.generateMarkdown(data) , (err) =>
       err ? console.log(err) : console.log('Success!')
     );
  });