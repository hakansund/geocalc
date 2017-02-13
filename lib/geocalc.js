#!/usr/bin/env node

const program = require('commander');
const geocalc = require('..');
const chalk = require('chalk');

program
  .option('--shape <triangle|rectangle|polygon>', 'Shape of object [default: triangle]', /^(triangle|rectangle|polygon)$/i, 'triangle')
  .option('--attribute <area|circumference>', 'Attribute of object [default: area]', /^(circumference|area)$/i, 'area')
  .option('--firstValue <n>', 'Base of a triangle, the width of a rectangle or sides in a polygon', parseInt)
  .option('--secondValue <n>', 'Height of a triangle, height of a rectangle or side length in a polygon', parseInt)
  .parse(process.argv);

try {
  const result = geocalc.calculate(program.shape, program.attribute, program.firstValue, program.secondValue);
  console.log(chalk.green(`\nThe ${program.attribute} of the ${program.shape} is: ${result}\n`));
} catch (err) {
  console.log(chalk.red(`\n${err.message}\n`));
}

