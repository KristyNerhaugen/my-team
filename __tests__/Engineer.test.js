const Engineer = require('../lib/Engineer.js');

test('new engineer object created', () => {
    const engineer = new Engineer('name');

    expect(engineer.name).toBe('name');
    expect(engineer.gitHub).toBe('gitHub');
});

// test for getGithub method
test("gets GitHub account information", () => {
    const engineer = new Engineer('gitHub');

    expect(engineer.getGitHub().toBeDefined);
});
