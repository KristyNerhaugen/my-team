const Manager = require('../lib/Manager.js');

test('new manager object created', () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe('officeNumber');
});

// test for getOfficeNumber() method
test("gets office number", () => {
    const manager = new Manager('name', 'id', 'email', 'officeNumber');

    expect(manager.getOfficeNumber()).toBe('officeNumber');
});

// test for getRole method 
test ("gets employee role of Manager", () => {
    const manager = new Manager('role');

    expect(manager.getRole()).toBe('Manager');
});