const Math = require('./Math');

describe('Sum function is working', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(Math.sum(1, 2)).toBe(3);
        expect(Math.sum(11, 22)).toBe(33);
    });
    test('adds -1 + -2 to equal -3', () => {
        expect(Math.sum(-1, -2)).toBe(-3);
        expect(Math.sum(-11, -22)).toBe(-33);
    });
});

describe('Minus function is working', () => {
    test('adds 1 - 2 to equal -1', () => {
        expect(Math.minus(1, 2)).toBe(-1);
        expect(Math.minus(11, 22)).toBe(-11);
    });
    test('adds -1 - -2 to equal 1', () => {
        expect(Math.minus(-1, -2)).toBe(1);
        expect(Math.minus(-11, -22)).toBe(11);
    });
});

describe('Multiply function is working', () => {
    test('adds 1 * 2 to equal 2', () => {
        expect(Math.multiply(1, 2)).toBe(2);
        expect(Math.multiply(11, 22)).toBe(242);
    });
    test('adds -1 * -2 to equal 2', () => {
        expect(Math.multiply(-1, -2)).toBe(2);
        expect(Math.multiply(-11, -22)).toBe(242);
    });
});

describe('Divide function is working', () => {
    test('adds 1 / 2 to equal 0.5', () => {
        expect(Math.divide(1, 2)).toBe(0.5);
        expect(Math.divide(11, 22)).toBe(0.5);
    });
    test('adds -1 / -2 to equal 0.5', () => {
        expect(Math.divide(-1, -2)).toBe(0.5);
        expect(Math.divide(-11, -22)).toBe(0.5);
    });
});
