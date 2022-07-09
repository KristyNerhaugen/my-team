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
    console.log('Hello Manager! Please provide some information to build your employee team profile.');
    return inquirer.prompt([
        { // ask for team name to generate the html file name
            type: 'input',
            name: 'teamName',
            message: 'What is the name of your team? (Required)',
            validate: teamNameInput => {
                if (teamNameInput) {
                    return true;
                } else {
                    console.log('Please enter a team name.');
                    return false;
                }
            }
        },
        { // employee name for Manager
            type: 'input',
            name: 'managerName',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        { // employee id number for Manager
            type: 'number',
            name: 'managerId',
            message: 'What is your employee ID number? (Required and only number are accepted.)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your ID number. Only number values are accepted.');
                    return false;
                }
            }
        },
        { // email address for Manager
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        { // ask Manager for office number
            type: 'input',
            name: 'officeNumber',
            message: "What is your office number? (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number.');
                    return false;
                }
            }
        },
        { // employee role
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee you are adding? Please check one role. (Required)',
            choices: ['Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please select employee role.');
                    return false;
                }
            }
        },
        { // employee name for Engineer
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the employee? (Required)',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee name.');
                    return false;
                }
            }
        },
        { // employee id number for Engineer
            type: 'number',
            name: 'engineerId',
            message: 'What is the ID number for this employee? (Required and only number are accepted.)',
            when: (input) => input.role === "Engineer",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the id number. Only number values are accepted.');
                    return false;
                }
            }
        },
        { // email address for Engineer
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email address for this employee? (Required)',
            when: (input) => input.role === "Engineer",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address.');
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
        { // employee name for Intern
            type: 'input',
            name: 'internName',
            message: 'What is the name of the employee? (Required)',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter employee name.');
                    return false;
                }
            }
        },
        { // employee id number for Intern
            type: 'number',
            name: 'internId',
            message: 'What is the ID number for this employee? (Required and only number are accepted.)',
            when: (input) => input.role === "Intern",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the ID number. Only number values are accepted.');
                    return false;
                }
            }
        },
        { // email address for Engineer
            type: 'input',
            name: 'internEmail',
            message: 'What is the email address for this employee? (Required)',
            when: (input) => input.role === "Intern",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address.');
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
                const filename = `./dist/${data.teamName
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
