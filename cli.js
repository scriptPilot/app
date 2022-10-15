#! /usr/bin/env node

const { program } = require('commander')

program
  .command('hello')
  .action(require('./scripts/hello'))

program.parse()
