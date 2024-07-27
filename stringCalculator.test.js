const stringCalculator = require('./stringCalculator');


describe('stringCalculator tests' , () => {
    test('An empty string should return zero', () => {
        expect(stringCalculator('')).toBe(0);
      });

    test('A single value should return the value', () => {
        expect(stringCalculator('1')).toBe(1);
    });

    test('Two numbers should return the sum of numbers', () => {
        expect(stringCalculator('1, 2')).toBe(3);
    });

    test('Multiple numbers should return the sum of numbers', () => {
        expect(stringCalculator('1, 2, 3')).toBe(6);
    });

    test('new line as delimiter should return the sum of numbers', () => {
        expect(stringCalculator('1\n2, 3')).toBe(6);
    });

    test('support for different delimiters', () => {
        expect(stringCalculator('//;\n1;2')).toBe(3);
    });
})
