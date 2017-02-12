const expect = require('chai').expect;

const Geocalc = require('..');

describe('Calculate', () => {
  it('calculate() should return 0.5 if called with parameters \'triangle\', \'area\', 1, 1', () => {
    expect(Geocalc.calculate('triangle', 'area', 1, 1)).to.equal(0.5);
  });

  it('calculate() should return 4 if called with parameters \'rectangle\', \'circumference\', 1, 1', () => {
    expect(Geocalc.calculate('rectangle', 'circumference', 1, 1)).to.equal(4);
  });

  it('calculate() should return 0.5 if called with parameters \'polygon\', \'area\', 1, 1', () => {
    expect(Geocalc.calculate('polygon', 'area', 5, 1)).to.equal(1.720477400588967);
  });

  it('calculate() should throw \'Circumference not available for polygon!\' if called with parameters \'polygon\', \'circumference\', 5, 1', () => {
    expect(() => Geocalc.calculate('polygon', 'circumference', 5, 1)).to.throw('Circumference not available for polygon!');
  });

  it('calculate() should throw \'Invalid shape!\' if called with invalid shape', () => {
    expect(() => Geocalc.calculate(undefined, 'area', 1, 1)).to.throw('Invalid shape!');
  });

  it('calculate() should throw \'Invalid attribute!\' if called with invalid attribute', () => {
    expect(() => Geocalc.calculate('triangle', null, 1, 1)).to.throw('Invalid attribute!');
  });

  it('calculate() should throw \'Invalid value!\' if called with a missing value', () => {
    expect(() => Geocalc.calculate('triangle', 'circumference', 1)).to.throw('Invalid value!');
  });
});
