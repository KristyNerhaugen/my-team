// Node packages required for this application to run 
const inquirer = require('inquirer');
const fs = require('fs');
// Require generate-site to connect to generate-site.js
const generateSite = require('./src/generate-site.js');
const { writeFile } = require('./src/generate-site.js');
// Require lib .js files
const employee = require('./lib/Employee.js');
const engineer = require('./lib/Engineer.js');
const intern= require('./lib/Intern.js');
const manager = require('./lib/Manager.js');

// Function to prompt array of questions to build new team
const newTeam = () => {
    console.log('Begin to build your employee team.');
    return inquirer.prompt([
        { // employee role
            type: 'list',
            name: 'role',
            message: 'What is the role of this employee? Please check one role. (Required)',
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please select employee role.');
                    return false;
                }
            }
        },
        { // employee name
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee name.');
                    return false;
                }
            }
        },
        { // employee id number
            type: 'number',
            name: 'id',
            message: 'What is the id number for this employee? (Required and only number are accepted.)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the id number.');
                    return false;
                }
            }
        },
        { // email address
            type: 'input',
            name: 'email',
            message: 'What is the email address for this employee? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address.');
                    return false;
                }
            }
        },
        { // if Manager is selected, ask for office number
            type: 'input',
            name: 'officeNumber',
            message: "Please enter office number for this Manager. (Required)",
            when: (input) => input.role === "Manager",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the office number.');
                    return false;
                }
            }
        },
        {  // if Engineer is selected, ask for GitHub username
            type: 'input',
            name: 'gitHub',
            message: "Please enter the GitHub account username for this Engineer. (Required)",
            when: (input) => input.role === "Engineer",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub account username.');
                    return false;
                }
            }
        },
        {  // if Intern is selected, ask for school information
            type: 'input',
            name: 'school',
            message: "What school does the intern attend? (Required)",
            when: (input) => input.role  === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter school information.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'anotherEmployee',
            message: "Would you like to add another employee to your team list? Enter y for yes or n for no.",
            default: false
        }
    ])
    // function to add another employee if anotherEmployee prompt is confirmed "True" OR write HTML if confirmed "False"
        .then(data => {
            if(data.anotherEmployee){
                return newTeam();
            } else {
                const filename = `./dist/${data.name
                .split(' ')
                .join('')}.html`;
                fs.writeFile(filename, generateSite(data), err =>
                err ? console.log(err) : console.log('Success! HTML page created!')
                );
            }
        });
};


// function to initialize app
function init() {
    newTeam();
}

// function to call initialize app
init();
