// Packages required for this application to run 
const inquirer = require('inquirer');
const fs = require('fs');
// Require generate-site to connect to generate-site.js
const generateSite = require('./src/generate-site.js');
const { writeFile } = require('./src/generate-site.js');
const { generate } = require('rxjs');

// Array of questions to get employee input
const questions = () => {
    return inquirer.prompt([
        {
            // employee name
            type: 'input',
            name: 'name',
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
        {
            // employee id number
            type: 'input',
            name: 'id',
            message: 'What is your employee id number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your id number.');
                    return false;
                }
            }
        },
        {
            // email address
            type: 'input',
            name: 'email',
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
        {
            // employee role
            type: 'checkbox',
            name: 'role',
            message: 'What is your employee role? Please check one role. (Required)',
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please select your employee role.');
                    return false;
                }
            }
        },
        // {
        //     // confirm Manager for office number
        //     type: 'confirm',
        //     name: 'confirmManager',
        //     message: 'Are you a Manager?',
        //     default: false
        // },
        {
            // if Manager is selected, ask for office number
            type: 'input',
            name: 'officeNumber',
            message: "Please enter your office number. (Required)",
            when: ({ confirmManager }) => confirmManager,
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number.');
                    return false;
                }
            }
        },
        // {
        //     // confirm Engineer for gitHub account
        //     type: 'confirm',
        //     name: 'confirmEngineer',
        //     message: 'Are you an Engineer?',
        //     default: false
        // },
        {
            // if Engineer is selected, ask for GitHub username
            type: 'input',
            name: 'gitHub',
            message: "Please enter your GitHub account username. (Required)",
            when: ({ confirmEngineer }) => confirmEngineer,
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub account username.');
                    return false;
                }
            }
        },
        // {
        //     // confirm Intern for school information
        //     type: 'confirm',
        //     name: 'confirmIntern',
        //     message: 'Are you an Intern?',
        //     default: false
        // },
        {
            // if Intern is selected, ask for school information
            type: 'input',
            name: 'school',
            message: "What school do you attend? (Required)",
            when: ({ confirmIntern }) => confirmIntern,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your school information.');
                    return false;
                }
            }
        },
    ])

        // function to write HTML
        .then(data => {
            const filename = `./dist/${data.name
                .split(' ')
                .join('')}.html`;
                fs.writeFile(filename, generateSite(data), err =>
                err ? console.log(err) : console.log('Success! HTML page created!')
            );
        });
};


// function to initialize app
function init() {
    questions();
}

// function to call initialize app
init();
