// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const markdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Title of Project?',
    name: 'projectName',
  },
  {
    type: 'input',
    message: 'Breif desciption of Project?',
    name: 'projectDescrip',
  },
  {
    type: 'input',
    message: 'Install Instructions?',
    name: 'installInstruction',
  },
  {
    type: 'input',
    message: 'Contribution guidelines?',
    name: 'guidelines',
  },
  {
    type: 'list',
    message: 'What License\'s did you use? ',
    name: 'licenses',
    choices: ['Apache', 'MIT', 'IBM', 'BSD', "None"],
  },
  {
    type: 'input',
    message: 'Command that will run project?',
    name: 'command',
  },
  {
    type: 'input',
    message: 'What are Dependencies are there?',
    name: 'dependencies',
  },
  {
    type: 'input',
    message: 'What are the Testing instructions?',
    name: 'testingInstruct',
  },
  {
    type: 'input',
    message: 'How can you contacted',
    name: 'contactInfo',
  },
  {
    type: 'input',
    message: 'GIT User Name?',
    name: 'gitUser',
  },
  {
    type: 'input',
    message: 'What is the Repo-name',
    name: 'repo',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then((response) => {
       //        file name              data
    let textfile = process.argv[2] + '.MD'
    writeToFile(textfile, markdown((response)));
   });
}

// Function call to initialize app
init();
