
//uses the generateMarkdown file
//uses inquierer
//uses fs to write files
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');


//inqureier to ask users questions in terminal and then puts them into variable so we can pull them in data
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
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
  ])
  .then((data) => {
    //after all questions are asked it then writes the README files and uses the method generateMarkDown 
    //where we pass in the user inputed data as a parameter so it can return a string with the correct readme in markdown format.
    //if an error occurs it throws it. 
     fs.writeFile('README.md', generateMarkdown.generateMarkdown(data) , (err) =>
       err ? console.log(err) : console.log('Success!')
     );
  });