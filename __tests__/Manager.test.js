const Manager = require('../lib/Manager.js');

test('new manager object created', () => {
    const manager = new Manager('name', 'officeNumber', 'manager');

    expect(manager.name).toBe('name');
    expect(manager.officeNumber).toBe('officeNumber');
    expect(manager.role).toBe('manager');
});

// test for getOfficeNumber() method
test("gets office number", () => {
    const manager = new Manager('officeNumber');

    expect(manager.getOfficeNumber().toBeDefined);
});

// test for getRole method 
test ("gets employee role of Manager", () => {
    const manager = new Manager('manager');

    expect(manager.getRole().toBe('manager'));
});