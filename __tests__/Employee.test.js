const Employee = require('../lib/Employee.js');

test('new employee object created', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name');
});