// suma.test.js
const suma = require('./suma');

test('debería sumar 2 + 2 y devolver 4', () => {
    expect(suma(2, 2)).toBe(4);
});
