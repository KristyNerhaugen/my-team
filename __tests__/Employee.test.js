const Employee = require('../lib/Employee.js');

test('new employee object created', () => {
    const employee = new Employee('name', 'id', 'email', 'role');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
    expect(employee.role).toBe('role');
});

// test for getName method
test("gets employee name", () => {
    const employee = new Employee('name');
    
    expect(employee.getId().toBeDefined);
});

// test for getId method
test("gets employee id", () => {
    const employee = new Employee('id');

    expect(employee.getName().toBeDefined);
});

// test for getEmail method
test("gets employee email", () => {
    const employee = new Employee('email');

    expect(employee.getEmail().toBeDefined);
});

// test for getRole method
test("gets employee role", () => {
    const employee = new Employee('role');

    expect(employee.getRole().toBeDefined)
});