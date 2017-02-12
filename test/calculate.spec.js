const expect = require('chai').expect;

const Calculate = require('../lib/calculate');

describe('Calculate', () => {
  it('calculate() should return 0.5 if called with parameters \'triangle\', \'area\', 1, 1', () => {
    expect(Calculate.calculate('triangle', 'area', 1, 1)).to.equal(0.5);
  });

  it('calculate() should return 4 if called with parameters \'rectangle\', \'circumference\', 1, 1', () => {
    expect(Calculate.calculate('rectangle', 'circumference', 1, 1)).to.equal(4);
  });

  it('calculate() should return 0.5 if called with parameters \'polygon\', \'area\', 1, 1', () => {
    expect(Calculate.calculate('polygon', 'area', 5, 1)).to.equal(1.720477400588967);
  });

  it('calculate() should throw \'Invalid shape!\' if called with invalid shape', () => {
    expect(() => Calculate.calculate(undefined, 'area', 1, 1)).to.throw('Invalid shape!');
  });

  it('calculate() should throw \'Invalid attribute!\' if called with invalid attribute', () => {
    expect(() => Calculate.calculate('triangle', null, 1, 1)).to.throw('Invalid attribute!');
  });

  it('calculate() should throw \'Invalid values!\' if called with a missing value', () => {
    expect(() => Calculate.calculate('triangle', 'circumference', 1)).to.throw('Invalid value!');
  });
});
