
let finalV = "";

//function that render the license badge at the top of the page.
//checks the data entra with an if statement to determine which badge the user selected
function renderLicenseBadge(license) {
  if(license == "MIT"){
    finalV = finalV + "![badge](https://img.shields.io/badge/License-MIT-green.svg)"
  } else if(license == "Apache"){
    finalV = finalV + "![badge](https://img.shields.io/badge/license-Apache-blue)"
  } else{
    return;
  }
}

//function that adds the description of the project into the read me as well as a table of contents with passed in data in parameters

function descAndTable(desc){
  finalV = finalV + `

## Description
${desc}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Testing](#testing)

`
}

//function that adds installation and usage section into the read me with the passed in data in parameters
function installationAndUsage(install,use){
  finalV = finalV + `## Installation
${install}

## Usage
${use}

`
}

//function that adds license section into the readme. This had a seperate function than the badge because they're placed in different spots
//takes in an data as a parameter to check which license was chose
function licenseSection(license){
  finalV = finalV + `## License
`
  if(license == "MIT"){
    finalV = finalV + `Distributed under the ${license} License. Please refer to [MIT License](https://choosealicense.com/licenses/mit/) for more information.
    
`
  } else if(license == "Apache"){
    finalV = finalV + `Distributed under the ${license} License. Please refer to [Apache License](https://choosealicense.com/licenses/apache-2.0/) for more information.
    
`
  } else{
    finalV = finalV + `None
    
`;
  }
}

//function to add contribution and test sections into the read me. also takes in data as a parameter
function contribAndTest(contri,test){
  finalV = finalV + `## Contribution
${contri}

## Testing
${test}

`
}
//function to add git and email into the question section. takes in data as a parameter
function gitAndEmail(github,email){
  finalV = finalV + `## Questions
You can visit the developer Github repository here [${github}](https://${github}.github.io)

You can also reach the developer for additional questions by emailing: ${email}
`
}



//function to run all the functions in order to have everything in the read me display in the correct order. It initiaes it by adding title of the 
// project first. Then it returns the string 
function generateMarkdown(data) {
  finalV = `# ${data.title}

`
  renderLicenseBadge(data.license);
  descAndTable(data.description);
  installationAndUsage(data.installation,data.usage);
  licenseSection(data.license);
  contribAndTest(data.contribution, data.test)
  gitAndEmail(data.github, data.email);
  return finalV;
}

//exports generateMarkdown function so we can use it in index.js
module.exports = {
  generateMarkdown


};
