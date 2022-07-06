// Packages required for this application to run 
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

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
            choices: ['Manager', 'Engineer', 'Employee', 'Intern']
        },
        {
            // confirm Manager for office number
            type: 'confirm',
            name: 'confirmManager',
            message: 'Are you a Manager?',
            default: false
        },
        {
            // if Manager is confirmed, ask for office number
            type: 'input',
            name: 'officeNumber',
            message: "Please enter your office number.",
            when: ({ confirmManager }) => confirmManager
        },
        {
            // confirm Engineer for gitHub account
            type: 'confirm',
            name: 'confirmEngineer',
            message: 'Are you an Engineer?',
            default: false
        },
        {
            // if Engineer is confirmed, ask for GitHub username
            type: 'input',
            name: 'gitHub',
            message: "Please enter your GitHub account username.",
            when: ({ confirmEngineer }) => confirmEngineer
        },
        {
            // confirm Intern for school information
            type: 'confirm',
            name: 'confirmIntern',
            message: 'Are you an Intern?',
            default: false
        },
        {
            // if Intern is confirmed, ask for school information
            type: 'input',
            name: 'school',
            message: "What school do you attend?",
            when: ({ confirmIntern }) => confirmIntern
        },
    ])

    // function to write HTML
    .then(data => {
        const filename = `./dist/${data.name}.html`;
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
