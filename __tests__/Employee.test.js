const Employee = require('../lib/Employee.js');

test('new employee object created', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
});

// test for getName method
test("gets employee name", () => {
    const employee = new Employee('name');
    
    expect(employee.getName()).toBe('name');
});

// test for getId method
test("gets employee id", () => {
    const employee = new Employee('name', 'id');

    expect(employee.getId()).toBe('id');
});

// test for getEmail method
test("gets employee email", () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.getEmail()).toBe('email');
});

// test for getRole method
test("gets employee role", () => {
    const employee = new Employee('role');

    expect(employee.getRole()).toBe('Employee');
});