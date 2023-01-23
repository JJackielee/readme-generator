// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let finalV = "";

function renderLicenseBadge(license) {
  console.log(license);
  if(license == "MIT"){
    finalV = finalV + "[!badge](https://img.shields.io/badge/License-MIT-green.svg)"
  } else if(license == "Apache"){
    finalV = finalV + "[!badge](https://img.shields.io/badge/license-Apache-blue)"
  } else{
    return;
  }
}

function descAndTable(desc){
  console.log(desc);
  finalV = finalV + `

## Description
${desc}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Testing](#testing)

`
}

function installationAndUsage(install,use){
  console.log(install);
  finalV = finalV + `## Installation
${install}

## Usage
${use}`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  finalV = `# ${data.title}

`
  renderLicenseBadge(data.license);
  descAndTable(data.description);
  installationAndUsage(data.installation,data.usage);
  return finalV;
}

module.exports = {
  generateMarkdown


};
