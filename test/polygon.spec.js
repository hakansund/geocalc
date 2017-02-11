const expect = require('chai').expect;

const Polygon = require('../lib/polygon');

describe('Polygon', () => {
  describe('Calculation of area', () => {
    it('calculateArea() should return 1.720477400588967 if called with parameters 5, 1', () => {
      expect(Polygon.calculateArea(5, 1)).to.equal(1.720477400588967);
    });

    it('calculateArea() should return 19.31370849898476 if called with parameters 8, 2', () => {
      expect(Polygon.calculateArea(8, 2)).to.equal(19.31370849898476);
    });

    it('calculateArea() should throw \'Parameter missing or not a number!\' if called with one parameter', () => {
      expect(() => Polygon.calculateArea(1)).to.throw('Parameter missing or not a number!');
    });

    it('calculateArea() should throw \'Parameter missing or not a number!\' if called with non-number parameter', () => {
      expect(() => Polygon.calculateArea('a', 1)).to.throw('Parameter missing or not a number!');
    });
  });
});
