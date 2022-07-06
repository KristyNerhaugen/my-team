// Employee parent class
class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    // getName method
    getName() {
        return this.name;
    };

    // getId method
    getId() {
        return this.id;
    };

    // getEmail method
    getEmail() {
        return this.email;
    }

    // getRole method (returns 'Employee')
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;

// const randoEmployee = new Engineer('Hannah', '21', 'han@email', 'han')
// randoEmployee.getRole() //"Engineer"
// randoEmployee.getName() //"Hannah"

// `${randoEmployee.getName()} is an employee at the firm`

// const engCard = `<div>lots of html text here</div>`
// for (i < engineerAmt.length; ) {

// }