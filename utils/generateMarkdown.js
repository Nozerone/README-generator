// TODO: Create a function that returns a license badge based on which license is passed in
function licenseBadge(data) {
  const badge =
    `![License](https://img.shields.io/badge/license-${data.license}-blue)`.trim();
  return badge;
}

// TODO: Create a function to generate markdown for README
// Short circuiting with OR operator
// ## Description \n ${data.description || "N/A"}
// Short circuiting with ternary operators
// ${data.description ? `## Description\n${data.description}`: ""}
function generateMarkdown(data) {
  return `
  ${licenseBadge(data)}
  # ${data.title} 
   ## Description
   ${data.description} 
   ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contribute](#contribute)
   * [License](#license)
   * [Author](#author)
   * [gitHub](#github)
   * [Credits](#credits)
   * [Email](#email)
   
  ## Installation 
  ${data.confirmInstall} 
  ## Usage 
  ${data.usage}
  ## Contribute 
  ${data.contribute}
  ## License 
  This application is covered under ${data.license} license
  ## Project Author 
  ${data.author} 
   ### gitHub 
   [${data.githubUser}](https://github.com/${data.githubUser})
   ### Credits 
   ${data.credits} 
   ### Email 
   ${data.email}

`;
}

module.exports = generateMarkdown;
