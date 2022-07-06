const Intern = require('../lib/Intern.js');

test('new intern object created', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
});

// test getSchool() method
test("gets school information", () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getSchool()).toBe('school');
});

// test for getRole method 
test ("gets employee role of Intern", () => {
    const intern = new Intern('role');

    expect(intern.getRole()).toBe('Intern');
});