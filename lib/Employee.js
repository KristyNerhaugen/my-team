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