exports.calculateArea = (sides, length) => {
  // Check that parameters are numbers
  if (isNaN(sides) || isNaN(length)) {
    throw new Error('Parameter missing or not a number!');
  }
  // Calculate and return area
  return 0.25 * sides * length * length * (Math.cos(Math.PI / sides) / Math.sin(Math.PI / sides));
};
