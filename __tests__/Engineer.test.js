const Engineer = require('../lib/Engineer.js');

test('new engineer object created', () => {
    const engineer = new Engineer('name');

    expect(engineer.name).toBe('name');
    expect(engineer.gitHub).toBe('gitHub');
    expect(engineer.role).toBe('engineer');
});

// test for getGithub method
test("gets GitHub account information", () => {
    const engineer = new Engineer('gitHub');

    expect(engineer.getGitHub().toBeDefined);
});

// test for getRole method 
test ("gets employee role of Engineer", () => {
    const engineer = new Engineer('engineer');

    expect(engineer.getRole().toBe('engineer'));
});