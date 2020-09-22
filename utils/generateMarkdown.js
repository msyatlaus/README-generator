// function to generate markdown for README
function generateReadme(data) {
    const avatar = `https://github.com/${data.github}.png?size=50`;
    const gitHub = `https://img.shields.io/badge/Github-${data.github}-4cbbb9`;

    return `
    # ${data.title}
    
    ## Description
      ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Tests](#tests)
    - [Contributors](#contributors)
    - [Details](#details)
      
    ## Usage
    Examples of how to use this program: ${data.usage}
    ## Installation
    
      
    ## Tests
    To test, run the following command: ${data.test}
  
    ## License
    ${data.license}
    ## Contributors
    ${data.contribution}
  
    ## Contact
    \n![Badge](${gitHub}) 
    \n![Profile Image](${avatar})
    \nIf you have any questions, contact the author directly at ${data.email}.`;
}

module.exports = generateReadme