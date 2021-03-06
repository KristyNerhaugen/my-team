// Intern class extends Employee 
const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
// add getSchool method
 getSchool() {
        return this.school;
    };

// getRole method overrides 'Employee' to 'Intern'
   getRole() {
    return "Intern";
   }
}

module.exports = Intern; 