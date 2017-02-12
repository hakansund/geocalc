exports.calculateCircumference = (width, height) => {
  // Check that parameters are numbers
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Parameter missing or not a number!');
  }
  // Calculate and return circumference
  return (width + height) * 2;
};

exports.calculateArea = (width, height) => {
  // Check that parameters are numbers
  if (isNaN(width) || isNaN(height)) {
    throw new Error('Parameter missing or not a number!');
  }
  // Calculate and return area
  return width * height;
};
