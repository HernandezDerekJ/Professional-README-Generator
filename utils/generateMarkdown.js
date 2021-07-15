// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let x = "";
  switch(license){
    case "Apache":
        x = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
        break;
    case "MIT":
        x = 'https://img.shields.io/badge/License-MIT-yellow.svg';
        break;
    case "IBM": 
        x = 'https://img.shields.io/badge/License-IPL%201.0-blue.svg';
        break;
    case "BSD": 
        x = 'https://img.shields.io/badge/License-IPL%201.0-blue.svg';
        break;
    case "None": 
        x = '';
        break;
    default: 
        x = "";
  }
  return x;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let x = "";
  switch(license){
    case "Apache":
        x = 'https://opensource.org/licenses/Apache-2.0';
        break;
    case "MIT":
        x = 'https://opensource.org/licenses/MIT';
        break;
    case "IBM": 
        x = 'https://opensource.org/licenses/IPL-1.0';
        break;
    case "BSD": 
        x = 'https://opensource.org/licenses/BSD-3-Clause';
        break;
    case "None": 
        x = '';
        break;
    default: 
        x = "";
  }
  return x;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "Apache":
      return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
    case "MIT":
      return `[![License: MIT](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
    case "IBM": 
      return `[![License: IPL 1.0](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
    case "BSD": 
      return `[![License: IPL 1.0](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
    case "None": 
        x = '';
        break;
    default: 
        x = "";
    return x;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.licenses);
  return `
  # ${data.projectName}

  ## Table of Contents
  - [Images](#Images)
  - [License's](#License's)
  - [Desciption](#Desciption)
  - [Install-Instructions](#Install-Instructions)
  - [Contribution-Guidelines](#Contribution-Guidelines)
  - [Terminal-Command](#Terminal-Command)
  - [Testing-Instructions](#Testing-Instructions)  
  - [Contact](#Contact)
  - [GIT](#GIT)

  ![alt text](assets/screenshotProject1.png)

  ## License's: 
  ${renderLicenseSection(data.licenses)}
  ## Desciption 

    ${data.projectDescrip}

  ## Install Instructions
    
    ${data.projectDescrip}
  
  ## Contribution Guidelines

    ${data.guidelines}

  ## Dependencies
    
    ${data.dependencies}
  
  ## Terminal Command
  
    ${data.command}
  
  ## Testing Instructions
  
    ${data.testingInstruct}

  ## Contact
  
    ${data.contactInfo}

  ## GIT

  https://github.com/${data.gitUser}/${data.repo}

  ## Demo

  https://drive.google.com/file/d/1Yk3T9drTAdOKLVNu4auSrZqYxlPxAMao/view

`}

module.exports = generateMarkdown;
