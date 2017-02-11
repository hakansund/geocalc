exports.calculateCircumference = (base, height) => {
  // Check that parameters are numbers
  if (isNaN(base) || isNaN(height)) {
    throw new Error('Parameter missing or not a number!');
  }
  // Calculate and return circumference
  return (base + height) * 2;
};

exports.calculateArea = (base, height) => {
  // Check that parameters are numbers
  if (isNaN(base) || isNaN(height)) {
    throw new Error('Parameter missing or not a number!');
  }
  // Calculate and return area
  return base * height;
};
