const Engineer = require('../lib/Engineer.js');

test('new engineer object created', () => {
    const engineer = new Engineer('name');

    expect(engineer.name).toBe('name');
});