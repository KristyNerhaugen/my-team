// Employee parent class
class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    // getName method
    getName() {
        return `Employee's name: ${this.name}`;
    };

    // getId method
    getId() {
        return `Employee's Id: ${this.id}`;
    };

    // getEmail method
    getEmail() {
        return `Employee's email: ${this.email}`;
    }

    // getRole method (returns 'Employee')

}


module.exports = Employee;