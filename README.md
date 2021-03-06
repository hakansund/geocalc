# geocalc

[![Build Status](https://travis-ci.org/hakansund/geocalc.svg?branch=master)](https://travis-ci.org/hakansund/geocalc) [![Coverage Status](https://coveralls.io/repos/github/hakansund/geocalc/badge.svg?branch=master)](https://coveralls.io/github/hakansund/geocalc?branch=master)

A package that makes geometrical calculations

## Installation

For development or to run tests:

    npm install

For use as a library package or CLI program:

    npm install -g

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

## CLI

If installed globally the package creates a shell command `geocalc`:

    Usage: geocalc [options]

    Options:

    -h, --help                            output usage information
    --shape <triangle|rectangle|polygon>  Shape of object [default: triangle]
    --attribute <area|circumference>      Attribute of object [default: area]
    --firstValue <n>                      Base of a triangle, the width of a rectangle or sides in a polygon
    --secondValue <n>                     Height of a triangle, height of a rectangle or side length in a polygon

## Tests

    npm test
