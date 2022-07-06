const Engineer = require('../lib/Engineer.js');

test('new engineer object created', () => {
    const engineer = new Engineer('name', 'id', 'email', 'gitHub');

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
    expect(engineer.gitHub).toBe('gitHub');
});

// test for getGithub method
test("gets GitHub account information", () => {
    const engineer = new Engineer('name', 'id', 'email', 'gitHub');

    expect(engineer.getGithub()).toBe('gitHub');
});

// test for getRole method 
test ("gets employee role of Engineer", () => {
    const engineer = new Engineer('role');

    expect(engineer.getRole()).toBe('Engineer');
});