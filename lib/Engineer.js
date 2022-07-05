// Engineer class extends Employee, so './employee' must be required
const Employee = require('./employee');

class Engineer extends Character {
    constructor (name, id, email) {
        super(name, id, email);

        this.gitHub = gitHub;
    }
};

// add getGithub method

// getRole method overrides 'Employee' to 'Engineer'

module.exports = Engineer; 