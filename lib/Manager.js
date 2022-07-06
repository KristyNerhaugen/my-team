// Manager class extends Employee 
const Employee = require('./employee');

// Also has officeNumber
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // getOfficeNumber method
    getOfficeNumber() {
        return `Manager's office number: ${this.officeNumber}`;
    };

    // getRole method to override 'Employee' to 'Manager
    getRole() {
    
    }
 }

module.exports = Manager; 