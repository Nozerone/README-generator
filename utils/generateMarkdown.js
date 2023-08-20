// TODO: Create a function that returns a license badge based on which license is passed in
function licenseBadge(data) {
  const badge =
    `![License](https://img.shields.io/badge/${data.license}-blue)`.trim();
  return badge;
  console.log(badge);
}

// TODO: Create a function to generate markdown for README
// Short circuiting with OR operator
// ## Description \n ${data.description || "N/A"}
// Short circuiting with ternary operators
// ${data.description ? `## Description\n${data.description}`: ""}
function generateMarkdown(data) {
  return `
  ${licenseBadge(data)};
  # ${data.title} 
  ${data.description ? `## Description\n${data.description}` : ""}
  ## Installation\n ${data.confirmInstall ? `${data.confirmInstall}` : "N/A"}
  ${data.usage ? `## Usage\n${data.usage}` : ""}
  ${data.contribute ? `## How to contribute\n${data.contribute}` : ""}
  ## License ${data.license}
  ${data.author ? `## Project Author\n${data.author}` : ""}
  ${data.githubuser ? `### gitHub Username\n${data.githubUser}` : ""}
  ${data.githubLink ? `### github\n ${data.githubLink}` : ""}
  ${data.credits ? `### Credits\n${data.credits}` : ""}
  ${data.email ? `### email\n${[data.email]}` : ""}git

`;
}

module.exports = generateMarkdown;
