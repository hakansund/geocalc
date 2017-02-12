# geocalc

A package that makes geometrical calculations

## Installation

    npm install

## Usage

This package has one function `calculate(shape, attribute, firstValue, secondValue)` that takes four arguments:

`shape` is the shape of the object. Valid values are: 'triangle', 'rectangle' or 'polygon'.

`attribute` is the attribute to calculate. Valid values are: 'area' or 'circumference'. *Note that circumference is not available for a polygon.*

`firstValue`is the base of a triangle, the width of a rectangle or sides in a polygon.

`secondValue` is the height of a triangle, height of a rectangle or side length in a polygon.
 
    var geocalc = require('geocalc');

    // Area of triangle
    var triangleArea = geocalc.calculate('triangle', 'area', 1, 1); // 0.5
  
    // Circumference of rectangle
    var rectangleCircumference = geocalc.calculate('rectangle', 'circumference', 1, 1); // 4
   
    // Area of polygon
    var polygonArea = geocalc.calculate('polygon', 'area', 5, 1); // 1.720477400588967

## Tests

    npm test
