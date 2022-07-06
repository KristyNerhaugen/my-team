// Engineer class extends Employee, so './employee' must be required
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);

        this.gitHub = gitHub;
    }

    // getGithub method
    getGithub() {
        return `Employee's GitHub: ${this.gitHub}`;
    };

   // getRole method to override 'Employee' to 'Engineer'
   getRole() {
    
   }
}


module.exports = Engineer; 