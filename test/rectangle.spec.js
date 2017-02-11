const expect = require('chai').expect;

const Rectangle = require('../lib/rectangle');

describe('Rectangle', () => {
  describe('Calculation of circumference', () => {
    it('calculateCircumference() should return 4 if called with parameters 1, 1', () => {
      expect(Rectangle.calculateCircumference(1, 1)).to.equal(4);
    });

    it('calculateCircumference() should return 8 if called with parameters 2, 2', () => {
      expect(Rectangle.calculateCircumference(2, 2)).to.equal(8);
    });

    it('calculateCircumference() should throw \'Parameter missing or not a number!\' if called with one parameter', () => {
      expect(() => Rectangle.calculateCircumference(1)).to.throw('Parameter missing or not a number!');
    });

    it('calculateCircumference() should throw \'Parameter missing or not a number!\' if called with non-number parameter', () => {
      expect(() => Rectangle.calculateCircumference('a', 1)).to.throw('Parameter missing or not a number!');
    });
  });

  describe('Calculation of area', () => {
    it('calculateArea() should return 1 if called with parameters 1, 1', () => {
      expect(Rectangle.calculateArea(1, 1)).to.equal(1);
    });

    it('calculateArea() should return 4 if called with parameters 2, 2', () => {
      expect(Rectangle.calculateArea(2, 2)).to.equal(4);
    });

    it('calculateArea() should throw \'Parameter missing or not a number!\' if called with one parameter', () => {
      expect(() => Rectangle.calculateArea(1)).to.throw('Parameter missing or not a number!');
    });

    it('calculateArea() should throw \'Parameter missing or not a number!\' if called with non-number parameter', () => {
      expect(() => Rectangle.calculateArea('a', 1)).to.throw('Parameter missing or not a number!');
    });
  });
});
