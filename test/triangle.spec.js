const expect = require('chai').expect;

const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('Calculation of circumference', () => {
    it('calculateCircumference() should return 3.414213562373095 if 1, 1 are passed in', () => {
      expect(Triangle.calculateCircumference(1, 1)).to.equal(3.414213562373095);
    });

    it('calculateCircumference() should return 6.82842712474619 if 2, 2 are passed in', () => {
      expect(Triangle.calculateCircumference(2, 2)).to.equal(6.82842712474619);
    });

    it('calculateCircumference() should throw \'Parameter missing or not a number!\' if called with one parameter', () => {
      expect(() => Triangle.calculateCircumference(1)).to.throw('Parameter missing or not a number!');
    });

    it('calculateCircumference() should throw \'Parameter missing or not a number!\' if non-number parameters are passed in', () => {
      expect(() => Triangle.calculateCircumference('a', 1)).to.throw('Parameter missing or not a number!');
    });
  });

  describe('Calculation of area', () => {
    it('calculateArea() should return 0.5 if 1, 1 are passed in', () => {
      expect(Triangle.calculateArea(1, 1)).to.equal(0.5);
    });

    it('calculateArea() should return 3 if 2, 2 are passed in', () => {
      expect(Triangle.calculateArea(2, 2)).to.equal(2);
    });

    it('calculateArea() should throw \'Parameter missing or not a number!\' if too few parameters are passed in', () => {
      expect(() => Triangle.calculateArea(1)).to.throw('Parameter missing or not a number!');
    });

    it('calculateArea() should throw \'Parameter missing or not a number!\' if non-number parameters are passed in', () => {
      expect(() => Triangle.calculateArea('a', 1)).to.throw('Parameter missing or not a number!');
    });
  });
});
