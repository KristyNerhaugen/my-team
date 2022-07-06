const Intern = require('../lib/Intern.js');

test('new intern object created', () => {
    const intern = new Intern('name');

    expect(intern.name).toBe('name');
    expect(intern.school).toBe('school');
    expect(intern.role).toBe('intern');
});

// test getSchool() method
test("gets school information", () => {
    const intern = new Intern('school');

    expect(intern.getSchool().toBeDefined);
});

// test for getRole method 
test ("gets employee role of Intern", () => {
    const intern = new Inern('intern');

    expect(intern.getRole().toBe('intern'));
});