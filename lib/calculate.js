const Triangle = require('./triangle');
const Rectangle = require('./rectangle');
const Polygon = require('./polygon');

module.exports = function calculate(shape, attribute, firstValue, secondValue) {
  // Check that shape is valid
  if (typeof shape !== 'string' || !shape.match('triangle|rectangle|polygon')) {
    throw new TypeError('Invalid shape!');
  }
  // Check that attribute is valid
  if (typeof attribute !== 'string' || !attribute.match('circumference|area')) {
    throw new TypeError('Invalid attribute!');
  }
  if (shape === 'polygon' && attribute === 'circumference') {
    throw new TypeError('Circumference not available for polygon!');
  }
  // Check that values are valid
  if (isNaN(firstValue) || isNaN(secondValue)) {
    throw new TypeError('Invalid value!');
  }
  // Define wanted shape
  const shapes = {
    triangle: Triangle,
    rectangle: Rectangle,
    polygon: Polygon,
  };
  const wantedShape = shapes[shape];
  // Define wanted attribute
  const attributes = {
    circumference: wantedShape.calculateCircumference,
    area: wantedShape.calculateArea,
  };
  const wantedAttribute = attributes[attribute];
  // Calculate and return wanted attribute
  return wantedAttribute(firstValue, secondValue);
};
