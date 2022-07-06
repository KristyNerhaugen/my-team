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
        return this.officeNumber;
    };

    // getRole method to override 'Employee' to 'Manager
    getRole() {
        return "Manager";
    }
 }

module.exports = Manager; 