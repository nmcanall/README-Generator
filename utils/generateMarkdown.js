// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.project}

![GitHub license](https://img.shields.io/badge/license-${data.license.split(" ")[0]}-blue.svg)

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contribute](#contribute)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: \`${data.install}\`

## Usage

${data.steps}

## License

This project is licensed under the ${data.license} license.

## Contribute

${data.contribute}

## Tests

To run tests, run the following command: \`${data.tests}\`

## Questions

If you have questions, visit my [GitHub](https://github.com/${data.username}/${data.project}) or contact me directly at <${data.email}>.
`;
}

module.exports = generateMarkdown;
